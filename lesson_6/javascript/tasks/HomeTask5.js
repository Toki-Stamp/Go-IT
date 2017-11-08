/**
 * Created by Fomichev Yuri on 07.11.2017
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* Проверка на палиндром */

function isPalindrome(str) {
    str = str.toLowerCase().replace(/\s+/g, '');
    var middle = Math.floor(str.length / 2),
        left = str.slice(0, middle),
        right = str.slice(-middle).split('').reverse().join('');
    return left === right;
}

console.log('Anna', '=>', isPalindrome('Anna'));
console.log('Ротор', '=>', isPalindrome('Ротор'));
console.log('Вася', '=>', isPalindrome('Вася'));
console.log('А роза упала на лапу Азора', '=>', isPalindrome('А роза упала на лапу Азора'));
console.log('123321', '=>', isPalindrome('123321'));
console.log('123212', '=>', isPalindrome('123212'));