
// You are given an integer array height of length n. There are n vertical lines drawn 
// such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, 
// such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    // Edge case check
    if (height.length <= 1) return 0;

    // Initialize pointers
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;

    while (left < right) {
        // Calculate width between pointers
        let width = right - left;
        // Height is limited by the smaller value
        let containerHeight = Math.min(height[left], height[right]);
        // Calculate area
        let area = width * containerHeight;
        // Update maxWater if current area is larger
        maxWater = Math.max(maxWater, area);

        // Move pointer with smaller height
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
};
