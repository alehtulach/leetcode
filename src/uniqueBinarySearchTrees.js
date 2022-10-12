/**
 * @param {number} n
 * @return {number}
 */
const numTrees = (n) => {
  let numTree = new Array(n + 1).fill(1);

  for (let nodes = 2; nodes <= n; nodes++) {
    let total = 0;
    for (let root = 1; root <= nodes; root++) {
      let left = root - 1;
      let right = nodes - root;
      total += numTree[left] * numTree[right];
    }
    numTree[nodes] = total;
  }
  return numTree[n];
};

numTrees(3);
