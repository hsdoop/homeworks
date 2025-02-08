// Напишіть функцію findCommonElements, яка приймає на
//  вхід два масиви і повертає новий масив, що містить елементи, які є в обох вихідних масивах.

function findCommonElements(arr1, arr2) {
return arr1.filter(element => arr2.includes(element));
}
 const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

console.log(findCommonElements(array1, array2)); // [3, 4, 5]