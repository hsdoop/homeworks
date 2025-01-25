const height = +prompt('висота: '); 

console.log('height>', height); 

let stars = 1; 

for (let i = height; i > 0; i--) {
    let space = '';

    for (let j = 0; j < i; j++) {
        space = space +' '; 
    }
    
    for (let k = 0; k < stars; k++) {
        space += '*'; 
    }
    stars = stars + 2;
    console.log(space);
}

