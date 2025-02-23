// Вам необхідно написати функцію counter(startValue, step),
//  яка приймає на вхід два параметри - стартове значення лічильника і його крок.
//  Функція повертає нову функцію, яка при кожному виклику збільшує лічильник на значення і повертає його поточне значення.
//  Лічильник повинен мати методи increment, decrement і reset,
//  які збільшують або зменшують значення на step і скидають значення до стартового, відповідно.
function counter(startValue, step) {
    let current = startValue;
    console.log(startValue);

    return function (...args){
        console.log(args);
        console.log(current);
        return current += step;
    };
}
const myCounter = counter(10, 1);
console.log(myCounter(4, 6))
