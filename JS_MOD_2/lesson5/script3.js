"use strict";
/* swithch - case: синтаксис
    switch (переменная) {
        case 'значение1':
            код который вополнится в случае,
            если переменная имеет значение1
        break;

        case 'значение2':
            код который вополнится в случае,
            если переменная имеет значение2
        break;

        case 'значение3':
            код который вополнится в случае,
            если переменная имеет значение3
        break;

        default:
            код который выполнится в случае,
            если переменная не совапала ни с одним значением.
        break;
    }


    break - выход из цикла
 */

let num = 5;

switch (num) {
    case 1:
        console.log('1');
        break;

    case 2:
        console.log('2');
        break;

    case 3:
        console.log('3');
        break;

    default:
        console.log('--------------');
        break;
}