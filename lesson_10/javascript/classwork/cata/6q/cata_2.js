/**
 * Created by Fomichev Yuri on 18.03.2018
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* http://www.codewars.com/kata/detect-pangram */

/* Detect Pangram */

/*
 A pangram is a sentence that contains every single letter
 of the alphabet at least once.
 For example, the sentence
 "The quick brown fox jumps over the lazy dog"
 is a pangram, because it uses the letters A-Z
 at least once (case is irrelevant).

 Given a string, detect whether or not
 it is a pangram. Return True if it is,
 False if not. Ignore numbers and punctuation.

*/

function isPangram(string) {
    var siftString          = function (string) {
            /* ignore everything except a-zA-Z */
            /* transform to lower case */
            return string.replace(/[^a-zA-Z]/g, '').toLowerCase();
        },
        arrayToObject       = function (array) {
            var result = {},
                i, size, char;

            for (i = 0, size = array.length; i < size, char = array[i]; i += 1) {
                result[char] = ++result[char] || 1;
            }

            return result;
        },
        objectToSortedArray = function (object) {
            return Object.keys(object).sort();
        },
        isPangram           = function (string) {
            return (objectToSortedArray(arrayToObject(siftString(string))).length === 26);
        };

    return isPangram(string);
}

function isPangram_best(string) {
    string = string.toLowerCase();

    return "abcdefghijklmnopqrstuvwxyz".split("").every(function (x) {
        return string.indexOf(x) !== -1;
    });
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'));
console.log(isPangram('abcdefghijklmnopqrstuvwxyz'));