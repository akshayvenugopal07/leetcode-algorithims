// 2 pass solution to find length first, then remove the (L-n)th node

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
var removeNthFromEnd = function (head, n) {
    let length = 0;

    let current = head;

    // Find the length of the linked list
    while (current !== null) {
        length++;
        current = current.next;
    }

    let itemToRemove = length - n;

    // Handle edge case: removing the first node
    if (itemToRemove === 0) {
        return head.next;
    }

    // Traverse to the node before the one to remove
    current = head;
    for (let i = 0; i < itemToRemove - 1; i++) {
        current = current.next;
    }

    // Remove the nth node from end
    if (current.next !== null) {
        current.next = current.next.next;
    }

    return head;

};

// Single pass solution using two pointers

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    // Create a dummy node that points to head
    // This helps handle edge cases like deleting the head itself
    let dummy = new ListNode(0, head);

    let fast = dummy;
    let slow = dummy;

    // Step 1: Move fast pointer n+1 steps ahead
    // (so slow will point to node *before* the one to delete)
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    // Step 2: Move both pointers until fast reaches end
    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    // Step 3: Delete the target node
    slow.next = slow.next.next;

    // Return new head (could be different if we deleted the first node)
    return dummy.next;
};