/**
 * Created by Fomichev Yuri on 26.11.2017
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* Название проблемы */
/* Описание */

/* Self-invoking function */
(function main() {
})();

(function () {
    console.log(arguments);
})('hello');

function identity(value) {
    return value;
}

console.log(identity(3));

function add(a, b) {
    return a + b;
}

console.log(add(1, 2));

function multiply(a, b) {
    return a * b;
}

console.log(multiply(2, 8));

function returnFunction(argument) {
    return function () {
        return argument;
    }
}

var idf = returnFunction(12);

console.log(idf());

function addf(a) {
    return function (b) {
        return a + b;
    }
}

console.log(addf(3)(5));

function applyf(f) {
    return function (a) {
        return function (b) {
            return f(a, b);
        };
    }
}

var addf2 = applyf(add);

console.log(addf2(11)(4));
console.log(applyf(multiply)(4)(4));

