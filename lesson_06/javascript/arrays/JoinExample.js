/**
 * Created by Fomichev Yuri on 10.09.2017
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* join() method example */

var names = ['Оля', 'Петя', 'Жорик', 'Борис', 'Диана', 'Вовчик', 'Елена'],
    string = names.join(','),
    str = 'Reverse this phrase';
console.log(string);
console.log(str + ' = ' + str.split('').reverse().join(''));