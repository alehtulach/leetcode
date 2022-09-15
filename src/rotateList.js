/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = (head, k) => {
  const getNode = (head, returnCount, currCount) => {
    let returnNode = head;
    if (currCount !== returnCount) {
      returnNode = getNode(head.next, returnCount, currCount + 1);
    } else {
      return returnNode;
    }
    return returnNode;
  };

  const getLength = (head) => {
    let temp = head;
    let count = 0;
    while (temp != null) {
      count++;
      temp = temp.next;
    }
    return count;
  };

  let length = getLength(head);
  k = k % length;

  if (head === null || length === 1 || k === 0 || k === length) return head;

  let newTail = getNode(head, length - k, 1);
  let newHead = newTail.next;
  let tail = getNode(head, length, 1);
  tail.next = head;
  newTail.next = null;

  return newHead;
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
  return createNode(0);
};

rotateRight(createListNode([1, 2]), 0);
