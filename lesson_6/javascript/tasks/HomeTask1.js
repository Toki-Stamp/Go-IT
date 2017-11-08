/**
 * Created by Fomichev Yuri on 07.11.2017
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* Удаляем класс если он есть */

var object = {
    className: 'open menu'
};

function removeClass(object, className) {
    var classes = object[Object.keys(object)].split(/\s+/);
    if (classes.indexOf(className) >= 0) {
        classes.splice(classes.indexOf(className), 1);
        object[Object.keys(object)] = classes.join(' ');
    }
}

removeClass(object, 'menu');
removeClass(object, 'open');
removeClass(object, 'open');
console.log(object.className);
