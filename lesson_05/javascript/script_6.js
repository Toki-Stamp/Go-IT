/**
 * Created by Fomichev Yuri on 09.09.2017
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* Arrays */

var userInput, array = [];

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function getArrayAllElementsSum(array) {
    var sum = (array.length > 0) ? 0 : 'Empty array!',
        i;
    for (i = 0; i < array.length; i++) {
        sum += parseInt(array[i]);
    }
    return sum;
}

while (true) {
    userInput = prompt('Array: [' + array + ']');
    if (userInput && isNumber(userInput)) {
        array.push(userInput);
        continue;
    }
    break;
}

console.log(array);
console.log(getArrayAllElementsSum(array));