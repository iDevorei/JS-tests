"use strict"

// *Создайте массив с числами. Выведите его на экран с помощью функции alert, а также выведите его в консоль с помощью console.log.

let arrNum = [1, 3, 5];
console.log(arrNum);

// *Создайте массив со строками. Выведите его на экран с помощью функции alert, а также выведите его в консоль с помощью console.log.

let arrStr = ['one', 'two', 'three'];
console.log(arrStr);

// *Создайте массив с элементами 1, 2, 3. Выведите на экран каждый из этих элементов.

let arrNum1 = [1, 2, 3];
console.log(arrNum1[0], arrNum1[1], arrNum1[2]);

// *Дан следующий массив:

// *let arr = [1, 2, 3];
// *Выведите на экран сумму элементов этого массива.

let arrNum2 = [1, 2, 3];
let arrSum = arrNum2[0] + arrNum2[1] + arrNum2[2];
console.log(arrSum);

// *Дан следующий массив:

// *let arr = ['a', 'b', 'c', 'd'];
// *Выведите с помощью этого массива следующую строку:

// *'a+b+c+d'

let arrStr1 = ['a', 'b', 'c', 'd'];
console.log(`${arrStr1[0]}+${arrStr1[1]}+${arrStr1[2]}+${arrStr1[arrStr1.length - 1]}`);

// *Создайте массив с произвольными элементами. Выведите на экран количество элементов в этом массиве.

let arrNum3 = [1, 2, 4, 54, 7789, 7];
console.log(arrNum3.length);

// *Создайте массив с произвольными элементами. Выведите на экран последний элемент этого массива.
console.log(arrNum3[arrNum3.length - 1]);

// *Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента число 1, вместо второго - 2, вместо третьего - 3.

let arrStr2 = ['a', 'b', 'c'];
console.log(arrStr2);
arrStr2[0] = 1;
arrStr2[1] = 2;
arrStr2[2] = 3;
console.log(arrStr2);

// *Создайте массив с числами. Прибавьте к каждому элементу массива число 3. Выведите на экран измененный массив.

let arrNum4 = [2, 4, 6];
arrNum4[0] += 3;
arrNum4[1] += 3;
arrNum4[2] += 3;
console.log(arrNum4);

// *Создайте массив с элементами 1, 2 и 3. С помощью оператора ++ увеличьте каждый элемент массива на единицу.

let arrNum5 = [1, 2, 3];
arrNum5[0]++;
++arrNum5[1];
arrNum5[2]++;
console.log(arrNum5);

// *С помощью описанного приема создайте массив с элементами 1, 2 и 3.

let arrNum6 = [];
arrNum6[0] = 1;
arrNum6[1] = 2;
arrNum6[2] = 3;
console.log(arrNum6);

// *Пусть дан такой массив:

// let arr = [1, 2, 3];
// Добавьте ему в конец элементы 4 и 5.

let arrNum7 = [1, 2, 3];
arrNum7[3] = 4;
arrNum7[arrNum7.length] = 5;
console.log(arrNum7);

// *Узнайте длину следующего массива:

// let arr = [];

// arr[3] = 'a';
// arr[8] = 'b';

let arrNum8 = [];
arrNum8[3] = 'a';
arrNum8[8] = 'b';
console.log(arrNum8.length);

// *Заполните массив числами 1, 2 и 3.

let arrNum9 = [];

arrNum9.push(1);
arrNum9.push(2);
arrNum9.push(3);
console.log(arrNum9);

// *Пусть дан такой массив:

// let arr = [1, 2, 3];
// Добавьте ему в конец элементы 4 и 5.

let arrNum10 = [1, 2, 3];
arrNum10.push(4);
arrNum10.push(5);
console.log(arrNum10);

// *Дан следующий массив:

// let arr = ['a', 'b', 'c'];
// *Дана также переменная:

// let key = 2;
// *Выведите на экран элемент, ключ которого хранится в переменной key.

let arrStr3 = ['a', 'b', 'c'];
let key = 2;
console.log(arrStr3[key]);

// *Дан следующий массив:

// let arr = [1, 2, 3, 4, 5];
// *Даны также переменные:

// let key1 = 1;
// let key2 = 2;
// *Найдите сумму элементов, ключи которых хранятся в наших переменных.

let arrNum11 = [1, 2, 3, 4, 5];
let key1 = 1;
let key2 = 2;

console.log(`${arrNum11[key1] + arrNum11[key2]}`);

// *Дан массив:

// let arr = ['a', 'b', 'c', 'd', 'e'];
// *Удалите из него два элемента. Проверьте, какое станет значение свойства length после этого.

let arrStr4 = ['a', 'b', 'c', 'd', 'e'];
console.log(arrStr4.length);
delete arrStr4[1];
delete arrStr4[3];
console.log(arrStr4.length);

// *Код должен вывести последний элемент массива:

let arr = [1, 2, 3, 4, 5];
console.log(arr[arr.length - 1]);

// *Код должен найти сумму элементов массива:

arr = [1, 2, 3, 4, 5];
console.log(arr[1] + arr[2] + arr[3] + arr[4] + arr[0]);

// *Код должен вывести длину массива:

arr = [1, 2, 3, 4, 5];
console.log(arr.length);

// *Код должен вывести длину массива:

arr = [1, 2, 3, 4, 5];
console.log(arr.length);