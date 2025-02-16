// Вам необхідно написати функцію, яка приймає на вхід масив чисел і повертає новий масив, 
// що містить тільки ті числа, які є простими числами.
  const filterPrimes = arr => arr.filter(num => {
     if (num < 2) return false;
     for(let i = 2; i * i <= num; i++){
         if (num % i === 0 ) return false;
     }
     return true;
 });
 console.log(filterPrimes([1, 3, 4, 5, 6, 8, 24, 9, 7]));
