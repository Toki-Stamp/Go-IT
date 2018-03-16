/**
 * Created by Fomichev Yuri on 17.03.2018
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* http://www.codewars.com/kata/unpacking-arguments/train/javascript */

/* Unpacking Arguments

 You must create a function, spread,
 that takes a function and a list of arguments to be applied to that function.
 You must make this function return the result of calling the given function
 with the given arguments.

 eg:

 spread(someFunction, [1, true, "Foo", "bar"] )
 // is the same as...
 someFunction(1, true, "Foo", "bar")
*/

function spread(func, args) {
    return func.apply(this, args);
}