/**
 * Created by Fomichev Yuri on 18.03.2018
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* Задание 5 */

/*
 Write a JavaScript function that accepts
 a string as a parameter and find
 the longest word within the string. Go to the editor

 Example string: Web Development Tutorial
 Expected Output: Development

*/

function longestWord(string) {
    return string.split(' ').reduce(function (prev, cur) {
        return prev.length > cur.length ? prev : cur;
    })
}

console.log(longestWord('Web Development Tutorial'));