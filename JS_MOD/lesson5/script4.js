"use strict";
/*
    while - выполняется, пока истинно заданное условие.
    for - выполнение кода указанное количество раз




    синтаксис while

    while (пока условие истино) {
        код
    }

 */

    let a = 0;

    while (a <= 5) {
        console.log(a);
        a++; // a = a + 1;
    }



    /*
        for (начальная команда, условие окончания, команды после прохода){
            тело цикла
        }
     */
// выведем цифры от 0 до 9
for (let i = 0; i < 10; i++){
    console.log(i);
}