const leapYear = "високосний рік";
const normalYear = "звичайний рік";
const year = (2032 && 2028 && 2024 && 2020 && 2016 && 2012 && 2008 && 2004 && 2000)
const messege = +prompt ('введіть рік');
if (messege == year) {
    console.log (leapYear)
} else { messege != year
    console.log (normalYear);
}
    

