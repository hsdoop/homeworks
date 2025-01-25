function isPalindrome() {
    let str = prompt("введіть").toLowerCase().replace(/\s/g, ''); //это загуглила 
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return console.log("це не палидром");
        }
    }
    console.log("це палидром");
}

isPalindrome();