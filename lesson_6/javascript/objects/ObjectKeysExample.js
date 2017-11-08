/**
 * Created by Fomichev Yuri on 03.11.2017
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* Object.keys(object) method example */

var object = {
        key1: 'value1',
        key2: 'value2',
        key3: 'value3'
    },
    keys = Object.keys(object);
console.log(keys);
for (var i = 0; i < keys.length; i++) {
    console.log('Key (' + keys[i] + ') : Value (' + object[keys[i]] + ')');
}