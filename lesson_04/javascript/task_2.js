/**
 * Created by Fomichev Yuri on 05.06.2017
 * Contact me at : toki.stamp@gmail.com
 */
'use strict';

/* Spam check */

var text = [
        'get new Sex videos',
        '[SPAM] How to earn fast Money?',
        'New PSD template',
        'finger in the seX and sPAm on face for MonEy'
    ],
    target = [
        'sex',
        'spam',
        'money'];

function checkForWord(str, word) {
    return str.toLowerCase().indexOf(word) !== -1;
}

/* Tests */
for (var i = 0; i < text.length; i++) {
    console.log(text[i]);
    for (var j = 0; j < target.length; j++) {
        console.log('\t' + target[j] + ' is ' + (checkForWord(text[i], target[j]) ? 'found!' : 'not found'));
    }
}