/**
 * Created by Fomichev Yuri on 03.11.2017
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* Добавляем новый класс если только его ещё нет */

var object = {
    className: 'open menu'
};

function addClass(object, className) {
    if (object && className) {
        var classes = object[Object.keys(object)[0]/* 'className' */].split(' ');
        if (classes.indexOf(className) < 0) {
            classes.push(className);
            object.className = classes.join(' ');
        }
    }
}

console.log(object.className);

addClass(object, 'new');
addClass(object, 'open');
addClass(object, 'me');

console.log(object.className);