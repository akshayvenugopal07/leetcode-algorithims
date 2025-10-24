function ListNode(val) {
    this.val = val;
    this.next = null;
}

// Create nodes 1 → 2 → 3 → 4 → null
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

/**
 * @param {ListNode} head
 */
var traverseLinkedList = function (head) {
    console.log(head);
    let current = head;
    while (current !== null) {
        console.log(current.val)
        current = current.next;
    }
};

traverseLinkedList(head);