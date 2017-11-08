/**
 * Created by Fomichev Yuri on 07.11.2017
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* Сортировка массива строк */

var array = ['HTML', 'JavaScript', 'CSS'],
    arrSorted = array.slice().sort(function (a, b) {
        if (String(a) < String(b)) return -1;
        if (String(a) > String(b)) return 1;
        return 0;
    });
console.log('Не сортированный массив:', array);
console.log(' Отсортированный массив:', arrSorted);