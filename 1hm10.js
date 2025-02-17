// Написати функцію sqr, яка приймає 2 аргументи: (x, cache), де x є number і cache - зовнішній map.
// Функція має виконувати умови:
// - перевіряти, чи є в cache вже обчислений квадрат від х
// - повертати існуючий запис з cache в разі його наявності
// - обчислювати квадрат від х в разі його відсутності в cache
// - записувати в cache обчислений квадрат від х в разі його відсутності в cache
// - повертати новий запис з cache
function sqr(x, cache) {
    if (cache.has(x)) {
        return cache.get(x);
    }
    let square = x * x;
    cache.set(x, square);
    return square;
}
const cache = new Map();
console.log(sqr(5, cache)); 
console.log(sqr(5, cache)); 
console.log(sqr(7, cache)); 
