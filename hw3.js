//Задание 1

let password = 'пароль';
let authorizaton = String(prompt('Введите пароль'));

if (authorizaton === password) {
    console.log('Пароль введён верно!');
} else {
    console.log('Пароль введён неправильно');
}

//Задание 2

let c = 6;
if (c >= 0 && c <= 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//Задание 3

let d = 37;
let e = 121;

if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//Задание 4

let a = '2';
let b = '3';

alert(parseInt(a) + parseInt(b));

//Задание 5

let monthNumber = prompt('Введите номер месяца в году');

switch (Number(monthNumber)) {
    case 1:
        console.log('Зима');
        break;
    case 2:
        console.log('Зима');
        break;
    case 3:
        console.log('Весна');
        break;
    case 4:
        console.log('Весна');
        break;
    case 5:
        console.log('Весна');
        break;
    case 6:
        console.log('Лето');
        break;
    case 7:
        console.log('Лето');
        break;
    case 8:
        console.log('Лето');
        break;
    case 9:
        console.log('Осень');
        break;
    case 10:
        console.log('Осень');
        break;
    case 11:
        console.log('Осень');
        break;
    case 12:
        console.log('Зима');
        break;

    default:
        console.log('Нет такого месяца')
        break;
}

//Задание 7

let number = Number(prompt('Пожалуйста, введите любое число'));
let x = number % 2;

if (x === 0) {
    alert('Число четное');
} else {
    alert('Число нечетное');
}

//Задание 8

let clientOS = Number(prompt('Если на вашем устройстве установлена iOS, введите "0", если на вашем устройстве установлен Andriod, введите "1"'));

if (clientOS === 0) {
    alert('Установите версию приложения для iOS по ссылке: https://clck.ru/356ACb');
} else if (clientOS === 1) {
    alert('Установите версию приложения для Android по ссылке: https://clck.ru/356ACb');
} else {
    alert('Используйте веб-браузер xD');
}

//Задание 9 

let clientOS2 = Number(prompt('Если на вашем устройстве установлена iOS, введите "0", если на вашем устройстве установлен Andriod, введите "1"'));
let clientDeviceYear = confirm('Ваш телефон выпущен позднее 2015 года?');

if (clientOS2 === 0 && clientDeviceYear === true) {
    alert('Установите версию приложения для iOS по ссылке: https://clck.ru/356ACb');
} else if (clientOS2 === 0 || clientDeviceYear === false) {
    alert('Установите облегченную версию приложения для iOS по ссылке: https://clck.ru/356ACb');
} else if (clientOS2 === 1 && clientDeviceYear === true) {
    alert('Установите версию приложения для Android по ссылке: https://clck.ru/356ACb');
} else {
    alert('Установите облегченную версию приложения для Android по ссылке');
}