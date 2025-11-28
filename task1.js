//task 1

function calculateSum(k) {
    if (k < 1) return 0;
   
    let sum = 1;
    let factorial = 1;
    
    for (let i = 2; i <= k; ++i) {
        factorial *= i;
        sum += 1 / factorial;
    }
    
    return sum;
}

const k=5;
const result=calculateSum(k);
console.log("S = "+result);