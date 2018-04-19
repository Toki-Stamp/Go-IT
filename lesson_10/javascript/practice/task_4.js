/**
 * Created by Fomichev Yuri on 18.03.2018
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* Задание 4 */

/*
 Write a JavaScript function that accepts
 a string as a parameter and converts
 the first letter of each word of the string
 in upper case. Go to the editor

 Example string: the quick brown fox
 Expected Output: The Quick Brown Fox

*/

function wordToCapitalLetter(string) {
    return string.split(' ').map(function (item) {
        return item.charAt(0).toUpperCase() + item.substring(1);
    }).join(' ');
}

console.log(wordToCapitalLetter('the quick brown fox'));