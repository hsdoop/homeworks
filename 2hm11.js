// validate
// Вам необхідно написати функцію-декоратор validate(sum, validator), 
// яка приймає на вхід функцію sum і додає можливість перевіряти аргументи, 
// передані у функцію sum, на відповідність заданому validator (наприклад, всі аргументи мають бути додатними).
//  Якщо аргументи не проходять перевірку, то декоратор має викидати виняток.
 function validate(sum, validator){
     return (...args) => {
         if(args.some(arg => !validator(arg))){
             throw new Error("Invalid arguments");
         }
         return sum(...args)
     };
 }
 const sum = (...nums) => nums.reduce((acc, num) => acc + num, 0);
 const validatedSum = validate(sum, num => num > 0);
 console.log(validatedSum(1, 3, 4, 6));
console.log(validatedSum(1, -3, 4, 6));

 