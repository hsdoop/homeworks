randomDelayPrint("Hello"); 
// Очікуваний результат (затримки між літерами будуть різними):
// H (невелика затримка)
// e (велика затримка)
// l (маленька затримка)
// l (маленька затримка)
// o (велика затримка)
function randomDelayPrint(message) {
    message.split('').forEach((char, index) => {
        setTimeout(() => {
            console.log(char);
        }, Math.random() * 1000);
    });
}

randomDelayPrint("Hello");