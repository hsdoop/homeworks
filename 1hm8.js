// Напишіть функцію capitalizeStrings, яка приймає на вхід масив рядків і повертає новий масив, у якому кожен рядок 
// має першу літеру у верхньому регістрі, а решту літер - у нижньому регістрі.

function capitalizeStrings (arr) {
 return arr.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase());
}

const words = ["apple", "banaNA", "kiWi", "ORANGE"];
console.log(capitalizeStrings(words)); // ["Apple", "Banana", "Kiwi", "Orange"]


