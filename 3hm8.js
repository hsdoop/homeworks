// Напишіть функцію analyzeArray, яка приймає на вхід масив чисел і повертає об'єкт з такими властивостями:
// sum - сума всіх елементів масиву
// average - середнє значення елементів масиву
// min - мінімальне значення в масиві
// max - максимальне значення в масиві

function analyzeArray (arr){
    let sum = 0;
   for (let num of arr){
    sum += num;
   }
    const average = sum / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
return {sum, average, min, max};
}
const numbers = [1, 2, 3, 4, 5];
console.log(analyzeArray(numbers)); // { sum: 15, average: 3, min: 1, max: 5 }

