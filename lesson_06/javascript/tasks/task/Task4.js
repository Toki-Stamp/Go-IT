/**
 * Created by Fomichev Yuri on 07.11.2017
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* Сумма всех своих числовых аргументов */

function sumArguments() {
    var result = 0,
        i, size;

    for (i = 0, size = arguments.length; i < size; i += 1) {
        if (typeof arguments[i] === 'number') {
            result += arguments[i];
        }
    }
    return result;
}

console.log('...', ' = ', sumArguments());
console.log('1 + 2 + 3', ' = ', sumArguments(1, 2, 3));
console.log('1 + 2 + 3 + 4', ' = ', sumArguments(1, 2, 3, 4));