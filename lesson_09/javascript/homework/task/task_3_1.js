/**
 * Created by Fomichev Yuri on 16.03.2018
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* http://learn.javascript.ru/task/logging-decorator */

/*
 Логирующий декоратор (1 аргумент)

 Создайте декоратор makeLogging(f, log),
 который берет функцию f и массив log.

 Он должен возвращать обёртку вокруг f,
 которая при каждом вызове записывает («логирует») аргументы в log,
 а затем передает вызов в f.

 В этой задаче можно считать, что у функции f ровно один аргумент.

 Работать должно так:
 function work(a) {
    work - произвольная функция, один аргумент
 }

 function makeLogging(f, log) {
    ваш код
 }

 var log = [];

 work = makeLogging(work, log);

 work(1); // 1, добавлено в log
 work(5); // 5, добавлено в log

 for (var i = 0; i < log.length; i++) {
    alert( 'Лог:' + log[i] ); // "Лог:1", затем "Лог:5"
 }
*/

function work(a) {
    /* work - произвольная функция, 1 аргумент */
}

function makeLogging(fn, log) {
    return function () {
        log.push(arguments[0]);

        return fn.apply(null, arguments);
    }
}

var log = [];

work = makeLogging(work, log);

work(1); // 1, добавлено в log
work(5); // 5, добавлено в log
work(2); // 2, добавлено в log
work(7); // 7, добавлено в log

console.log(log); // [1, 5, 2, 7]