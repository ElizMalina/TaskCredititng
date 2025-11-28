//task 2

function happyNumber(k) {
    let str=k.toString();

    if (str.length != 6) return "Error input number";
    
    let sum1=parseInt(str[0])+parseInt(str[1])+parseInt(str[2]);
    let sum2=parseInt(str[3])+parseInt(str[4])+parseInt(str[5]);

    if(sum1==sum2){
        return "Happy";
    }else{
        return "Not Happy";
    }
}

let cnt=0;
for(let i=100000;i<1000000;++i){
    if(happyNumber(i)=="Happy"){
        ++cnt;
    }
}

console.log("Count = "+cnt);