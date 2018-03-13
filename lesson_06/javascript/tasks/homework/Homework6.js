/**
 * Created by Fomichev Yuri on 07.11.2017
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* Уникальные элементы массива */

var array = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'кришна', '8-('];

function unique(array) {
    var uniqueValues = {};
    array.forEach(function (item) {
        uniqueValues[item] = true;
    });
    console.log(uniqueValues);
    return Object.keys(uniqueValues);
}

console.log('    Исходный массив:', array);
console.log('Уникальные значения:', unique(array));