/**
 * Created by Fomichev Yuri on 03.06.2017
 * Contact me at : toki.stamp@gmail.com
 */

/* Kata 4: Convert boolean values to strings 'Yes' or 'No' */
/* Given: a boolean value
   Return: a 'Yes' string for true and a 'No' string for false */

function boolToWord(bool) {
    return bool ? 'Yes' : 'No';
}

var bool = prompt('Enter a boolean value:');
console.log(boolToWord(bool));
