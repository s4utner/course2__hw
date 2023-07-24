//Задание 1

let a = Number(10);
alert(a);
a = Number(20);
alert(a);

//Задание 2

let iPhone = Number(2007);
alert(iPhone);

//Задание 3

let js = "Brendan Eich";
alert(js);

//Задание 4

let x = 10, y = 2;
alert(x + y);
alert(x - y);
alert(x * y);
alert(x / y);

//Задание 5

let c = 2, d = 5;
result = 2 ** 5;
alert(result);

//Задание 6

let e = 9, f = 2;
result = 9 % 2;
alert(result);

//Задание 7

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

//Задание 8

let age = Number(prompt("Сколько вам лет?"));
alert(age);

//Задание 9

let user = {
    name: "Денис",
    age: 22,
    isAdmin: true,
}

user['city of residence'] = "Omsk";
user.age = 27;

delete user['city of residence'];

let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

//Задание 10

let welcome = String(prompt("Как Вас зовут?"));
alert(`Привет, ${welcome}!`);