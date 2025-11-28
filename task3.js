//task 3

function countHappyTickets(N) {
    if (N < 1) return 0;
    
    function countSums(digits) {
        const maxSum = 9 * digits; 
        const dp = new Array(maxSum + 1).fill(0);
        dp[0] = 1;
        
        for (let i = 0; i < digits; ++i) {
            const newDp = new Array(maxSum + 1).fill(0);
            for (let sum = 0; sum <= maxSum; ++sum) {
                if (dp[sum] > 0) {
                    for (let digit = 0; digit <= 9; ++digit) {
                        if (sum + digit <= maxSum) {
                            newDp[sum + digit] += dp[sum];
                        }
                    }
                }
            }
            for (let j = 0; j <= maxSum; ++j) {
                dp[j] = newDp[j];
            }
        }
        return dp;
    }
    
    const sumsCount = countSums(N);
    
    let total = 0;
    for (let sum = 0; sum < sumsCount.length; ++sum) {
        total += sumsCount[sum] * sumsCount[sum];
    }
    
    return total;
}

console.log("N = 3: " + countHappyTickets(3)); 
console.log("N = 7: " + countHappyTickets(7)); 