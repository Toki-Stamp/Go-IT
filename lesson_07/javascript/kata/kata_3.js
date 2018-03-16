/**
 * Created by Fomichev Yuri on 12.03.2018
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* Lazily executing a function */

/* http://www.codewars.com/kata/lazily-executing-a-function/train/javascript */

var add = function (a, b) {
    return a + b;
};

var double = function (a) {
    return a * 2;
};

var make_lazy = function () {
    var fn   = arguments[0],
        args = [].slice.call(arguments, 1);

    return function () {
        return fn.apply(null, args);
    }
};

var lazy_value_add = make_lazy(add, 2, 3);

var lazy_value_double = make_lazy(double, 5);

console.log(lazy_value_add());
console.log(lazy_value_double());