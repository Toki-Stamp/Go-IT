/**
 * Created by Fomichev Yuri on 05.06.2017
 * Contact me at : toki.stamp@gmail.com
 */
'use strict';

/* Recursion pow */

var base = parseInt(prompt('Enter base: ', '2')),
    exponent = parseInt(prompt('Enter exponent: ', '4'));

function pow(base, exponent) {
    if (exponent < 0) throw Error('Reason: Exponent should be greater than or equal to 0');
    switch (exponent) {
        case 0 :
            return 1;
        case 1 :
            return base;
        default :
            return base * pow(base, exponent - 1);
    }
}

alert(base + ' ^ ' + exponent + ' = ' + pow(base, exponent));