//  яка приймає на вхід число і 
// виводить у консоль повідомлення у форматі:
//  Число N є простим числом 2 3 5 7 11 якщо число N просте,
// та Число N не є простим числом, якщо число N складене. 4 6 8 9 12 14 15 16 18 20 21 22 24


const N = +prompt ('введіть число: ');
let number = true;

if (N < 2) {
  console.log(`не є простим числом.`);
} else {
  for (let i = 2; i < N; i++) {
    if (N % i === 0) {
      number = false;
      break;
    }
  }
  if (number) {
    console.log(`є простим числом.`);
  } else {
    console.log(`не є простим числом.`);
  }
}


      

// const N = +prompt ('введіть число: ');
// function isPrime(N) {
//   if (N <= 1) {
//     console.log(`Число не є простим числом.`);
//     return;
//   }
// }
// for (let i = 2; i <= N; i++) {
//        if  ( N % i == 0 ) { 
//  console.log('є простим числом');
//        isPrime = false;
//         break;
//           } else  {
//           console.log(`Число не є простим числом.`);
//       }
  
//        }