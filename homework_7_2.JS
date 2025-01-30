
   function uniqueValues(array1, array2) {
 const result = [];
 const combinedArray = array1.concat(array2)
 for (let i = 0; i < combinedArray.length; i++){
   if (!result.includes(combinedArray[i])) {
      result.push(combinedArray[i]);
   }
  }
  return result;
 }
 const array1 = [1, 2, 3, 4, 5];
 const array2 = [3, 4, 5, 6, 7];
 const uniqueValuesArray = uniqueValues(array1, array2);
 console.log(uniqueValuesArray); // [1, 2, 3, 4, 5, 6, 7]




