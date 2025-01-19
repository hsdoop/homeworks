const tree = 4; 

for (let i = 1; i <= tree; i++) {
    let space = '';
    for (let j = 0; j < tree - i; j++) {
        space += ' '; 
    }
    for (let k = 0; k < 2 * i - 1; k++) {
        space += '*'; 
    }
    console.log(space); 
}

