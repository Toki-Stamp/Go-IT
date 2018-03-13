/**
 * Created by Fomichev Yuri on 07.11.2017
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* Пример метода Reduce */

function getSums(array) {
    var initialValue = 0,
        result = [];
    array.reduce(function (previous, current, index, array) {
        result.push(previous + current);
        return previous + current;
    }, initialValue);
    return result;
}

console.log('[1, 2, 3, 4, 5] =>', getSums([1, 2, 3, 4, 5]));
console.log('[-2, -1, 0, 1] =>', getSums([-2, -1, 0, 1]));