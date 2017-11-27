/**
 * Created by Fomichev Yuri on 26.11.2017
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* Closures and Scopes */

/* http://www.codewars.com/kata/closures-and-scopes/train/javascript */

function createFunctions(n) {
    var callbacks = [];

    for (var i = 0; i < n; i++) {
        var callback = function me() {
            return me.i;
        };
        callback.i = i;
        callbacks.push(callback);
    }

    return callbacks;
}

var callbacks = createFunctions(5); // create an array, containing 5 functions

console.log(callbacks[0]()); // must return 0
console.log(callbacks[3]()); // must return 3