// Вам необхідно написати функцію, яка приймає на вхід масив об'єктів, 
// де кожен об'єкт описує сповіщення та має поля source / text / date. 
// Вам необхідно перетворити цей масив на об'єкт,
//  де ключем буде джерело сповіщення, а значенням - масив сповіщень із цього джерела.
const groupNotificationsBySource = (notifications) => 
    notifications.reduce((acc, { source, ...rest }) => 
        ((acc[source] ||= []).push(rest), acc), {});
const notifications = [
    { source: "Email", text: "New email from John", date: "2024.02.17" },
    { source: "SMS", text: "Your package has been delivered", date: "2024.02.16" },
    { source: "Email", text: "Newsletter: Weekly Updates", date: "2024.02.15" },
    { source: "App", text: "New friend request", date: "2024.02.14" }
];