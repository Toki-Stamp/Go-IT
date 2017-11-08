/**
 * Created by Fomichev Yuri on 05.06.2017
 * Contact me at : toki.stamp@gmail.com
 */
'use strict';

/* SumTo Function */

var n = parseInt(prompt('Enter n [0 ... 1000]: ', '20'));
if ((n < 0) || (n > 1000)) throw Error('Reason: N should be greater than 0 and less than 100');

function sumTo_Recursion(n) {
    switch (n) {
        case 0 :
            return 0;
        case 1 :
            return 1;
        default:
            return n + sumTo_Recursion(n - 1);
    }
}

function sumTo_Loop(n) {
    var result = 0,
        i = 0;
    while (i <= n) {
        result += i++;
    }
    return result;
}

function sumTo_ArithmeticProgression(n) {
    return n * (1 + n) / 2;
}

console.log('Recursion: sumTo(' + n + ') = ' + sumTo_Recursion(n));
console.log('While Loop: sumTo(' + n + ') = ' + sumTo_Loop(n));
console.log('Arithmetic Progression: sumTo(' + n + ') = ' + sumTo_ArithmeticProgression(n));