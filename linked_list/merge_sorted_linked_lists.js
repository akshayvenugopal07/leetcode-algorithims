/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    // Create a dummy node to simplify the logic
    let dummy = new ListNode(0);
    let current = dummy;
    
    // Traverse both lists and merge them
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    
    // If one list is exhausted, append the remaining nodes from the other list
    current.next = list1 !== null ? list1 : list2;
    
    // Return the merged list (skip the dummy node)
    return dummy.next;
};