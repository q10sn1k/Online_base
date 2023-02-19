"use strict";

// создадим массив
//let arr = [];

// заполним массив
// let arr = ['a', 'b', 'c'];

let arr = ['a', 'b', 'c', 1, 2, 3, null, true, false, 'last elem'];
// индексация массивов начинается с нуля

console.log(arr[0]); // a
console.log(arr[1]); // b
console.log(arr[4]); // 2

// длина массива находится с помощью свойства length

// выведем длину массива
console.log(arr.length); // (длина массива) - 10

// выведем последний эелемент массива

console.log(arr[arr.length - 1]); // last elem

// изменение элементов массива let arr = ['a', 'b', 'c', 1, 2, 3, null, true, false, 'last elem'];
// изменем 'a' - первый элемент (нулевой индекс) на 'first elem'
arr[0] = 'firs elem';
console.log(arr); // (10)['firs elem', 'b', 'c', 1, 2, 3, null, true, false, 'last elem']

// конкатенация строк (объединение строк);
let var_str = '!';
arr[0] += var_str; // arr[0] = arr[0] + var_str
console.log(arr);

// (10)['firs elem!', 'b', 'c', 1, 2, 3, null, true, false, 'last elem']