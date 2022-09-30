/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
const partition = (head, x) => {
  let left = new ListNode();
  let leftTail = left;
  let right = new ListNode();
  let rightTail = right;
  while (head) {
    if (head.val < x) {
      leftTail.next = head;
      leftTail = leftTail.next;
    } else {
      rightTail.next = head;
      rightTail = rightTail.next;
    }
    head = head.next;
  }
  leftTail.next = right.next;
  rightTail.next = null;

  return left.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const createListNode = (arr) => {
  const createNode = (i) => {
    return new ListNode(
      arr[i],
      arr.length - 1 >= i + 1 ? createNode(i + 1) : undefined
    );
  };
  return arr.length === 0 ? null : createNode(0);
};

partition(createListNode([1]), 2);
