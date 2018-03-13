/**
 * Created by Fomichev Yuri on 10.09.2017
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* slice() method example */

var arrayTarget = ['Why', 'should', 'we', 'learn', 'JavaScript'],
    arrayOutput = arrayTarget.slice(2, 4);
console.log('start from 2 up to 4 excluding');
console.log(arrayTarget);
console.log(arrayOutput);
console.log('-1 first from the end');
arrayOutput = arrayTarget.slice(-1);
console.log(arrayTarget);
console.log(arrayOutput);
console.log('all elements');
arrayOutput = arrayTarget.slice();
console.log(arrayTarget);
console.log(arrayOutput);
