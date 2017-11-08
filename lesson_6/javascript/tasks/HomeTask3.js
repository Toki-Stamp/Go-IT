/**
 * Created by Fomichev Yuri on 07.11.2017
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* Сортировка элементов массива в случайном порядке */

var array = [1, 2, 3, 4, 5];

function randomSort() {
    return 0.5 - Math.random();
}

console.log(array.sort(randomSort));