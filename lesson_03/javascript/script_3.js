/**
 * Created by TS on 31.05.2017.
 */
'use strict';

/* Fizz Buzz */

var left = parseInt(prompt('Enter Left bound of interval: ', '1')),         // Left bound
    right = parseInt(prompt('Enter Left bound of interval: ', '100')),      // Right bound
    fizz = 3,
    buzz = 5;

if (left > right) throw Error('Left bound can not be bigger than Right bound!');

function isFizz(number) {
    return (number % fizz === 0);
}
function isBuzz(number) {
    return (number % buzz === 0);
}

// Moving Left bound to the Right, including
for (var number = left; number <= right; number++) {
    // Finding Fizz numbers only but not Buzz numbers
    if (isFizz(number) && !isBuzz(number)) {
        console.log('Fizz: ' + number + ' % ' + fizz + ' = 0');
    // Finding Buzz numbers only but not Fizz numbers
    } else if (!isFizz(number) && isBuzz(number)) {
        console.log('Buzz: ' + number + ' % ' + buzz + ' = 0');
    // Finding Fizz and Buzz numbers at the same time
    } else if (isFizz(number) && isBuzz(number)) {
        console.log('FizzBuzz: ' + number + ' % ' + fizz + ' = 0 && ' + number + ' % ' + buzz + ' = 0');
    }
}