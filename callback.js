const fibonacci = [1, 1, 2, 3, 5, 8];
const multipleByTwoFib = fibonacci.map(item => item * 2);
const plusTenFib = fibonacci.map(item => item + 10);
const onlyBigFib = fibonacci.filter(item => item > 3);

console.log(multipleByTwoFib);
console.log(plusTenFib);
console.log(onlyBigFib);

// 1
// Практика 1

function callbackWithArrayLength(arr, callback) {
    callback(arr.length);
    callback(-1);
}

callbackWithArrayLength([1], (length) => {
    console.log(length);
});

callbackWithArrayLength([1, 1], (len) => {
    console.log(len);
});
callbackWithArrayLength([1, 1, 1, 1, 1], (l) => {
    console.log(l);
});

// Практика 2

function log(arrItem) {
    console.log("Элемент массива:", arrItem);
}

function each(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i]);
    }
}

each(["Глеб", "Олег", "Татьяна", "Платон"], log);

// setTimeout

function showAd() {
    alert('Купи наш лучший в мире продукт, только сейчас со скидкой 90%');
}

setTimeout(showAd, 1000 * 60);

// clearTimeout

let timerId = setTimeout(() => console.log("ничего не происходит"), 1000);
console.log(timerId); // идентификатор таймера

clearTimeout(timerId);

// setInterval



// setTimout in setTimeout

let timerIdTime = setTimeout(function tick() {
    alert('tick');
    timerIdTime = setTimeout(tick, 2000); // (*)
}, 2000);

let delay = 5000;