/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var profit = 0
    for (var i = 0, len = prices.length; i < len; i++) {
        if (prices[i + 1]) {
            if (prices[i] < prices[i + 1]) {
                profit  = profit + prices[i + 1] - prices[i];
            }
        }
    }
    return profit
};

console.log(
    maxProfit(
        [7, 1, 5, 3, 6, 4]
    )
)