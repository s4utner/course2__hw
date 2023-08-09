//Задание 1

let lowerCase = 'строка в нижнем регистре';
lowerCase = lowerCase.toUpperCase();

console.log(lowerCase);

//Задание 2

const searchStr = (arr, str) => {
    let arrStr = arr.filter(item => item.toLowerCase().startsWith(str.toLowerCase()));
    console.log(arrStr);
}

searchStr(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко');

//Задание 3

console.log(Math.floor(32.58884));
console.log(Math.ceil(32.58884));
console.log(Math.round(32.58884));

//Задание 4

console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

//Задание 5

const randomNum1 = () => {
    console.log(Math.round(Math.random() * (10 - 1) + 1));
}

randomNum1();

//Задание 6

const randomNum2 = (x) => {
    let randomArrNum = [];
    for (let i = 0; i < Math.floor(x / 2); i++) {
        randomArrNum.push(Math.round(Math.random() * (x - 0) + 0));
    }
    console.log(randomArrNum);
}

randomNum2(12);

//Задание 7

const randomNum3 = (x, y) => {
    if (x > y) {
        console.log(Math.round(Math.random() * (x - y) + y));
    } else if (y > x) {
        console.log(Math.round(Math.random() * (y - x) + x));
    } else {
        console.log(x);
    }
}

randomNum3(5, 10);

//Задание 8

let myDate = new Date();
console.log(myDate);

//Задание 9

let currentDate = new Date();
let futureDate = new Date();
futureDate.setDate(currentDate.getDate() + 73);
console.log(futureDate);

//Задание 10

const dateFunction = (date) => {
    const days = [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
    ];
    const months = [
        "Января",
        "Февраля",
        "Марта",
        "Апреля",
        "Мая",
        "Июня",
        "Июля",
        "Августа",
        "Сентября",
        "Октября",
        "Ноября",
        "Декабря",
    ];

    const formattedDate = `Дата: ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} - это ${days[date.getDay()]}`;

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    const formattedTime = `Время: ${hours}:${minutes}:${seconds}`;

    console.log(formattedDate);
    console.log(formattedTime);
}

const dateNow = new Date();
dateFunction(dateNow);

//Задание 11

let startGameWords = () => {
    let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    words = words.sort(() => Math.random() - 0.5);
    words = words.join(', ');

    alert(`Запомни слова: 
    ${words}`);
    let askFirstElement = prompt('Какое слово было первым?');
    let askLastElement = prompt('Какое слово было последним?');

    let regexp = /^[а-яА-Я]+$/;

    if (words.toLowerCase().startsWith(askFirstElement.toLowerCase()) && words.toLowerCase().endsWith(askLastElement.toLowerCase())) {
        if (regexp.test(askFirstElement) && regexp.test(askLastElement)) {
            alert('Поздравляем! Вы победили!');
        } else if (regexp.test(askFirstElement) || regexp.test(askLastElement)) {
            alert('Вы были близки к победе!');
        } else {
            alert('Варианты ответов неверны');
        }
    } else if (words.toLowerCase().startsWith(askFirstElement.toLowerCase()) || words.toLowerCase().endsWith(askLastElement.toLowerCase())) {
        if (regexp.test(askFirstElement) && regexp.test(askLastElement)) {
            alert('Вы были близки к победе!');
        } else if (regexp.test(askFirstElement) || regexp.test(askLastElement)) {
            alert('Вы были близки к победе!');
        } else {
            alert('Варианты ответов неверны');
        }
    } else {
        alert('Варианты ответов неверны');
    }
}