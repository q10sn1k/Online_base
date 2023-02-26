"use strict";

// вложенные функции в JavaScript

function func(num1, num2) {
    return num1 * num1 + num2 * num2;
}

console.log(func(2, 3)) // (Выведет результат 2*2 + 3*3) 13
//___________________________________________________________
function square(num){
    return num * num;
}

function square_sum(num1, num2) {
    return square(num1) + square(num2)
}

console.log(square_sum(2,3)); // 13
//____________________________________________________________

function square_sum_2(num1, num2){
    /*
        функция square_2 - вложенная функция в square_sum_2
     */

    function square_2(num) {
        return num * num;
    }

    return square_2(num1) + square_2(num2);
}

console.log(square_sum_2(2,3)) // 13

console.log(square_2(2)); // square_2 is not defined
/*
    Обращение к функции square_2 вне функции square_sum_2 приведет к ошибке!!!!!

    Область видимости функции square_2 ограничена телом функции square_sum_2
 */