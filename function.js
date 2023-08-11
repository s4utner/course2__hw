let array1 = [1, 2, 3, 4, 5];
let array2 = [4, 5, 6, 7, 8];

const func = (array1, array2) => {
    const result = array1.filter((item) => array2.includes(item));
    console.log(result);
}

func(array1, array2);