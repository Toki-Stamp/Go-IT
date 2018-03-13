/**
 * Created by Fomichev Yuri on 12.03.2018
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* Название проблемы */

/* Описание */

function indentityf(a) {
    return function () {
        return a;
    }
}

var idf = indentityf(7);
console.log(idf());