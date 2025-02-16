// Вам необхідно написати функцію, яка приймає на вхід масив і повністю повторює поведінку методу масиву group
function group(array, keySelector) {
    return array.reduce((acc, item) => {
      const key = keySelector(item);
      acc[key] = acc[key] || [];
      acc[key].push(item);
      return acc;
    }, {});
  }
  
  const data = [
    { category: 'fruit', name: 'apple' },
    { category: 'fruit', name: 'banana' },
    { category: 'vegetable', name: 'carrot' },
    { category: 'fruit', name: 'orange' },
    { category: 'vegetable', name: 'pepper' }
  ];
  
  const groupedData = group(data, item => item.category);
  console.log(groupedData);