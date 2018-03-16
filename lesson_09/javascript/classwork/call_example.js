/**
 * Created by Fomichev Yuri on 16.03.2018
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* Применение call */

var array_1 = [1, 2, 3, 4, 5];
var array_2 = ['a', 'b', 'c', 'd', 'e'];

var string_1 = array_1.join(':');
var string_2 = array_1.join.call(array_2, ':');

console.log(array_1);
console.log(array_2);
console.log('array_1.join(":")', '=>', string_1);
console.log('array_1.join.call(array_2, ":")', '=>', string_2);