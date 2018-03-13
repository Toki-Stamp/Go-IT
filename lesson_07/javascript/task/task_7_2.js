/**
 * Created by Fomichev Yuri on 12.03.2018
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* Название проблемы */
/* Описание */

var value = 0;

function f() {
    if (1) {
        value = true;
    } else {
        var value = false;
    }

    console.log(value);
}

f();
console.log(value);