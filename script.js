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