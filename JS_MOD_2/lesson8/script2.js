"use strict";

// timestamp
/*
    timestamp - специальный формат который показыват сколько прошло времени с 1-го января
    1970 года по текущий (или заданный) момент времени в миллисекундах.
 */

// получим текущий момент времени в формате timestamp

let date = new Date();
console.log(date.getTime()); // 1677398911730

// получим заданный момент времени в формате timestamp

let date2 = new Date(2020, 12, 30, 23, 59, 59);
console.log(date2.getTime());// 1612040399000


// найдем разницу между текущим и заданным временем в формате timestamp

let diff = date.getTime() - date2.getTime();
console.log(diff); // 65358963750