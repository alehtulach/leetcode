/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
const reverseBetween = (head, left, right) => {
  let dummy = new ListNode(Infinity, head);
  let prev = dummy;
  let cur = head;
  for (let i = 0; i < left - 1; i++) {
    cur = cur.next;
    prev = prev.next;
  }

  let prevLeft = prev;
  prev = null;
  for (let i = 0; i < right - left + 1; i++) {
    let temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
  }

  prevLeft.next.next = cur;
  prevLeft.next = prev;

  return dummy.next;
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

reverseBetween(createListNode([1, 2, 3, 4, 5]), 2, 4);
