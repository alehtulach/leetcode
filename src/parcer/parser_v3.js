const XLSX = require("xlsx");

const fileNames = process.argv.splice(2);

const parseExcel = (filename) => {
  const excelData = XLSX.readFile(filename, { cellDates: true });

  return Object.keys(excelData.Sheets).map((name) => ({
    name,
    data: XLSX.utils.sheet_to_json(excelData.Sheets[name]),
  }));
};

const resBlockers = {};
parseExcel(fileNames[0]).forEach((element) => {
  element.data.forEach((row) => {
    if (row["UnblockedDate"] && row["BlockedDate"]) {
      if (resBlockers[row["FormattedID"]]) {
        let maxKey = Math.max(Object.keys(resBlockers[row["FormattedID"]]));
        resBlockers[row["FormattedID"]] = {
          ...resBlockers[row["FormattedID"]],
          [maxKey + 1]: {
            BlockedDate: row["BlockedDate"],
            UnblockedDate: row["UnblockedDate"],
          },
        };
      } else {
        resBlockers[row["FormattedID"]] = {
          1: {
            BlockedDate: row["BlockedDate"],
            UnblockedDate: row["UnblockedDate"],
          },
        };
      }
    }
  });
});

const oneDay = 1000 * 60 * 60 * 24;
const resWorkbook = [];
parseExcel(fileNames[1]).forEach((element) => {
  element.data.forEach((cycleRow) => {
    const resRow = {};
    let totalBlockedTime = 0;
    resRow["Formatted ID"] = cycleRow["Formatted ID"];
    resRow["In Progress Date"] = cycleRow["In Progress Date"];
    resRow["Accepted Date"] = cycleRow["Accepted Date"];
    resRow["Cycle Time"] = cycleRow["Cycle Time"];
    if (resBlockers[cycleRow["Formatted ID"]]) {
      for (const [key, value] of Object.entries(
        resBlockers[cycleRow["Formatted ID"]]
      )) {
        if (value["BlockedDate"] > cycleRow["In Progress Date"]) {
          let diffMs = value["UnblockedDate"] - value["BlockedDate"];
          let diffDays = Math.round(diffMs / oneDay);
          totalBlockedTime = totalBlockedTime + diffDays;
        }
      }
      resRow["Total Blocked Time (Days)"] = totalBlockedTime || undefined;
    } else {
      resRow["Total Blocked Time (Days)"] = undefined;
    }
    resWorkbook.push(resRow);
  });
});

const workbook = XLSX.utils.book_new();
const worksheet = XLSX.utils.json_to_sheet(resWorkbook, {
  dateNF: "m/d/yyyy",
});
XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
XLSX.writeFile(workbook, "./result.csv");
