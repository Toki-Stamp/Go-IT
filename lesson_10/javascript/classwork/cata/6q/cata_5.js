/**
 * Created by Fomichev Yuri on 18.03.2018
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* http://www.codewars.com/kata/typer-dot-js */

/* Typer.js */
/*
 Type checking in JavaScript
 Sometimes it could be a good thing to check
 if an object is of a type T. Lets see this example:

 function doStuff(thing) {
    return thing.map(function(item) {
        return item * 2;
    });
 }

 If we call this function with an array,
 we get the expected result

 doStuff([1,2,3]) //Array [ 2, 4, 6 ]

 But if someone calls doStuff with a
 different type of argument, it will throw an exception,
 because most likely the argument object won't have a
 method map defined on it.

 doStuff(3) //TypeError: thing.map is not a function

 Apart from this, having methods like isArray or isString
 can rise readability when validating input arguments,
 and clears things up for fellow co-workers.

 Your task will be to create a basic type-checker
 "framework/api" for JavaScript.
 Let's call it typer.js.
 Your API must contain the following methods:

 isNumber
 isString
 isArray
 isFunction
 isDate
 isRegExp
 isBoolean
 isError
 isNull
 isUndefined

 Create these utility methods for input validation.
 For example, if the argument is a number,
 then isNumber called with this argument should return true.

 Example

 assert.equal(typer.isNumber(5), true);
 assert.equal(typer.isString({}), false);

 Note

 If you are stuck, feel free to check how
 known utility libraries do the exact same thing.
 Check them on GitHub ;)

 Motivation

 Possibly after this kata the warriors who just
 started to learn JavaScript will learn that
 sometimes the conventional ways of type checking
 in JavaScript in not sufficient enough, since,
 for example, not only "simple" numbers are
 considered as numbers, but numbers created by
 Number constructors, etc.

*/