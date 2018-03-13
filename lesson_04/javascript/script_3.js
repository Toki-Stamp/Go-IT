/**
 * Created by Fomichev Yuri on 05.06.2017
 * Contact me at : toki.stamp@gmail.com
 */
'use strict';

/* Factorial Function */

var n = 6;//parseInt(prompt('Enter n factorial (!n) [0 ... 20]: ', '20'));
if ((n < 0) || (n > 20)) throw Error('Reason: N should be greater than 0 and less than 20');

/* Recursion */
function factorial(f) {
    if (f <= 1) {
        return 1;
    } else {
        return f * factorial(f - 1);
    }
}

console.log('!' + n + ' = ' + factorial(n));