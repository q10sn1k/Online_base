"use strict";
let num = 500

while (num > 10) {
    num = num / 2;
    console.log(num);
}

/*
    script.js:6 250
    script.js:6 125
    script.js:6 62.5
    script.js:6 31.25
    script.js:6 15.625
    script.js:6 7.8125
 */

// выведем числа от 10 до 1
for (let i = 10; i > 0; i--) {
    console.log(i); // 10 9 8 ......... 1
}

/*
    Цикл for-of позволяет перебирать элементы массивов:

    for (let переменная_для_элемента of массив)  {

        В переменную_для_элемента по очереди будут
        попадать элементы перебираемого массива

    }
 */

let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
    console.log(elem);
}
/*
script.js:37 1
script.js:37 2
script.js:37 3
script.js:37 4
script.js:37 5
 */

for (let i = 0; i <= arr.length - 1; i++){
    console.log(arr[i]);
}
/*
script.js:48 1
script.js:48 2
script.js:48 3
script.js:48 4
script.js:48 5
 */