/**
 * Created by Fomichev Yuri on 05.06.2017
 * Contact me at : toki.stamp@gmail.com
 */
'use strict';

/* String length limiter */

function limitStringLength(str, length) {
    return str.length <= length ? str : str.substr(0, length - 3) + '...';
}

var text = [
    'This is very long string',
    'This string is not',
    'But this string is very long again'
],
    targetLength = 20;

/* Tests */
for (var i = 0, string; i < text.length; i++) {
    console.log('Original: "' + text[i] + '"' + ' length is ' + text[i].length);
    string = limitStringLength(text[i], targetLength);
    console.log(' Limited: "' + string + '"' + ' length is ' + string.length);
}
