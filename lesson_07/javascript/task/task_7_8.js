/**
 * Created by Fomichev Yuri on 12.03.2018
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* Название проблемы */
/* Описание */

function addf(a) {
    return function (b) {
        return a + b;
    }
}

console.log(addf(2)(5));