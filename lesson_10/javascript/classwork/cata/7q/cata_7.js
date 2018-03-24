/**
 * Created by Fomichev Yuri on 18.03.2018
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* http://www.codewars.com/kata/reverseit-1 */

/* reverseIt */

/*
 You have to create a function named reverseIt.

 Write your function so that in the case
 a string or a number is passed in as the data,
 you will return the data in reverse order.
 If the data is any other type, return it as it is.

 Examples of inputs and subsequent outputs:

 "Hello" -> "olleH"

 "314159" -> "951413"

 [1,2,3] -> [1,2,3]

*/

function reverseIt(data) {
    return (
        (typeof data === 'string') ?
            (data.toString().split('').reverse().join('')) :
            (typeof data === 'number') ?
                (+data.toString().split('').reverse().join('')) : data
    )
}

console.log('Hello', '==>', reverseIt('Hello'));
console.log(314159, '==>', reverseIt(314159));
console.log([1, 2, 3], '==>', reverseIt([1, 2, 3]));