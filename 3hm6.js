
const entry = prompt('введить слова');
function camelCase(str, separator) {
    let result = '';
    let monetize = false;
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === separator) {
        monetize = true;
      } else {
        result += monetize ? str[i].toUpperCase() : str[i];
        monetize = false;
      }
    }
  
    return result;
  }
  
  console.log(camelCase(entry, ' ')); 


