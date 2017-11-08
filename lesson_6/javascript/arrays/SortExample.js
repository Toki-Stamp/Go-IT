/**
 * Created by Fomichev Yuri on 10.09.2017
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* sort() method example */

function compareNumeric(left, right) {
    if (left > right) return 1;
    if (left < right) return -1;
    return 0;
}

function compareSimple(left, right) {
    /* left > right returns value > 0 */
    /* left < right returns value < 0 */
    /* left = right returns value = 0 */
    return left - right;
}

function compareStringFirstThenNumeric(left, right) {
    var result = 0;
    if (+left && +right) {
        result = left - right;
    } else if (+left) {
        result = 1;
    } else {
        result = -1
    }
    // console.log(left, right, result);
    return result;
}

var array = [1, 2, 15, 12, 12, 0],
    arrayCopy = array.slice(),
    arrayOneMoreCopy = array.slice(),
    arrayCombined = [11, 2, 'Привет', 3, 'Hello', 0, 0];

console.log(array);
console.log('Sort with compareNumeric function:');
array.sort(compareNumeric);
console.log(array);
arrayCopy.sort(compareSimple);
console.log('Sort with compareSimple function:');
console.log(arrayCopy);
arrayOneMoreCopy.sort(function (left, right) {
    /* ascending */
    return left - right;
    /* descending */
    // return right - left;
});
console.log('Sort with unnamed function:');
console.log(arrayOneMoreCopy);
console.log('Sort with compareStringFirstThenNumeric function:');
console.log(arrayCombined);
arrayCombined.sort(compareStringFirstThenNumeric);
console.log(arrayCombined);