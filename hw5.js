//Задание 1

const lowerValue = (a, b) => {
    if (a < b) {
        return a;
    } else if (a = b) {
        return a;
    } else {
        return b;
    }
}

console.log(lowerValue(3, 7));
console.log(lowerValue(6, 6));
console.log(lowerValue(4, 1));

//Задание 2

const parity = (a) => {
    if (a % 2 === 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

console.log(parity(4));
console.log(parity(5));

//Задание 3.1

const squareConsole = (a) => {
    let square = a ** 2;
    console.log(square);
}

console.log(squareConsole(2));

//Задание 3.2

const squareReturn = (a) => {
    let square = a ** 2;
    return square;
}

console.log(squareReturn(3));

//Задание 4

const age = () => {
    const value = prompt('Сколько Вам лет?');

    if (value < 0) {
        console.log('Вы ввели неправильное значение');
    } else if (value >= 0 && value < 12) {
        console.log('Привет, друг!');
    } else {
        console.log('Добро пожаловать!');
    }
}

age();

//Задание 5

const nums = (a, b) => {
    if (isNaN(a) || isNaN(b)) {
        console.log('Одно или оба значения не являются числом');
    } else {
        const multi = a * b;
        return multi;
    }
}

console.log(nums('Не число', 7));
console.log(nums(4, 5));

//Задание 6

const cube = () => {
    let n = prompt('Введите числовое значение параметра n');

    if (isNaN(n)) {
        return 'Переданный параметр не является числом';
    } else {
        const makeItCube = n ** 3;
        return `n в кубе равняется ${makeItCube}`;
    }
}

cube();

//Задание 7

function Area() {
    return 3.14 * this.radius ** 2;
}

function Perimeter() {
    return 2 * 3.14 * this.radius;
}

const circle1 = {
    radius: 4,
    getArea: Area,
    getPerimeter: Perimeter,
}

const circle2 = {
    radius: 5,
    getArea: Area,
    getPerimeter: Perimeter,
}

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());

//Задание 8

const startGameMonths = () => {
    let monthNumber = prompt('Введите номер месяца (от 1 до 12)');

    if (isNaN(monthNumber)) {
        alert('Прикольно! Но лучше ввести числовое значение');
    } else if (monthNumber == 12 || monthNumber == 1 || monthNumber == 2) {
        alert('Это зимний месяц');
    } else if (monthNumber == 3 || monthNumber == 4 || monthNumber == 5) {
        alert('Это весенний месяц');
    } else if (monthNumber == 6 || monthNumber == 7 || monthNumber == 8) {
        alert('Это летний месяц');
    } else if (monthNumber == 9 || monthNumber == 10 || monthNumber == 11) {
        alert('Это осенний месяц');
    } else {
        alert('Такого месяца нет :(');
    }
}