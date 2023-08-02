//Задание 1

let x = 0;

do {
    console.log("Привет");
    x++;
} while (x < 2);

// Задание 2

let y = 1;

do {
    console.log(y);
    y++;
} while (y < 6);

//Задание 3

let z = 7;

do {
    console.log(z);
    z++;
} while (z < 23);

//Задание 4

const obj = {
    Коля: 200,
    Вася: 300,
    Петя: 400
}

for (let name in obj) {
    console.log(`${name} — зарплата ${obj[name]} долларов`)
}

//Задание 5

let n = 1000;
let num = 0;

do {
    n /= 2;
    num++;
} while (n > 50);

console.log(n);
console.log(num);

//Задание 6

for (let fri = 3; fri <= 31; fri += 7) {
    if (fri) {
        console.log(`Сегодня пятница, ${fri}-е число. Необходимо подготовить отчет.`);
        continue;
    }
}