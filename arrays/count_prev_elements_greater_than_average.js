// Count Elements Greater Than Previous Average
// Given an array of positive integers, return the number of elements that are strictly greater than the average of all previous elements. Skip the first element.

// Example

// Input

// responseTimes = [100, 200, 150,300]
// Output

// 2
// Explanation

// - Day 0: 100 (no previous days, skip) 
// - Day 1: 200 > average(100) = 100 → count = 1 
// - Day 2: 150 vs average(100, 200) = 150 → not greater → count = 1 
// - Day 3: 300 > average(100, 200, 150) = 150 → count = 2 Return 2.


/*
 * Complete the 'countResponseTimeRegressions' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY responseTimes as parameter.
 */

function countResponseTimeRegressions(responseTimes) {
    if (responseTimes.length <= 1) {
        return 0;
    }
    
    let sum = responseTimes[0]; // Start with first element
    let count = 0;
    
    // Start from index 1 (skip first element as per requirement)
    for (let i = 1; i < responseTimes.length; i++) {
        let previousAverage = sum / i; // Average of all previous elements
        
        if (responseTimes[i] > previousAverage) {
            count++;
        }
        
        sum = sum + responseTimes[i]; // Add current element to sum for next iteration
    }
    
    return count;
}
