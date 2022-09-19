/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = (path) => {
  let res = [];
  let temp = "";
  path += "/";
  for (let i = 0; i <= path.length - 1; i++) {
    if (path[i] === "/") {
      if (temp === "..") {
        if (res.length > 0) res.pop();
      } else if (temp !== "" && temp !== ".") {
        res.push(temp);
      }
      temp = "";
    } else {
      temp += path[i];
    }
  }
  return `/${res.join("/")}`;
};

simplifyPath("/a//b////c/d//././/..");
