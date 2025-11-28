//task 1 вывод чисел от A до B в файл

const fs = require("fs");

function isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    
    for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function PrimesInRange(A, B) {
    const primes = [];
    
    if (A <= 2 && 2 <= B) {
        primes.push(2);
    }
    
    let start = Math.max(A, 3);
    if (start % 2 === 0) {
        ++start;
    }
    
    for (let num = start; num <= B; num += 2) {
        if (isPrime(num)) {
            primes.push(num);
        }
    }
    
    return primes;
}


function main() {
    try {
        const input = fs.readFileSync("test6/in.txt", "utf8").trim();
        const [A, B] = input.split(' ').map(Number);
        
        if (isNaN(A) || isNaN(B) || A >= B || B >= 250000) {
            throw new Error("Некорректные входные данные");
        }
        
        const primes = PrimesInRange(A, B);
        fs.writeFileSync("test6/out.txt", primes.join(" "));
    } catch (error) {
        fs.writeFileSync("out.txt", "ERROR");
    }
}

main();