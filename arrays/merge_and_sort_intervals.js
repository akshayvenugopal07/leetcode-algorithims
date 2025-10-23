// Given an array of intervals [startTime, endTime], merge all overlapping intervals and return a 
// sorted array of non-overlapping intervals.

// Example

// Input

// intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
// Output

// [[1, 6], [8, 10], [15, 18]]

/*
 * Complete the 'mergeHighDefinitionIntervals' function below.
 *
 * The function is expected to return a 2D_INTEGER_ARRAY.
 * The function accepts 2D_INTEGER_ARRAY intervals as parameter.
 */

function mergeHighDefinitionIntervals(intervals) {
    // Handle edge cases
    if (!intervals || intervals.length === 0) {
        return [];
    }

    if (intervals.length === 1) {
        return intervals;
    }

    // Step 1: Sort intervals by start time
    intervals.sort((a, b) => a[0] - b[0]);

    // Step 2: Initialize result with first interval
    const merged = [intervals[0]];

    // Step 3: Use picker approach - iterate through remaining intervals
    for (let i = 1; i < intervals.length; i++) {
        const currentStart = intervals[i][0]; // start of current interval
        const currentEnd = intervals[i][1];   // end of current interval

        const lastMergedEnd = merged[merged.length - 1][1]; // end of last merged interval

        // Check for overlap: if start of current <= end of last merged
        if (currentStart <= lastMergedEnd) {
            // Overlapping intervals - merge by updating the end time
            merged[merged.length - 1][1] = Math.max(lastMergedEnd, currentEnd);
        } else {
            // No overlap - add current interval to merged list
            merged.push([currentStart, currentEnd]);
        }
    }

    return merged;
}