const messege = +prompt ('введіть рік');
const leapYear = "високосний рік";
const normalYear = "звичайний рік";
function isLeapYear(d){
	var y=d.getFullYear();
	  return (y%4==0 && y%100!=0) || y%400==0 ?true:false;
};
 if (messege %4==0 || messege %400==0) {
        console.log (leapYear)
     }
    else if (messege  %100!=0)  
      { 
         console.log (normalYear);
     }


