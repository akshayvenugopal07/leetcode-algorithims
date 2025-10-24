// You are given an array of item weights and a maximum carrying capacity (maxWeight).
// You need to determine the maximum total weight that can be loaded without exceeding the given capacity.

// Each item can be used at most once.

// Write a function that returns the maximum achievable weight.

/**
 * @param {number[]} weights
 * @param {number} maxWeight
 * @return {number}
 */
var findMaxWeight = function (weights, maxWeight) {
    if (weights.length === 0) return 0
    console.log(`🏋️ Testing with weights: [${weights.join(', ')}] | Max capacity: ${maxWeight}kg`);

    // Create DP table: dp[i][w] = max weight using first i items with capacity w
    const n = weights.length;
    const dp = Array(n + 1).fill().map(() => Array(maxWeight + 1).fill(0));

    // Fill the DP table
    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= maxWeight; w++) {
            const currentWeight = weights[i - 1];

            // Don't take current item
            dp[i][w] = dp[i - 1][w];

            // Take current item if it fits
            if (currentWeight <= w) {
                dp[i][w] = Math.max(dp[i][w], currentWeight + dp[i - 1][w - currentWeight]);
            }
        }
    }

    return dp[n][maxWeight];

};

// 🧪 TEST SUITE - Weightlifting Knapsack Problem
console.log("🎯 Starting Weightlifting Knapsack Problem Test Suite\n" + "=".repeat(60));

function runTest(testName, weights, maxWeight, expected, description) {
    console.log(`\n📋 ${testName}: ${description}`);
    const result = findMaxWeight(weights, maxWeight);

    if (result === expected) {
        console.log(`✅ PASSED! Got ${result}kg (expected ${expected}kg)`);
    } else {
        console.log(`❌ FAILED! Got ${result}kg but expected ${expected}kg`);
    }
    console.log("-".repeat(50));
}

// 🔥 EDGE CASES
console.log("\n🚨 EDGE CASES - Testing boundary conditions");

runTest("Test 1", [], 10, 0,
    "Empty gym - no weights available");

runTest("Test 2", [11, 12, 13], 10, 0,
    "All weights too heavy - can't lift any");

runTest("Test 3", [0], 5, 0,
    "Zero weight item");

runTest("Test 4", [5], 0, 0,
    "Zero capacity - can't lift anything");

runTest("Test 5", [7], 7, 7,
    "Perfect match - single weight equals capacity");

runTest("Test 6", [1], 100, 1,
    "Tiny weight, huge capacity");

// 🎯 BASIC SCENARIOS
console.log("\n💪 BASIC SCENARIOS - Standard knapsack problems");

runTest("Test 7", [3, 5, 8], 8, 8,
    "Choose the heaviest single weight");

runTest("Test 8", [2, 3, 7, 8, 10], 11, 10,
    "Multiple options - pick optimal single weight");

runTest("Test 9", [1, 2, 3, 4, 5], 10, 10,
    "Small weights that can combine perfectly");

runTest("Test 10", [2, 4, 6, 8], 10, 10,
    "Even weights - test combination strategy");

// 🔢 COMBINATION CHALLENGES  
console.log("\n🧩 COMBINATION CHALLENGES - Complex decision making");

runTest("Test 11", [1, 3, 4, 5, 9, 10, 11], 20, 20,
    "Large variety - multiple valid combinations");

runTest("Test 12", [5, 5, 5, 5], 10, 10,
    "Duplicate weights - choose best combination");

runTest("Test 13", [1, 2, 5, 6, 7], 9, 9,
    "Requires careful selection for optimal result");

runTest("Test 14", [10, 20, 30], 50, 50,
    "Large weights - test scaling");

runTest("Test 15", [3, 7, 4, 12, 5, 13, 10, 1, 6], 15, 15,
    "Many items - complex optimization needed");

// ⚡ PERFORMANCE TESTS
console.log("\n⚡ PERFORMANCE TESTS - Larger datasets");

runTest("Test 16", [1, 5, 10, 15, 20, 25, 30], 40, 40,
    "Medium dataset - ascending weights");

runTest("Test 17", [30, 25, 20, 15, 10, 5, 1], 40, 40,
    "Medium dataset - descending weights");

runTest("Test 18", [2, 4, 8, 16, 32], 50, 50,
    "Powers of 2 - geometric progression");

runTest("Test 19", [7, 14, 21, 28, 35], 42, 42,
    "Multiples of 7 - arithmetic progression");

// 🎲 TRICKY SCENARIOS
console.log("\n🎲 TRICKY SCENARIOS - Mind benders");

runTest("Test 20", [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5, 5,
    "Many small identical weights");

runTest("Test 21", [17, 23, 29, 31], 50, 48,
    "Prime numbers - no perfect combinations");

runTest("Test 22", [6, 10, 12], 15, 15,
    "Avoid greedy trap - sometimes smaller + smaller > largest");

runTest("Test 23", [5, 4, 6, 3, 7], 13, 13,
    "Mixed order - test sorting independence");

runTest("Test 24", [100], 99, 0,
    "Single weight exceeds capacity by 1");

runTest("Test 25", [50, 50, 50], 100, 100,
    "Exact capacity with duplicates");

console.log("\n🏆 Test Suite Complete! Check your algorithm against these cases.");
console.log("💡 Hint: The knapsack problem can be solved using dynamic programming!");
console.log("=".repeat(60));