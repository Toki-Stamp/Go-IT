/**
 * Created by Fomichev Yuri on 05.06.2017
 * Contact me at : toki.stamp@gmail.com
 */
'use strict';

/* Random in range 0 ... max */

var max = parseInt(prompt('Enter random max value: ', '10'));

if (max < 0) throw Error('Reason: Max should be greater or equal to 0');

function rnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('Random [0 .. ' + max + '] = ' + rnd(0, max));
