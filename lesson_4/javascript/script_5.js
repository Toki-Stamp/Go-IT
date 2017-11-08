/**
 * Created by Fomichev Yuri on 05.06.2017
 * Contact me at : toki.stamp@gmail.com
 */
'use strict';

/* Capital letter */

function capitalLetter(word) {
    return word ? word[0].toUpperCase() + word.substring(1) : '';
}

// var word = (prompt('Enter word:'));
console.log(capitalLetter('asshole'));