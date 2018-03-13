/**
 * Created by Fomichev Yuri on 12.03.2018
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* Название проблемы */

/* Описание */

function applyf(f) {
    return function (a) {
        return function (b) {
            return f(a, b);
        }
    }
}

function add(a, b) {
    return a + b;
}

function mul(a, b) {
    return a * b;
}

var addf2 = applyf(add);
console.log(addf2(3)(4));
console.log(applyf(mul)(3)(4));