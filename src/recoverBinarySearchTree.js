/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
const recoverTree = (root) => {
  let first = null;
  let prev = null;
  let last = null;
  const traversal = (node) => {
    if (!node) return;
    traversal(node.left);
    if (prev) {
      if (prev.val > node.val) {
        if (!first) first = prev;
        last = node;
      }
    }
    prev = node;
    traversal(node.right);
  };

  traversal(root);
  const temp = first.val;
  first.val = last.val;
  last.val = temp;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const createBT = (arr) => {
  const create = (node, i) => {
    if (node != null) {
      if (2 * i + 1 < arr.length) {
        if (arr[2 * i + 1] === null) {
          node.left = null;
        } else {
          node.left = new TreeNode(arr[2 * i + 1]);
          create(node.left, 2 * i + 1);
        }
      }
      if (2 * i + 2 < arr.length) {
        if (arr[2 * i + 2] === null) {
          node.right = null;
        } else {
          node.right = new TreeNode(arr[2 * i + 2]);
          create(node.right, 2 * i + 2);
        }
      }
    }
  };
  const head = new TreeNode(arr[0]);
  create(head, 0, arr);
  return head;
};

recoverTree(createBT([1, 3, null, null, 2]));
