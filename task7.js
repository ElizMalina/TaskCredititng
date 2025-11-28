//task 2 a^b

const fs = require("fs");

function fastPower(base, exponent) {
    if (exponent === 0) return 1;
    if (exponent === 1) return base;
    
    let result = 1;
    let current = base;
    let exp = exponent;
    
    while (exp > 0) {
        if (exp % 2 === 1) {
            result *= current;
        }
        current *= current;
        exp = Math.floor(exp / 2);
    }
    
    return result;
}

function bigIntPower(base, exponent) {
    let result = 1n;
    let current = BigInt(base);
    let exp = exponent;
    
    while (exp > 0) {
        if (exp % 2 === 1) {
            result *= current;
        }
        current *= current;
        exp = Math.floor(exp / 2);
    }
    
    return result;
}



function main() {
    try {
        const input = fs.readFileSync("test7/in.txt", "utf8").trim();
        const [a, b] = input.split(' ').map(Number);
        
        
        if (isNaN(a) || isNaN(b) || a < 0 || a > 9 || b < 0 || b >= 6000) {
            throw new Error("Некорректные входные данные");
        }
        
        let result;

        if (b <= 20) {
            result = fastPower(a, b).toString();
        } else {
            result = bigIntPower(a, b).toString();
        }
        
        fs.writeFileSync("test7/out.txt", result);
    } catch (error) {
        fs.writeFileSync("test7/out.txt", "ERROR");
    }
}

main();