"use strict"

// *Проверьте, что переменная test больше 10.

let test = 1;

if(test > 10) {
    console.log(`${test} more than ten`);
} else {
    console.log(`${test} less than ten`);
};

// *Проверьте, что переменная test меньше 10.

test = -1;

if (test < 10) {
    console.log(`${test} less than ten`);
} else {
    console.log(`${test} more than ten`);
};

// *Проверьте, что переменная test больше или равна 10.

test = 10;

if (test >= 10) {
    console.log(`${test} more or equals 10`);
} else {
    console.log(`${test} less than ten`);
};

// *Проверьте, что переменная test меньше или равна 10.

if (test <= 10) {
    console.log(`${test} less or equals ten`);
} else {
    console.log(`${test} more than ten`);
};

// *Проверьте, что переменная test равна 10.

if (test === 10) {
    console.log(`${test} equals ten`);
} else {
    console.log(`${test} not equals ten`);
};

// *Проверьте, что переменная test не равна 10.

test = 11;

if (test !== 10) {
    console.log(`${test} not equals ten`);
} else {
    console.log(`${test} equals ten`);
};

// *Даны переменные test1 и test2. Проверьте, значение какой из этих переменных больше и выведите соответствующее сообщение.

let test1 = 10;
let test2 = 9;

if (test1 > test2) {
    console.log(`${test1} more than ${test2}`);
} else if (test1 < test2) {
    console.log(`${test1} less than ${test2}`);
} else {
    console.log(`${test1} = ${test2}`);
};

// *Даны переменные test1 и test2. Проверьте, равны ли их значения и выведите соответствующее сообщение.

if (test1 === test2) {
    console.log(`${test1} = ${test2}`);
} else {
    console.log(`${test1} != ${test2}`);
};

// *Даны переменные test1 и test2, содержащие строки. Проверьте, равны ли их значения и выведите соответствующее сообщение.

test1 = 'abc';
test2 = 'abc';

if (test1 === test2) {
    console.log(`${test1} = ${test2}`);
} else {
    console.log(`${test1} != ${test2}`);
};

// *Даны переменные:

test1 = '123';
test2 = 123;
// *Проверьте, равны ли значения переменных и выведите соответствующее сообщение.

if (test1 == test2) {
    console.log(`${test1} equals ${test2}`);
} else {
    console.log(`${test2} not equals ${test2}`);
};

if (test1 === test2) {
    console.log(`${test1} equals ${test2}`);
} else {
    console.log(`${test2} not equals ${test2}, here have a string`);
};

// *Проверьте, что переменная num больше нуля и меньше 5.

let num = 2;

if (num > 0 && num < 10) {
    console.log(`${num} less than ten and more than zero`);
} else {
    console.log('something wrong!');
};

// *Проверьте, что переменная num больше или равна 10 и меньше или равна 20.

num = 10;

if (num >= 10 && num <= 20) {
    console.log(`${num} more than ten and less then twenty`);
} else {
    console.log('error');
};

// *Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.

let num1 = 1;
let num2 = 3;

if (num1 <= 1 && num2 >= 3) {
    console.log("It's correct.");
} else {
    console.log('error');
};

// !Логическое ИЛИ в JavaScript