/**
 * Created by Fomichev Yuri on 05.05.2018
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* https://learn.javascript.ru/task/output-numbers-100ms */

/*
    Напишите функцию printNumbersInterval(), которая последовательно выводит в консоль
    числа от 1 до 20, с интервалом между числами 100 мс. То есть, весь вывод должен
    занимать 2000 мс, в течение которых каждые 100 мс в консоли появляется очередное число.
    
    P.S. Функция должна использовать setInterval.
*/

function printNumbersInterval() {
    var number     = 1,
        callback   = function () {
            if (number <= 20) {
                console.log(number++);
            } else {
                clearInterval(intervalID);
                console.log('cleared');
            }
        },
        delay      = 100,
        intervalID = setInterval(callback, delay);
}

printNumbersInterval();