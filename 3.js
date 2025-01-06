const messege = +prompt ('введіть свій вік');
const oneYear = 'рік';
const moreOne = 'роки';
const fiveYear = 'років';
if (messege == 1) {
    console.log ('вам ' + messege + oneYear)

} else if (messege > 1 && messege < 5 ) {
    console.log ('вам ' + messege + moreOne)
} else if (messege >= 5 ) {
    console.log ('вам ' + messege + fiveYear)
}