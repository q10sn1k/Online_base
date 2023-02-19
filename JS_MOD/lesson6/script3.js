"use strict";

// функции в JavaScript

/*
    function имя_функции(){
        // код
    }
 */

function func(){
    console.log('функция');
}

func(); // функция script3.js:12

function func_new(str){
    console.log(str);
}

func_new('строка написанная с помощью функции func_new'); // script3.js:18 строка написанная с помощью функции func_new



//____________________
function sum_of_args(num1, num2) {
    console.log(num1 + num2);
}

sum_of_args(2,5);  // 7 script3.js:27

function sum_of_4_args(num1, num2, num3, num4){
    console.log(num1 + num2 + num3 + num4);
}

sum_of_4_args(1, 2, 3,4); // 10

// return
// напишем функцию которая находит сумму 2-х элементов

function sum_args_ret(num1, num2){
    return num1 + num2;

    // после return код в функции никогда не выполнится
    //console.log('test'); // этот код никогда не выполнится
}

let res = sum_args_ret(2,3);

console.log(res);  // 5 script3.js:50

//______________________________________
//______________________________________

function func11(num) {
    if (num >= 0){
        return '++++++++++';
    } else {
        return '----------';
    }
}

console.log(func11(5)); // script3.js:63 ++++++++++
console.log((func11(-5))); // script3.js:64  -----------

// напишем функцию которая будет возвращать сумму чисел от 1 до 5

function func22(start, finish) {
    let sum = 0;

    for (let i = start; i <= finish; i++){
        sum += i;
    }

    return sum

}

console.log(func22(1,5)); // script3.js:79 15