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
const swapPairs = (head) => {
  let dummy = new ListNode(-1, head);
  let current = head;
  let prev = dummy;

  while (current && current.next) {
    let nextPair = current.next.next;
    let second = current.next;

    second.next = current;
    current.next = nextPair;
    prev.next = second;

    prev = current;
    current = nextPair;
  }

  return dummy.next;
};

const swapPairs2 = (head) => {
  let dummy = new ListNode(-1, head);
  let current = head;
  let prev = dummy;

  const swap = (current) => {
    if (current && current.next) {
      let nextPair = current.next.next;
      let second = current.next;

      second.next = current;
      current.next = nextPair;
      prev.next = second;

      prev = current;

      swap(nextPair);
    }
  };
  swap(current);

  return dummy.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const createListNode = (arr, i) => {
  const createNode = (i) => {
    return new ListNode(
      arr[i],
      arr.length - 1 >= i + 1 ? createNode(i + 1) : undefined
    );
  };
  return createNode(i);
};

swapPairs2(createListNode([1, 2, 3, 4, 5, 6], 0));
