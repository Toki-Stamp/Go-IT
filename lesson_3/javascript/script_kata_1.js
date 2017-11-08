/**
 * Created by Fomichev Yuri on 02.06.2017
 * Contact me at : toki.stamp@gmail.com
 */
'use strict';

/* Kata 1: Even or Odd */

function even_or_odd(number) {
    return (number % 2) ? 'Odd' : 'Even';
}
for (var i = 0; i < 21; i++) {
    console.log(i + ' is ' + even_or_odd(i));
}