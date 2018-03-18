/**
 * Created by Fomichev Yuri on 17.03.2018
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* Пример использования шаблона DECORATOR */

function fn1(text) {
    console.log('Working fn1. Text: ' + text);
    return 1;
}

function fn2(text) {
    console.log('Working fn2. Text: ' + text);
    return 2;
}

function decorator(fn) {
    return function () {
        console.log('Starting...');

        return fn.apply(this, arguments);
    }
}

fn1 = decorator(fn1);
fn2 = decorator(fn2);

console.log(fn1('text No.1'));
console.log(fn2('text No.2'));