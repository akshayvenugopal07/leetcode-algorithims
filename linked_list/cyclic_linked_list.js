/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    // Handle edge cases
    if (!head || !head.next) {
        return false;
    }
    
    // Floyd's Cycle Detection Algorithm (Tortoise and Hare)
    let slow = head;      // Tortoise: moves 1 step
    let fast = head;      // Hare: moves 2 steps
    
    // Continue until fast pointer reaches end or we detect a cycle
    while (fast && fast.next) {
        slow = slow.next;        // Move slow pointer 1 step
        fast = fast.next.next;   // Move fast pointer 2 steps
        
        // If pointers meet, there's a cycle
        if (slow === fast) {
            return true;
        }
    }
    
    // If we reach here, fast pointer hit the end (no cycle)
    return false;
};
