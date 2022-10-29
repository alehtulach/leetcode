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
 * @return {boolean}
 */
const isValidBST = (root) => {
  const ver1 = () => {
    let isValid = true;
    const dfs = (l, r, root) => {
      if (!isValid || !root) return;
      if (root.val < r && root.val > l) {
        dfs(l, root.val, root.left);
        dfs(root.val, r, root.right);
      } else {
        isValid = false;
      }
    };
    dfs(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, root);
    return isValid;
  };
  ver1();

  const ver2 = () => {
    const valid = (node, left, right) => {
      if (!node) return true;
      if (!(node.val < right && node.val > left)) return false;
      return (
        valid(node.left, left, node.val) && valid(node.right, node.val, right)
      );
    };
    return valid(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
  };
  ver2();
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

isValidBST(createBT([5, 1, 4, null, null, 3, 6]));
