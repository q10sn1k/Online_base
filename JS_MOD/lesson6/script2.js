"use strict";

/*
    объекты (В других языках называются ассоциативными массивами)

        ключ: значение
 */

// создадим пустой объект

// let obj = {};

// создадим объект и заполним его сразу

let obj = {
    1: 'a',
    2: 'b', // выведем b
    3: 'c'
}

console.log(obj[2]); // b script2.js:15

console.log(obj); // {1: 'a', 2: 'b', 3: 'c'} script2.js:23


let obj2 = {
    '1key': 'a', // выведем a
    '2key': 'b',
    '3key': 'c'
}

console.log(obj2['1key']); // a

let obj3 = {
    first: 'a', // выведем a
    second: 'b',
    '3key': 'c'
}

console.log(obj3['first']); // a

// к объектам можно образаться как к свойстам

console.log(obj3.first); // a

console.log(obj3['3key']); // a

// элементы объектов можно изменять
obj3.first = 1;
obj3['3key'] = 3;

console.log(obj3);
/*
    Object
    3key: 3
    first: 1
    second: "b"
[[Prototype]] : Object
 */

// у объектов нет свойства lenght

let obj4 = {a: 1 , b: 2, c: 3};
console.log(obj4.lenght) // undefined, так как у объектов нет свойства lenght


/*
    для того чтобы получить длину объекта мы получим массив ключей объекта
    и найдем его длину
 */
// получим массив ключей объекта obj4
let arr_obj4_keys = Object.keys(obj4);

console.log(arr_obj4_keys.length); // 3