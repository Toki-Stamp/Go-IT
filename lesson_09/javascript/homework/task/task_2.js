/**
 * Created by Fomichev Yuri on 16.03.2018
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* http://learn.javascript.ru/call-apply#примените-функцию-к-аргументам */

/*
 Напишите функцию applyAll(func, arg1, arg2...),
 которая получает функцию func и произвольное количество аргументов.

 Она должна вызвать func(arg1, arg2...), то есть передать в func все аргументы,
 начиная со второго, и возвратить результат.

 Например:

 // Применить Math.max к аргументам 2, -2, 3
 alert( applyAll(Math.max, 2, -2, 3) ); // 3

 // Применить Math.min к аргументам 2, -2, 3
 alert( applyAll(Math.min, 2, -2, 3) ); // -2

 Область применения applyAll, конечно, шире,
 можно вызывать её и со своими функциями:

 function sum() { // суммирует аргументы: sum(1,2,3) = 6
    return [].reduce.call(arguments, function(a, b) {
        return a + b;
    });
 }

 function mul() { // перемножает аргументы: mul(2,3,4) = 24
    return [].reduce.call(arguments, function(a, b) {
        return a * b;
    });
 }

 alert( applyAll(sum, 1, 2, 3) ); // -> sum(1, 2, 3) = 6
 alert( applyAll(mul, 2, 3, 4) ); // -> mul(2, 3, 4) = 24
*/

function sum() {
    return [].reduce.call(
        arguments,
        function (a, b) {
            return a + b;
        }
    );
}

function mul() {
    return [].reduce.call(
        arguments,
        function (a, b) {
            return a * b;
        }
    );
}

function myApply() {
    var fn,
        args;

    if (arguments.length) {
        fn   = arguments[0];
        args = [].slice.call(arguments, 1);

        if (typeof fn === 'function') {
            return fn.apply(null, args);
        }
    }
}

console.log(myApply(mul, 3, 5));
console.log(myApply(sum, 3, 5));
console.log(myApply(Math.max, 3, -2, 5));
console.log(myApply(Math.min, 3, -2, 5));