/**
 * Created by TS on 31.05.2017.
 */
'use strict';

/* Prime numbers */

var left = parseInt(prompt('Enter Left bound of interval: ', '2')),     // Left bound
    right = parseInt(prompt('Enter Left bound of interval: ', '10')),   // Right bound
    leastDivisor = 2,
    prime = leastDivisor;
if (left > right) throw Error('Left bound can not be bigger than Right bound!');

// Moving Left bound to the Right, including
for (var number = left; number <= right; number++) {
    // Finding all dividers for current number, including
    for (var divider = leastDivisor; divider <= number; divider++) {
        // Finding and Printing Prime number
        if (number % divider === 0) {
            if (number !== divider) {
                break; // Not Prime
            } else {
                prime = divider;
            }
            console.log('Prime: ' + prime);
        }
    }
}