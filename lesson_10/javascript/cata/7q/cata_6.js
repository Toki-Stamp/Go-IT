/**
 * Created by Fomichev Yuri on 18.03.2018
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* http://www.codewars.com/kata/gradually-adding-parameters */

/* Gradually Adding Parameters */

/*
 This kata is all about adding numbers.

 You will create a function named add.
 This function will return the sum of all the arguments.
 Sounds easy, doesn't it??

 Well here's the twist.
 The inputs will gradually increase with
 their index as parameter to the function.

 add(3, 4, 5) ==> returns (3 * 1) + (4 * 2) + (5 * 3) = 26

 Remember the function will return 0
 if no arguments are passed.

 Examples

 add(); //=> 0
 add(1, 2, 3); //=> 14
 add(1, 4, -5, 5); //=> 14

*/

function add() {
    return [].slice.call(arguments).reduce(function (result, value, index) {
        return result + value * (index + 1);
    }, 0);
}

function add_best() {
    return [].reduce.call(arguments, function (result, value, index) {
        return result + value * (index + 1);
    }, 0);
}

console.log(add_best());
console.log(add());
console.log(add_best(1, 2, 3));
console.log(add(1, 2, 3));
console.log(add_best(1, 4, -5, 5));
console.log(add(1, 4, -5, 5));