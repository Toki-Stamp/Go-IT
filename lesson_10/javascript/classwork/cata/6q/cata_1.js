/**
 * Created by Fomichev Yuri on 18.03.2018
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* http://www.codewars.com/kata/complete-fibonacci-series */

/* Complete Fibonacci Series */

/*
 The function 'fibonacci' should return
 an array of fibonacci numbers.
 The function takes a number as an argument to decide
 how many number of elements to produce.
 If the argument is less than or equal to 0 then
 return empty array.

 Example:

 fibonacci(4); // should return [0, 1, 1, 2]
 fibonacci(-1); // should return []

*/

function fibonacci(n) {
    var result      = [],
        fib         = function (n) {
            if (n <= 1) return n;

            return fibonacci.memo[n] = fibonacci.memo[n] || (
                (fibonacci.memo[n - 1] || fib(n - 1)) +
                (fibonacci.memo[n - 2] || fib(n - 2))
            );
        },
        getSequence = function (n) {
            var sequence = [];

            for (var key = 0; key <= n; key += 1) {
                sequence.push(fibonacci.memo[key]);
            }

            return sequence;
        };

    /* memoization */
    fibonacci.memo = fibonacci.memo || {0: 0, 1: 1};

    if (!arguments.length) {
        throw new Error('Invalid input range!');
    }

    if (n > 0) {
        fib(n);
        result = getSequence(n - 1);
    }

    return result;
}

function fibonacci_best(n) {
    if (n <= 0) return [];
    if (n == 1) return [0];
    if (n == 2) return [0, 1];

    var res = fibonacci_best(n - 1);

    res.push(res[res.length - 1] + res[res.length - 2]);

    return res;
}

console.log(fibonacci(-1));
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));

console.log(fibonacci_best(-1));
console.log(fibonacci_best(0));
console.log(fibonacci_best(1));
console.log(fibonacci_best(2));
console.log(fibonacci_best(3));
console.log(fibonacci_best(4));