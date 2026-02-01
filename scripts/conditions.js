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

// !Проверка на равенство в JavaScript