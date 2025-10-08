// The problem asks for "longest common PREFIX"
// A prefix means characters that match from the beginning in the same order. 
// It's NOT just any common characters (intersection).

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefixV2 = function(strs) {
    if (strs.length === 0) return "";
    
    // Compare characters at each position
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];
        
        // Check if this character exists at position i in all strings
        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== char) {
                return strs[0].substring(0, i);
            }
        }
    }
    
    return strs[0];
};

// Self written solution
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return "";
    if (strs.length === 1) return strs[0];

    let shortestString = strs[0];
    let shortestStringIndex = 0;
    strs.forEach((item, index) => {
        if (item.length < shortestString.length) {
            shortestString = item;
            shortestStringIndex = index;
        }
    });

    // Start with the shortest string as potential prefix
    let prefix = shortestString;

    // Check prefix against all other strings
    while (prefix.length > 0) {
        let isCommonPrefix = true;

        // Check against all strings except the shortest one
        for (let i = 0; i < strs.length; i++) {
            if (i !== shortestStringIndex) {
                // Check if current prefix exists at the start of the string
                if (!strs[i].startsWith(prefix)) {
                    isCommonPrefix = false;
                    break;
                }
            }
        }

        // If prefix is common to all strings, return it
        if (isCommonPrefix) {
            return prefix;
        }

        // Trim the prefix by removing the last character
        prefix = prefix.slice(0, -1);
    }

    return "";

};

var checkSubStringInString = function (haystack, needle) {
    if (needle.length === 0) return 0;
    if (needle.length > haystack.length) return -1;

    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let j = 0;
        // Check if needle matches starting at position i
        while (j < needle.length && haystack[i + j] === needle[j]) {
            j++;
        }
        // If we matched the entire needle
        if (j === needle.length) {
            return true;
        }
    }
    return false;
};