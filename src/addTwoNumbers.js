const l1Arr = [9, 9, 9, 9, 9, 9];
const l2Arr = [9, 9, 9];

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const createListNodes = (arr) => {
  return arr.reduce((nodes, val) => {
    if (!nodes) {
      const first = new ListNode(val);
      return { first, last: null };
    }
    const nextNode = new ListNode(val);
    const { first, last } = nodes;
    if (!last) {
      first.next = nextNode;
    } else {
      last.next = nextNode;
    }
    return { first, last: nextNode };
  }, null);
};

const addTwoNumbers = (l1, l2) => {
  let overflow = 0;
  let currNode = new ListNode(-1);
  let firstNode = new ListNode(0);
  while (l1 || l2) {
    let sum = (l1?.val || 0) + (l2?.val || 0) + overflow;
    overflow = sum >= 10 ? 1 : 0;
    if (currNode.val === -1) {
      currNode.val = sum % 10;
      firstNode = currNode;
    } else {
      currNode.next = new ListNode(sum % 10);
      currNode = currNode.next;
    }
    l1 = l1?.next;
    l2 = l2?.next;
  }
  if (overflow > 0) {
    currNode.next = new ListNode(overflow);
  }
  return firstNode;
};

addTwoNumbers(createListNodes(l1Arr).first, createListNodes(l2Arr).first);
