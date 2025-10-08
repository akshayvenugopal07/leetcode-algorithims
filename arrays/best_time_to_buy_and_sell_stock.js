/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    let profit = 0;
    
    // Iterate through prices starting from day 1
    for (let i = 1; i < prices.length; i++) {
        // If today's price is higher than yesterday's, we can make profit
        if (prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1];
        }
    }
    
    return profit;
}