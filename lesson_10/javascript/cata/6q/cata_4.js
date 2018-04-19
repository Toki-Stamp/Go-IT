/**
 * Created by Fomichev Yuri on 18.03.2018
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* http://www.codewars.com/kata/count-characters-in-your-string */

/* Count characters in your string */

/*
 The main idea is to count all the occuring
 characters(UTF-8) in string.
 If you have string like this aba then
 the result should be { 'a': 2, 'b': 1 }

 What if the string is empty? Then the result
 should be empty object literal { }

*/

function count(string) {
    var result = {},
        i, size, char, array;

    if (string && string.length) {
        for (i = 0, array = string.split(''), size = array.length; i < size, char = array[i]; i += 1) {
            result[char] = ++result[char] || 1;
        }
    }

    return result;
}

function count_best(string) {
    var count = {};

    string.split('').forEach(function (s) {
        count[s] ? count[s]++ : count[s] = 1;
    });

    return count;
}

console.log(count('aba'));
console.log(count(''));
console.log(count_best('aba'));
console.log(count_best(''));