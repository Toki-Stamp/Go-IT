/**
 * Created by Fomichev Yuri on 10.09.2017
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* splice() method example */

var array = ['Оля', 'Петя', 'Жорик', 'Борис', 'Диана', 'Вовчик', 'Елена'],
    index = 2;
console.log(array);
console.log(array.splice(index, 1));
console.log(array);
array = ['Я', 'сейчас', 'изучаю', 'javascript'];
console.log(array);
var deleted = array.splice(0, 3, 'Мы', 'изучаем');
console.log('Deleted: ' + deleted);
console.log('Array: ' + array);
array.splice(2, 0, 'сложный', 'язык');
console.log('Array: ' + array);
