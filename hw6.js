//Задание 1

const arr1 = [1, 5, 4, 10, 0, 3];

for (let index = 0; index < arr1.length; index++) {
    console.log(arr1[index]);
    if (arr1[index] == 10) break;
};

//Задание 2

const arr2 = [1, 5, 4, 10, 0, 3];

console.log(arr2.indexOf(4));

//Задание 3

let arr3 = [1, 3, 5, 10, 20];

arr3 = arr3.join(' ');
console.log(arr3);

//Задание 4

const arr4 = [];

for (let i = 0; i < 3; i++) {
    arr4[i] = [];

    for (let j = 0; j < 3; j++) {
        arr4[i].push(1);
    }
};

console.log(arr4);

//Задание 5

const arr5 = [1, 1, 1];

arr5.push(2, 2, 2);
console.log(arr5);

//Задание 6

const arr6 = [9, 8, 7, 'a', 6, 5];
arr6.sort();
arr6.pop();
console.log(arr6);

//Задание 7

const arr7 = [9, 8, 7, 6, 5];

let ask = prompt('Попробуй угадать цифру');
num = Number(ask);

if (arr7.includes(num)) {
    alert('Угадал');
} else {
    alert('Не угадал');
};

//Задание 8

let letters = 'abcdef';
let arr8 = letters.split('');
arr8.reverse();
arr8 = arr8.join('');
console.log(arr8);

//Задание 9

let arr9 = [[1, 2, 3,], [4, 5, 6]];
arr9 = arr9.join();
console.log(arr9);

//Задание 10

const arr10 = [6, 3, 1, 8, 2];

for (let i = 0; i < arr10.length - 1; i++) {
    let sum = arr10[i] + arr10[i + 1];
    console.log(sum);
}

//Задание 11

const arr11 = [11, 4, 121, 196, 3, 24];

let square = arr11.map(item => item ** 2);
console.log(square);

//Задание 12

const getLength = (arr12) => arr12.map(String => String.length);
console.log(getLength(['hello world', '', 'what da dog doin', 'три строки вроде мало, но последнюю я не придумал((']));

//Задание 13

function filterPositive(array) {
    const arr13 = array.filter(item => item < 0);
    console.log(arr13);
};

filterPositive([-1, 0, 5, -10, 56]);
filterPositive([-25, 25, 0, -1000, -2]);

//Задание 14

const arr14 = [];

for (let i = 0; i < 10; i++) {
    arr14[i] = Math.floor(Math.random() * (10 - 0 + 1) + 0);
};

const result = arr14.filter(item => item % 2 === 0);

console.log(arr14);
console.log(result);

//Задание 15

const arr15 = [];

for (let i = 0; i < 6; i++) {
    arr15[i] = Math.floor(Math.random() * (10 - 1 + 1) + 1);
};

console.log(arr15);

for (let i = 0; i < arr15.length - 1; i++) {
    let average = (arr15[i] + arr15[i + 1]) / arr15.length;
    // return average; // ???
};

// console.log(average); // ???