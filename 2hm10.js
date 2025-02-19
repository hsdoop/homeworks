// Вам необхідно використовувати масив нотифікацій з минулих занять. До отриманого
//  під час групування об'єкта notifications,
// вам необхідно додати ітератор, щоб під час перебору в циклі for of ми отримували 
// кожен елемент із вкладених списків об'єкта notifications таким 
// чином, немов працюємо з "плоским" масивом.
const notifications = {
errors: ["Error 404", "Error 505"],
warnings: ["Warning 1", "Warning 2"],
infos: ["Info 1", "Info 2"],
[Symbol.iterator]() {
    return [].concat(...Object.values(this)).values();
 }
};
for (const notification of notifications) {
    console.log(notification);
}