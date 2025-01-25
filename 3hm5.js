function findGCD(a, b) {
    while (b !== 0) {
        let gcd = b;
        b = a % b;
        a = gcd;
    }
    return a;
}

console.log(findGCD(6, 9));
