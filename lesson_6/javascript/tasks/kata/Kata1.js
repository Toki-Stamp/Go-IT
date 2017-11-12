/**
 * Created by Fomichev Yuri on 12.11.2017
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* Return the Missing Element */
/* https://www.codewars.com/kata/return-the-missing-element/train/javascript */

var array = [0, 5, 1, 3, 2, 9, 7, 6, 4]; // returns 8
var array2 = [9, 2, 4, 5, 7, 0, 8, 6, 1]; // returns 3
var array3 = [3, 2, 4, 5, 7, 0, 8, 6, 1]; // returns 9
var array4 = [3, 2, 4, 5, 7, 0, 8, 6, 9]; // returns 1

/* Self-invoking function */
(function main() {
    var a = array4;
    console.log('array:', a, 'missing element:', getMissingElement(a));

    function getMissingElement(superImportantArray) {
        var i;
        for (i = 0; i < 10; i++) {
            if (superImportantArray.indexOf(i) === -1) return i;
        }
    }
})();