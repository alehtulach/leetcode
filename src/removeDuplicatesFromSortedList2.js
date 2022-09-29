/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = (head) => {
  let dummy = new ListNode(Infinity, head);
  let prev = dummy;

  while (head !== null) {
    while (head.val === head.next?.val) {
      head = head.next;
    }
    if (prev.next !== null && prev.next.val === prev.next.next?.val) {
      prev.next = head.next;
    } else {
      prev = prev.next;
    }
    head = head.next;
  }
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
  return createNode(0);
};

deleteDuplicates(createListNode([1, 2, 2, 3, 4, 5, 5, 5, 6, 7]));
