function intervalRace(functions, t) {
    return new Promise(resolve => {
        let results = [], index = 0;
        
        const executeNext = () => {
            if (index < functions.length) {
                results.push(functions[index++]());
                setTimeout(executeNext, t);
            } else {
                resolve(results);
            }
        };
        
        executeNext();
    });
}

const func1 = () => "Функція 1 виконана";
const func2 = () => "Функція 2 виконана";
const func3 = () => "Функція 3 виконана";

intervalRace([func1, func2, func3], 1000).then(console.log);