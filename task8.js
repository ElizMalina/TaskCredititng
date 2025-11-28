//task 2 вывести представление целого числа в виде произведения простых чисел

function factorize(n) {
    if (n < 2) return [n];
    
    const factors = [];
    let number = n;
    
    while (number % 2 === 0) {
        factors.push(2);
        number = Math.floor(number / 2);
    }
    
    for (let i = 3; i * i <= number; i += 2) {
        while (number % i === 0) {
            factors.push(i);
            number = Math.floor(number / i);
        }
    }
    
    if (number > 1) {
        factors.push(number);
    }
    
    return factors;
}

function formatResult(factors) {
    if (factors.length === 0) return '';
    if (factors.length === 1) return factors[0].toString();
    
    const groups = {};
    for (let i = 0; i < factors.length; ++i) {
        const factor = factors[i];
        groups[factor] = (groups[factor] || 0) + 1;
    }
    
    const resultParts = [];
    const keys = Object.keys(groups);
    
    for (let i = 0; i < keys.length; i++) {
        const factor = keys[i];
        const count = groups[factor];
        resultParts.push(count > 1 ? factor+'^'+count : factor);
    }
    
    return resultParts.join('*');
}


const N = 16;

const factors = factorize(N);
const result = formatResult(factors);
    
console.log(N+ " = " + factors.join(' * '));
