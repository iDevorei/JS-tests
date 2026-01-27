"use strict"

// *Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена дней недели. Выведите на экран все его элементы.

let obj = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday'
};

console.log(obj[1], obj[2], obj[3], obj[4], obj[5], obj[6], obj[7]);

// *Создайте объект с ключами от 1 до 12, в качестве значений содержащий названия месяцев. Выведите этот объект в консоль.

let obj_1 = {
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

console.log(obj_1);

// *Создайте объект user с ключами 'name', 'surname', 'patronymic' и какими-то произвольными значениями. Выведите на экран фамилию, имя и отчество через пробел.

let obj_Malkovich = {
    name: 'John',
    surname: 'Malkovich',
    patronymic: 'Pink'
};

console.log(obj_Malkovich['name'], obj_Malkovich['patronymic'], obj_Malkovich['surname']);

// *Создайте объект date с ключами 'year', 'month' и 'day' и значениями, соответствующими текущему дню. Выведите созданную дату на экран в формате год-месяц-день.

let obj_today = {
    year: 2026,
    month: 'January',
    day: 27
};

console.log(`${obj_today.year}-${obj_today.month}-${obj_today.day}`);

// *Исправьте ошибки, допущенные в следующем коде:
// let obj = {
// 	'1a': 1,
// 	'b2': 2,
// 	'c-c': 3,
// 	'd 4': 4,
// 	'e5': 5
// };

// console.log(obj.1a);
// console.log(obj.b2);
// console.log(obj.c-c);
// console.log(obj.d 4);
// console.log(obj.e5);

let obj_2 = {
	'1a': 1,
	'b2': 2,
	'c-c': 3,
	'd 4': 4,
	'e5': 5
};

console.log(obj_2['1a']);
console.log(obj_2.b2);
console.log(obj_2['c-c']);
console.log(obj_2['d 4']);
console.log(obj_2.e5);

// *Дан объект:

// let obj = {x: 1, y: 2, z: 3};
// *Возведите в квадрат каждый элемент этого объекта.

let obj_3 = {
    x: 1,
    y: 2,
    z: 3
};

obj_3['x'] = obj_3['x'] ** 2;
obj_3.y = obj_3.y ** 2;
obj_3.z = obj_3.z ** 2;

console.log(obj_3);