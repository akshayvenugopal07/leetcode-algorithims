function ListNode(val) {
    this.val = val;
    this.next = null;
}

// Create nodes 1 → 1 → 2 → 3 → 3 → 4 → 4 → 5 → null (a proper linked list with duplicates)
const head = new ListNode(1);
head.next = new ListNode(1);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(3);
head.next.next.next.next.next = new ListNode(4);
head.next.next.next.next.next.next = new ListNode(4);
head.next.next.next.next.next.next.next = new ListNode(5);

/**
 * @param {ListNode} head
 */
var deDuplicateUnsortedLinkedList = function (head) {
    if (!head) return head;
    
    const seen = new Set();
    let current = head;
    let prev = null;
    
    while (current) {
        if (seen.has(current.val)) {
            // Remove duplicate node
            prev.next = current.next;
        } else {
            // First occurrence, add to set
            seen.add(current.val);
            prev = current;
        }
        current = current.next;
    }
    return head;
};

deDuplicateUnsortedLinkedList(head);