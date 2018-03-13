/**
 * Created by TS on 31.05.2017.
 */
'use strict';

/* Power of number */
/* Base ^ Exponent */

var base = parseInt(prompt('Enter base: ', '2')),
    exponent = parseInt(prompt('Enter exponent: ', '3'));

function power(base, exponent) {
    var result = 1;
    for (var i = 1; i <= exponent; i++) {
        result *= base;
    }
    return result;
}

console.log(power(base, exponent));