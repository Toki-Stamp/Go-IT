/**
 * Created by Fomichev Yuri on 07.11.2017
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* Пример метода map */

var array = ['Есть', 'ли', 'жизнь', 'на', 'марсе'],
    arrLen = array.map(function (item) {
        if (item === 'жизнь') return '!!!' + '(' + item.length + ')';
        return item + '(' + item.length + ')';
    });
console.log(' array:', array);
console.log('arrLen:', arrLen);

/* Пример метода every */

array = [1, 2, true, 4, 'пять', 'шесть', 7];

console.log('\n', 'array:', array);
console.log(array.every(function (item) {
    return (typeof item === 'number');
}));

/* Пример метода some */

console.log(array.some(function (item) {
    return (typeof item === 'number');
}));