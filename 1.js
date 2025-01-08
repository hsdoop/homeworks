
const divisibleThree = 'Fizz';
const divisibleFive = 'Buzz';
const messege = +prompt ('введіть число');
if (messege % 3 === 0 ) {
    console.log(divisibleThree);
    
 }  
if (messege % 5 === 0 ) {
    console.log(divisibleFive);

}
if (messege % 5 === 0 && messege % 3 === 0 ) {
    console.log(divisibleThree+divisibleFive);

}

