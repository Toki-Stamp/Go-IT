/**
 * Created by Fomichev Yuri on 05.06.2017
 * Contact me at : toki.stamp@gmail.com
 */
'use strict';

/* Fibonacci sequence */

function fib(n) {
    if (n < 0) throw Error('Reason: n should be greater or equal to 0');
    if (n <= 1) {
        return n;
    } else {
        var fib_n,
            fib_n_minus_1 = 0,                      // Initializing F(n-1) and F(n-2) for the very first iteration
            fin_n_minus_2 = 1;
        for (var i = 2; i <= n; i++) {
            fib_n = fib_n_minus_1 + fin_n_minus_2;  // Calculating result of current iteration
            fib_n_minus_1 = fin_n_minus_2;          // Swapping variables for the next iterations
            fin_n_minus_2 = fib_n;                  // F(n-1) = F(n-2) and F(n-2) = F(n)
        }
        return fib_n;                               // Returning result F(n) = F(n-1) + F(n-2)
    }
}
var target = 1000;
for (var i = 0; i < target; i++) {
    console.log(i + '\t:\t' + fib(i));
}