// Вам необхідно написати функцію doubleLetter(str),
//  яка приймає на вхід рядок і повертає новий рядок, у якому кожен символ повторюється двічі hello ⇒ hheelllloo.
const entry = prompt('введить слово');
function doubleLetter(str) {
    let result = '';

    for (let letter of str) {
        result = result + letter.repeat(2);
    }
    return result;
}
console.log(doubleLetter(entry));