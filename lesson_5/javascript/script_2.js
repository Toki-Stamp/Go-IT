/**
 * Created by Fomichev Yuri on 05.06.2017
 * Contact me at : toki.stamp@gmail.com
 */
'use strict';

/* Objects */

var obj1 = {
        name: 'Sergey',
        surname: 'Petrov',
        age: 30
    },
    obj2 = {
        color: 'Red',
        size: 'Big',
        x: 30,
        y: 10
    },
    obj3 = {},
    array = [obj1, obj2, obj3, {}, obj1, obj2];

function printProperties(obj) {
    for (var item in obj) {
        console.log(item + ": " + obj[item]);
    }
}

function isEmpty(obj) {
    for (var property in obj) {
        // if (property) return false;
        return false;
    }
    return true;
}

// for (var i = 0; i < array.length; i++) {
//     if (isEmpty(array[i])) {
//         console.log('Empty object!');
//     } else {
//         printProperties(array[i]);
//     }
//     console.log();
// }
for (var i = 0; i < array.length; i++) {
    console.log(i + ' ' + isEmpty(array[i]));
}