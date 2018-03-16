/**
 * Created by Fomichev Yuri on 16.03.2018
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* http://learn.javascript.ru/decorators#логирующий-декоратор-много-аргументов */

/*
 Логирующий декоратор (много аргументов)

 Создайте декоратор makeLogging(func, log),
 для функции func возвращающий обёртку,
 которая при каждом вызове добавляет её аргументы в массив log.

 Условие аналогично задаче Логирующий декоратор (1 аргумент),
 но допускается func с любым набором аргументов.

 Работать должно так:

 function work(a, b) {
    alert( a + b ); // work - произвольная функция
 }

 function makeLogging(f, log) {
    ваш код
 }

 var log = [];

 work = makeLogging(work, log);

 work(1, 2); // 3
 work(4, 5); // 9

 for (var i = 0; i < log.length; i++) {
    var args = log[i]; // массив из аргументов i-го вызова
    alert( 'Лог:' + args.join() ); // "Лог:1,2", "Лог:4,5"
 }
*/

function work() {
    var varargs = [].slice.call(arguments),
        result  = varargs.reduce(function (a, b) {
            return a + b;
        });

    console.log(varargs, '=>', result);

    /* work - произвольная функция с
    произвольным количеством аргументов */
}

function makeLogging(fn, log) {
    return function () {
        log.push([].slice.call(arguments));

        return fn.apply(null, arguments);
    }
}

var log = [];

work = makeLogging(work, log);

work(1, 2, 3, 4); // [1, 2, 3, 4] добавлено в log => 10
work(5, 1); // [5, 1] добавлено в log => 6
work(2); // [2] добавлено в log => 2
work(7, 7); // [7, 7] добавлено в log => 14

console.log(log); // [[1, 2, 3, 4], [5, 1], [2], [7, 7]]