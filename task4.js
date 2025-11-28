//task 4

function simpleStoneSplit(weights) {
    if (weights.length < 2) {
        return "Нельзя разбить - нужно минимум 2 камня";
    }
    
    const sorted = [...weights].sort((a, b) => b - a);
    
    let heap1 = 0; 
    let heap2 = 0;
    const stones1 = [];
    const stones2 = [];
    
    for (const stone of sorted) {
        if (heap1 <= heap2) {
            heap1 += stone;
            stones1.push(stone);
        } else {
            heap2 += stone;
            stones2.push(stone);
        }
    }
    
    const minW = Math.min(heap1, heap2);
    const maxW = Math.max(heap1, heap2);
    
    if (minW === 0 || maxW / minW > 2) {
        return "Нельзя разбить: "+ maxW+"/"+minW +" = " +(maxW/minW).toFixed(2)+"x";
    } else {
        return "Можно разбить: "+stones1 +" = "+heap1 +" и " +stones2+" = "+heap2;
    }
}

console.log(simpleStoneSplit([10, 20, 30]));     
console.log(simpleStoneSplit([1, 2, 3, 100]));   