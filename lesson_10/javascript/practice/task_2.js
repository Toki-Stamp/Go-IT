/**
 * Created by Fomichev Yuri on 18.03.2018
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* Задание 2 (Максимальное число в массиве) */

/*
 Необходимо написать функцию,
 которая будет принимать на вход массив чисел и
 возвращать самое большое.

 getMaxNumber([1,30,40,2,7]); // 40
 getMaxNumber([1,15,-20,2,-7]); // 15

*/

function getMaxNumber(array) {
    return array.reduce(function (prev, cur) {
        return (cur > prev) ? cur : prev;
    })
}

console.log(getMaxNumber([1, 30, 40, 2, 7])); // 40
console.log(getMaxNumber([1, 15, -20, 2, -7])); // 15
console.log(getMaxNumber([1, -15, -20, -2, -7])); // 1