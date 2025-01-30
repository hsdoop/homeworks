function reverseArray(array) {
    const reversed = [];
    for (let i = array.length - 1; i >= 0; i--) {
      reversed.push(array[i]);
    }
    return reversed;
  }
  
  const originalArray = [1, 2, 3, 4, 5];
  const reversedArray = reverseArray(originalArray);
  console.log(reversedArray); // [5, 4, 3, 2, 1]