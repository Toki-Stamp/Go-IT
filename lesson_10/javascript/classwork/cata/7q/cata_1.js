/**
 * Created by Fomichev Yuri on 18.03.2018
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* http://www.codewars.com/kata/more-than-one-way-to-call-a-function-or-skin-a-cat */

/* More than one way to call a function, or skin a cat */

/*
 Write a single function that can be invoked by either

 sum(2,3); //5
 same as
 sum(2)(3); //5

 Both of these examples should return
 the sum of the 2 numbers.

*/

function sum(a, b) {
    return arguments.length > 1 ? a + b : function (b) {return a + b}
}

console.log(sum(2)(3));
console.log(sum(2, 3));
console.log(sum(2, 0));