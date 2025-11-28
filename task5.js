//task 7

function generate(nums) {
    const result = [];
    
    function backtrack(current, remaining) {
        if (remaining.length === 0) {
            result.push([...current]);
            return;
        }
        
        for (let i = 0; i < remaining.length; ++i) {
            current.push(remaining[i]);
            
            const newRemaining = [...remaining.slice(0, i), ...remaining.slice(i + 1)];
            backtrack(current, newRemaining);
            
            current.pop();
        }
    }
    
    backtrack([], nums);
    return result;
}


const input = [1, 2, 3];
const result = generate(input);
    
console.log("Перестановок:", result.length);
for(let i=0;i<result.length;++i){
    console.log("["+result[i].join(', ')+"]");
}