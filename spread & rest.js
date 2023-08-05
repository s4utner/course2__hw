//spread

function funcSum(...arrSum) {
    let sum = 0;
    for (const item of arrSum) {
        sum += item;
    }
    return sum;
}
console.log(funcSum(3, 5, 7));

//rest

let arrSum = [3, 4, 5, 6];

const sum = (a, b, ...rest) => {
    let result = a + b;
    console.log(result);
    console.log(rest);
}

sum(...arrSum);