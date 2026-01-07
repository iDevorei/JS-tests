"use strict"

// *Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена дней недели. Выведите на экран все его элементы.

let objWeek = {
    1: 'Sunday',
    2: 'Monday',
    3: 'Tuesday',
    4: 'Wednsday',
    5: 'Thursday',
    6: 'Friday',
    7: 'Saturday'
};

console.log(objWeek);

// *Создайте объект с ключами от 1 до 12, в качестве значений содержащий названия месяцев. Выведите этот объект в консоль.

let objMonth = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
};

console.log(objMonth);

// *Создайте объект user с ключами 'name', 'surname', 'patronymic' и какими-то произвольными значениями. Выведите на экран фамилию, имя и отчество через пробел.

let objSomeMan = {
    name: 'Jhon',
    surname: 'Malkovich',
    patronymic: 'Pink'
};

console.log(objSomeMan['name'], objSomeMan['surname'], objSomeMan['patronymic']);

// *Создайте объект date с ключами 'year', 'month' и 'day' и значениями, соответствующими текущему дню. Выведите созданную дату на экран в формате год-месяц-день.

let objSomeDay = {
    year: 2025,
    month: 'January',
    day: 7
};

console.log(`${objSomeDay.year}-${objSomeDay.month}-${objSomeDay.day}`);

// Исправьте ошибки, допущенные в следующем коде:

let objNum = {
	'1a': 1,
	'b2': 2,
	'c-c': 3,
	'd 4': 4,
	'e5': 5
};

console.log(objNum['1a']);
console.log(objNum.b2);
console.log(objNum['c-c']);
console.log(objNum['d 4']);
console.log(objNum.e5);

// !Изменение элементов объектов в JavaScript