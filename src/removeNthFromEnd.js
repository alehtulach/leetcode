const nodeArr = [1, 2, 3, 4, 5];

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
  const getPrevToDel = (prevToDelCount, currCount, head) => {
    let prevToDel = head;
    if (currCount !== prevToDelCount) {
      prevToDel = getPrevToDel(prevToDelCount, currCount + 1, head.next);
    } else {
      return prevToDel;
    }
    return prevToDel;
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

  const length = getLength(head);
  if (length === n) {
    return head.next;
  }
  const prevToDelCount = length - n;
  let prevToDel = getPrevToDel(prevToDelCount, 1, head);
  let nextToDel = prevToDel.next.next;
  prevToDel.next = nextToDel;

  return head;
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

removeNthFromEnd(createListNode(nodeArr, 0), 2);
