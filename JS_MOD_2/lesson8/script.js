"use strict";
// создание объекта с датой: new Date();

let date = new  Date();

console.log(date.getFullYear()); // год: 2023
console.log(date.getMonth()); // месяц: 1
console.log(date.getDate()); // день: 26

console.log(date.getHours()); // часы: 10
console.log(date.getMinutes()) // минуты: 27
console.log(date.getSeconds()) // секунды: 48

// выведем дату в формате год - месяц - день

console.log(date.getFullYear() + ' - ' + (date.getMonth() + 1) + ' - ' + date.getDate());
// 2023 - 2 - 26

function addZero(num){
    if (num >=0 && num <= 9){
        return '0' + num;
    } else {
        return num;
    }
}

// модифицируем вывод даты с помощью функции addZero

console.log(
    addZero(date.getFullYear()) + ' - ' +
    addZero(date.getMonth() + 1) + ' - ' +
    addZero(date.getDate())
);

// 2023 - 02 - 26

/*
    Есть строка в формате  год-месяц-день
    поменяем формат даты на год/месяц/день
 */

let str = '2023-02-26';

let arr = str.split('-');
console.log(arr); //['2023', '02', '26']

// сформируем строку в нужном нам формате

let res = arr[2] + ' / ' + arr[1] + ' / ' + arr[0];
console.log(res);


//__________________________________________________________

let day = date.getDay();
// создадим массив дней недели
let days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

console.log(days[day]);