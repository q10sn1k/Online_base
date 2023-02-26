"use strict";
// Выведем числа от 1 до 10 с помощью рекурсии.
let i = 1;

function func(){
    console.log(i);
    i++;

    if (i<11){
        func(); // рекурсивный вызов функции (функция вызывает сама себя)
    }

}

//func(); // 1 2 3 4 ........ 8 9 10


//____________________________________________________________________
// метод shift - вырезает и возвращает первый элемент массива
// выведем все элементы массива по очереди

let arr = [1,2,3];

console.log(arr.shift()); // 1
console.log(arr); // [2, 3] (массив уменьшился)
console.log(arr.shift()) // 2
console.log(arr); // [3] (массив уменьшился)
console.log(arr.shift()) // 3
console.log(arr) // [] - массив пуст

// создадим функцию, которая выведет все элементы массива рекурсивно
let arr2 = [1,2,3];
function rec(arr){
    console.log(arr.shift());

    if (arr.length != 0) {
        rec(arr);
    }
}

rec(arr2);