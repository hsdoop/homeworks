
const N = +prompt ('введіть число: ');


for (let i = 1; i <= N; i++) {
    let sum = 0;
    
    for (let j = 1; j <= i / 2; j++) {
        if (i % j === 0) {
            sum += j;
        }
    }

    
    if (sum === i) {
       console.log(i); 
    }
}




