var result = 0;

console.time('duration_sum');
for(var i = 0; i<1000; i++){
    result ++;
}

console.timeEnd('duration_sum');
console.log(`result (sum of 1~100): ${result}`);