// logArguments 
// Вам необхідно написати функцію-декоратор logArguments(fn), 
// яка приймає на вхід функцію з довільною кількістю аргументів і додає можливість 
// логувати всі аргументи, передані у декоровану функцію.
function logArguments(fn) {
    return(...args) => {
        console.log (args);
        return fn(...args);
    };
}
function sum(a, b) {
return a + b;
}
const loggedSum = logArguments(sum);
console.log(loggedSum(2, 10));