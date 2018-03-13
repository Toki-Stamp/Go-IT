/**
 * Created by Fomichev Yuri on 03.11.2017
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* Преобразуем строки в camelCase вид */

function toCamelCase(string) {
    var array;
    if (string) {
        array = String(string).split(/-+/).filter(function (item) {
            return item;
        });
        if (array.length > 1) {
            array.forEach(function (item, index, array) {
                if (index > 0) {
                    array[index] = item.charAt(0).toUpperCase() + item.substring(1);
                }
            });
        }
    }
    return string + ((array && array.length > 1) ? (' -> ' + array.join('')) : '');
}

console.log(toCamelCase('none'));
console.log(toCamelCase('-pagination-container'));
console.log(toCamelCase('non-visible-element'));
console.log(toCamelCase('--web-kit--some--thing--'));
console.log(toCamelCase('--kebab-something'));
