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
    var func   = arguments[0],
        params = (function () {
            var result = [],
                i,
                size   = arguments[0].length;

            for (i = 1; i < size; i += 1) {
                result.push(arguments[0][i]);
            }

            return result;
        })(arguments);

    return function () {
        return func.apply(func, params);
    }
};

var lazy_value_add = make_lazy(add, 2, 3);

var lazy_value_double = make_lazy(double, 5);

console.log(lazy_value_add());
console.log(lazy_value_double());