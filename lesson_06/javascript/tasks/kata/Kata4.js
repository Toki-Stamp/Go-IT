/**
 * Created by Fomichev Yuri on 13.11.2017
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* Use reduce() to calculate the sum of the values in an array */
/* https://www.codewars.com/kata/use-reduce-to-calculate-the-sum-of-the-values-in-an-array/train/javascript */

/* Self-invoking function */
(function main() {
    var test0 = [1, 2, 3];
    var test1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var test2 = [71, -548, 12.3, 83, -47, -1.7, -892, 58, 31415, 2718, -38];

    console.log('sum', test0, '=', sum(test0));
    console.log('sum', test1, '=', sum(test1));
    console.log('sum', test2, '=', sum(test2));

    function sum(array) {
        return array.reduce(function (previous, current) {
            return previous + current;
        });
    }
})();