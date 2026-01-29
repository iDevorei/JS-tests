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

// *Создайте пустой объект, а затем заполните его значениями.

let obj_empty = {

};
console.log(obj_empty);

obj_empty[1] = 1;
obj_empty.two = 'two';
obj_empty[3] = 'number 3';

console.log(obj_empty);

// *Создайте объект и убедитесь, что порядок ключей в нем не имеет значения.

let obj_4 = {
    1: 'something',
    3: 34,
    57: 'in the end',
    0: 72
};

console.log(obj_4);

// *Получите массив ключей следующего объекта:

let obj_5 = {x: 1, y: 2, z: 3};

let keys = Object.keys(obj_5);
console.log(keys);

// *Найдите количество элементов в следующем объекте:

let obj_num = {x: 1, y: 2, z: 3, b: 4, r: 9};

console.log(Object.keys(obj_num).length);

// *Дан следующий объект:

let obj_6 = {x: 1, y: 2, z: 3};
// *Дана переменная key, в которой хранится один из ключей нашего объекта. Выведите с помощью этой переменной соответствующий элемент объекта.

let key = 'z';

console.log(obj_6[key]);

// *Исправьте ошибку, допущенную в следующем коде:

// let obj = {x: 1, y: 2, z: 3};
// console.log(obj[x]);

let obj_7 = {x: 1, y: 2, z: 3};
console.log(obj_7['x']);

// *Исправьте ошибку, допущенную в следующем коде:

// let obj = {x: 1, y: 2, z: 3};
// let key = 'x';
// console.log(obj['key']);

let obj_8 = {x: 1, y: 2, z: 3};
let key_1 = 'x';
console.log(obj_8[key_1]);

// *Исправьте ошибку, допущенную в следующем коде:

// let obj = {x: 1, y: 2, z: 3};
// let prop = 'x';
// console.log(obj.prop);

let obj_9 = {x: 1, y: 2, z: 3};
let prop = 'x';
console.log(obj_9[prop]);

// *Исправьте ошибку, допущенную в следующем коде:

// let obj = {x: 1, y: 2, z: 3};
// let prop = 'x';
// console.log(obj['prop']);

let obj_01 = {x: 1, y: 2, z: 3};
let prop_1 = 'x';
console.log(obj_01[prop]);

// *В следующем коде ключ должен был взяться из переменной. Исправьте допущенную ошибку:

// let key = 'x';

// let obj = {
// 	key: 1,
// 	y: 2,
// 	z: 3
// };

let key_2 = 'x';

let obj_02 = {
	[key_2]: 1,
	y: 2,
	z: 3
};

console.log(obj_02);

// *Дан объект:

// let obj = {
// 	x: 1,
// 	y: 2,
// 	z: 3
// };
// *Даны переменные:

// let key1 = 'x';
// let key2 = 'y';
// let key3 = 'z';
// *Сделайте так, чтобы ключи объекта брались из этих переменных.

let key1 = 'x';
let key2 = 'y';
let key3 = 'z';

let obj_03 = {
	[key1]: 1,
	[key2]: 2,
	[key3]: 3
};

console.log(obj_03);
console.log('y' in obj_03);
console.log('t' in obj_03);

delete obj_03.z
console.log(obj_03);
console.log('z' in obj_03);

// !Типизация объектов в JavaScript