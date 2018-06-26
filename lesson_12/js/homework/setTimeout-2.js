/**
 * Created by Fomichev Yuri on 05.05.2018
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* https://learn.javascript.ru/task/output-numbers-100ms-settimeout */

/*
    Сделайте то же самое, что в задаче Вывод чисел каждые 100 мс,
    но с использованием рекурсивного setTimeout вместо setInterval.
*/

function printNumbersRecursiveTimeout() {
    var number     = 1,
        callback   = function () {
            if (number <= 20) {
                console.log(number++);
                setTimeout(callback, delay);
            } else {
                clearTimeout(intervalID);
                console.log('cleared');
            }
        },
        delay      = 100,
        intervalID = setTimeout(callback, delay);
}

printNumbersRecursiveTimeout();