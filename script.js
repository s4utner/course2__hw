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

const startGameWords = () => {
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

const startGameRiddles = () => {
    let answer = prompt(`В поле ввода введите ответ на загадку:
    Зимой и летом одним цветом`);

    if (answer.toLowerCase() === 'ель' || answer.toLowerCase() === 'елка' || answer.toLowerCase() === 'ёлка' || answer.toLowerCase() === 'елочка' || answer.toLowerCase() === 'ёлочка') {
        alert(`Верно!`);  
    } else {   
        alert('Не угадал( Запускай заново');
        return;
    }   

    answer = prompt(`Следующая загадка:
    Висит груша, нельзя скушать`);
   
        if (answer.toLowerCase() === 'лампа' || answer.toLowerCase() === 'лампочка') {
            alert(`Верно!`); 
         } else {
            alert('Не угадал( Запускай заново');
            return;
    };

    answer = prompt(`Последняя загадка:
    Два конца, два кольца, посредине гвоздик`);

    if (answer.toLowerCase() === 'ножницы') {
            alert(`Поздравляю, ты победил!)`); 
         } else {
            alert('Не угадал( Запускай заново');
            return;
    }  
};
