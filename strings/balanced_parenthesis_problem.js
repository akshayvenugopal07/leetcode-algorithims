/**
 * @param {string} s
 * @return {number}
 */
var balancedParenthesis = function (s) {
    let stack = [];

    // Create a mapping of closing to opening brackets
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        // If it's an opening bracket, push to stack
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        }
        // If it's a closing bracket
        else if (char === ')' || char === '}' || char === ']') {
            // Check if stack is empty (no matching opening bracket)
            if (stack.length === 0) {
                return false;
            }

            // Pop the last opening bracket and check if it matches
            const lastOpening = stack.pop();
            if (lastOpening !== bracketMap[char]) {
                return false;
            }
        }
    }

    // Valid if all brackets are matched (stack is empty)
    return stack.length === 0;
};

console.log(
    balancedParenthesis("()[]{}"),
    balancedParenthesis("(]"),
    balancedParenthesis("([)]"),
    balancedParenthesis("{[]}"),
    balancedParenthesis("()"),
    balancedParenthesis("([)]")
);
