/**
 * Created by Fomichev Yuri on 10.09.2017
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* split() method example */

var names = 'Оля, Петя, Жорик, Борис, Диана, Вовчик, Елена',
    array = names.split(', '),
    index = 1;
console.log(array.toString() + ' : ' + array.length);
console.log(array[index].split('').toString() + ' : ' + (array[index].split('')).length);