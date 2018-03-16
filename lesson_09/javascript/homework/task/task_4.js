/**
 * Created by Fomichev Yuri on 17.03.2018
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* http://learn.javascript.ru/decorators#кеширующий-декоратор */

/*
 Создайте декоратор makeCaching(f),
 который берет функцию f и возвращает обертку,
 которая кеширует её результаты.

 В этой задаче функция f имеет только один аргумент,
 и он является числом.

 При первом вызове обертки с определенным аргументом –
 она вызывает f и запоминает значение.

 При втором и последующих вызовах с тем же аргументом
 возвращается запомненное значение.

 Должно работать так:

 function f(x) {
    return Math.random() * x; // random для удобства тестирования
 }

 function makeCaching(f) {
    ваш код
 }

 f = makeCaching(f);

 var a, b;

 a = f(1);
 b = f(1);
 alert( a == b ); // true (значение закешировано)

 b = f(2);
 alert( a == b ); // false, другой аргумент => другое значение
*/

function f(x) {
    return Math.random() * x; // random для удобства тестирования
}

function makeCaching(fn) {
    var cache = {};

    return function (key) {
        var value,
            msg = 'Cache already contains key "' + key + '". ' +
                'Therefore returning cached value "' + cache[key] + '"';

        if (!(key in cache)) {
            value      = fn.call(null, key);
            cache[key] = value;
            msg        = 'Added new key "' + key + '" with value "' + value + '"';
        }

        console.log(msg);

        return cache[key];
    }
}

f = makeCaching(f);

var a, b;

a = f(1);
b = f(1);
console.log(a);
console.log(b);
console.log(a == b); // true (значение закешировано)

b = f(2);
console.log(a);
console.log(b);
console.log(a == b); // false, другой аргумент => другое значение