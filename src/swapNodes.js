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
const swapNodes = (head, k) => {
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
  if (length === 1 && k === 1) return head;
  else if (length % 2 === 1 && Math.round(length / 2) === k) {
    return head;
  }

  let dummy = new ListNode(-1, head);

  let ind1 = k;
  let ind2 = length - k + 1;
  if (ind1 > ind2) {
    let temp = ind1;
    ind1 = ind2;
    ind2 = temp;
  }

  let onePrev = getNode(dummy, ind1, 1);
  let twoPrev = getNode(dummy, ind2, 1);
  let one = onePrev.next;
  let two = twoPrev.next;
  let oneNext = one.next;
  let twoNext = two.next;

  onePrev.next = two;
  if (ind1 + 1 === ind2) {
    two.next = one;
  } else {
    two.next = oneNext;
    twoPrev.next = one;
  }
  one.next = twoNext;

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

swapNodes(createListNode([1, 2], 0), 2);
