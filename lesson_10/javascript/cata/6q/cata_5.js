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

var typer = (function (toBeDefined) {
    return {
        isNumber   : function (input) {
            return (
                isFinite(input) &&
                !isNaN(input) &&
                (typeof input === 'number') &&
                (Object.prototype.toString.call(input) === '[object Number]')
            );
        },
        isString   : function (input) {
            return (typeof input === 'string');
        },
        isArray    : function (input) {
            return (
                (Object.prototype.toString.call(input) === '[object Array]') &&
                (input instanceof Array)
            );
        },
        isFunction : function (input) {
            return (
                (Object.prototype.toString.call(input) === '[object Function]') &&
                (typeof input === 'function')
            );
        },
        isDate     : function (input) {
            return (
                (Object.prototype.toString.call(input) === '[object Date]') &&
                (input instanceof Date)
            );
        },
        isRegExp   : function (input) {
            return (
                (Object.prototype.toString.call(input) === '[object RegExp]') &&
                (input instanceof RegExp)
            );
        },
        isBoolean  : function (input) {
            return (typeof input === 'boolean');
        },
        isError    : function (input) {
            return (Object.prototype.toString.call(input) === '[object Error]');
        },
        isNull     : function (input) {
            return (Object.prototype.toString.call(input) === '[object Null]');
        },
        isUndefined: function (input) {
            return (
                (Object.prototype.toString.call(input) === '[object Undefined]') &&
                (typeof input === 'undefined')
            );
        }
    };
}(null));

var typer_best = (function (toBeDefined) {
    return {
        isNumber   : function (input) {
            return (
                ((typeof input === 'number') ||
                    (input instanceof Number)) && !isNaN(input)
            );
        },
        isString   : function (input) {
            return (
                (typeof input === 'string') ||
                (input instanceof String)
            );
        },
        isArray    : function (input) {
            // return (input instanceof Array);
            return (Array.isArray(input));
        },
        isFunction : function (input) {
            return (typeof input === 'function');
        },
        isDate     : function (input) {
            return (input instanceof Date);
        },
        isRegExp   : function (input) {
            return (input instanceof RegExp);
        },
        isBoolean  : function (input) {
            return (
                (typeof input === 'boolean') ||
                (input instanceof Boolean)
            );
        },
        isError    : function (input) {
            return (input instanceof Error);
        },
        isNull     : function (input) {
            return (input === null);
        },
        isUndefined: function (input) {
            return (input === undefined);
        }
    };
}(null));

var fn            = function () {},
    arr           = [],
    obj           = {},
    reg           = new RegExp('\d'),
    numberTest    = [
        [2][0], 5, 2.4, '5', true, new Number(4).valueOf(), parseInt('99', 10), NaN, -Infinity, Infinity, undefined,
        null
    ],
    stringTest    = ['str', '', fn, true, arr, obj, NaN, undefined, null],
    arrayTest     = [[], [[]], arr, obj, {}, NaN, undefined, null],
    functionTest  = [
        function () {}, fn, new Function(), {}, [], arr, obj, undefined, null
    ],
    dateTest      = [new Date(), Date, NaN, undefined, null],
    regExpTest    = [reg, new RegExp('\s', 'ig'), /\sg/, 'str', undefined, null, fn, arr, obj],
    booleanTest   = [true, false, !1, !0, !+'1', !+'0', undefined, !undefined, NaN, !NaN, Infinity, !Infinity],
    errorTest     = [
        new Error, new EvalError, new RangeError, new ReferenceError, new SyntaxError, new TypeError, new URIError,
        null, undefined, fn, arr, obj, 1, '4', true
    ],
    nullTest      = [null, !null, undefined, NaN, obj, fn, arr, 4, '5'],
    undefinedTest = [undefined, , null, '', 4, NaN];

function test(array, lib, name) {
    var i,
        size;
    
    console.log('Testing "' + name + '" method');
    console.log('Input data: ', array);
    for (i = 0, size = array.length; i < size; i++) {
        console.log(
            (i + 1) + '\t',
            lib[name](array[i]) + '\t',
            lib.isString(array[i]) ? ('"' + array[i] + '"') : array[i]
        );
    }
    console.log('------------------------------');
}

// test(numberTest, typer, 'isNumber');
// test(stringTest, typer, 'isString');
// test(arrayTest, typer, 'isArray');
// test(functionTest, typer, 'isFunction');
// test(dateTest, typer, 'isDate');
// test(regExpTest, typer, 'isRegExp');
// test(booleanTest, typer, 'isBoolean');
// test(errorTest, typer, 'isError');
// test(nullTest, typer, 'isNull');
// test(undefinedTest, typer, 'isUndefined');
var n = new Number(4);
console.log(typeof n.valueOf());
console.log(typeof n);
console.log(Object.prototype.toString.call(n));
