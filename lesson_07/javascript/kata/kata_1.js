/**
 * Created by Fomichev Yuri on 26.11.2017
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* Closures and Scopes */

/* http://www.codewars.com/kata/closures-and-scopes/train/javascript */

/* via setting object property to each function */
function createFunctions(number) {
    var callbacks = [];

    for (var i = 0; i < number; i++) {
        var callback = function me() {
            return me.i;
        };

        callback.i = i;
        callbacks.push(callback);
    }

    return callbacks;
}

/* via self-invoking function using closure v1 */
function createFunctions_v1(number) {
    var callbacks = [];

    for (var i = 0; i < number; i++) {
        var callback = (function (index) {
            return function () {
                return index;
            }
        })(i);

        callbacks.push(callback);
    }

    return callbacks;
}

/* via self-invoking function using closure v2 */
function createFunctions_v2(number) {
    var callbacks = [], i;

    for (i = 0; i < number; i++) {
        (function (index) {
            callbacks.push(function () {
                return index;
            });
        })(i);
    }

    return callbacks;
}

/* create an array, containing 5 functions */
var callbacks_properties = createFunctions(5);
var callbacks_closure_v1 = createFunctions_v1(5);
var callbacks_closure_v2 = createFunctions_v2(5);

console.log('via setting object property to each function');
console.log(callbacks_properties[0]()); // must return 0
console.log(callbacks_properties[1]()); // must return 1
console.log(callbacks_properties[2]()); // must return 2
console.log(callbacks_properties[3]()); // must return 3
console.log(callbacks_properties[4]()); // must return 4
console.log('via self-invoking function using closure v1');
console.log(callbacks_closure_v1[0]()); // must return 0
console.log(callbacks_closure_v1[1]()); // must return 1
console.log(callbacks_closure_v1[2]()); // must return 2
console.log(callbacks_closure_v1[3]()); // must return 3
console.log(callbacks_closure_v1[4]()); // must return 4
console.log('via self-invoking function using closure v2');
console.log(callbacks_closure_v2[0]()); // must return 0
console.log(callbacks_closure_v2[1]()); // must return 1
console.log(callbacks_closure_v2[2]()); // must return 2
console.log(callbacks_closure_v2[3]()); // must return 3
console.log(callbacks_closure_v2[4]()); // must return 4