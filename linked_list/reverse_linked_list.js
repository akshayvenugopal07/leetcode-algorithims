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
var reverseList = function(head) {
    let prev = null;
    let current = head;
    
    while (current !== null) {
        let next = current.next;  // Store next node
        current.next = prev;      // Reverse the link
        prev = current;           // Move prev forward
        current = next;           // Move current forward
    }
    
    return prev;  // prev is now the new head
};