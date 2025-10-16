/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    // Step 1: Copy all node values into an array
    const values = [];
    let current = head;
    while (current) {
        values.push(current.val);
        current = current.next;
    }

    // Step 2: Create reversed version
    const reversed = [...values].reverse();

    // Step 3: Compare both arrays
    for (let i = 0; i < values.length; i++) {
        if (values[i] !== reversed[i]) {
            return false;
        }
    }

    return true;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    if (!head || !head.next) return true;

    // Step 1: Find the middle of the list
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse the second half
    let secondHalf = reverseList(slow);

    // Step 3: Compare the two halves
    let firstHalf = head;
    let secondHalfCopy = secondHalf; // to restore later
    let isPalin = true;
    while (secondHalf) {
        if (firstHalf.val !== secondHalf.val) {
            isPalin = false;
            break;
        }
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }

    // Step 4: Restore the list (reverse back the second half)
    reverseList(secondHalfCopy);

    return isPalin;
};

// Helper to reverse a linked list
function reverseList(head) {
    let prev = null;
    let curr = head;
    while (curr) {
        const nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev;
}

