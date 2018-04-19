/**
 * Created by Fomichev Yuri on 18.03.2018
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* Задание 8 */

/*
 Имеется массив css классов со старницы.

 var arr = [
    'link', 'menu', 'menu__item',
    'menu__item', 'header', 'link',
    'footer', 'sidebar', 'link' ...
 ];

 Необходимо из этого массива получить массив
 с уникальными именами классов (без повторений)
 отсортированный по частоте использования
 (наиболее часто используемые - впереди).

 Если классы используются одинаковое
 количество раз - между ними не важно какой будет первее.

 result = [
    'link', 'menu__item', 'menu',
    'header', 'footer', 'sidebar', ...
 ];

*/

function unique(array) {
    var object = {};

    array.forEach(function (item) {
        object[item] = ++object[item] || 1;
    });

    return Object.keys(object).sort(function (a, b) {
        return object[b] - object[a];
    });
}

var arr = [
    'link', 'menu', 'menu__item',
    'menu__item', 'header', 'link',
];

console.log(unique(arr));