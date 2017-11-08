/**
 * Created by Fomichev Yuri on 05.06.2017
 * Contact me at : toki.stamp@gmail.com
 */
'use strict';

/* Kata 1: A function within a function */
/* Given an input n, write a function always that returns a function which returns n */

function always(n) {
    return function () {
        return n;
    }
}

/* Tests */

var input = ['str', 1, true, false, null, undefined, NaN];

for (var i = 0, func; i < input.length; i++) {
    func = always(input[i]);
    console.log(func() + ' is ' + typeof func());
}
