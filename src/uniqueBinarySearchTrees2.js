/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
const generateTrees = (n) => {
  if (n < 1) return [];
  let res = generate(1, n);
  return res;
};

const generate = (l, r) => {
  const nodes = [];
  let node = null;
  let left = [];
  let right = [];
  for (let i = l; i <= r; i++) {
    left = generate(l, i - 1);
    right = generate(i + 1, r);
    for (let j = 0; j < left.length; j++) {
      for (let k = 0; k < right.length; k++) {
        node = new TreeNode(i);
        node.left = left[j];
        node.right = right[k];
        nodes.push(node);
      }
    }
  }
  return nodes.length ? nodes : [null];
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

generateTrees(2);
