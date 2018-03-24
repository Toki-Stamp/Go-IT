/**
 * Created by Fomichev Yuri on 18.03.2018
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* http://www.codewars.com/kata/case-swapping */

/* Case swapping */

/*
 Given a string, swap the case for each of the letters.

 e.g. CodEwArs --> cODeWaRS

 Examples
 swap ""         `shouldBe` ""
 swap "CodeWars" `shouldBe` "cODEwARS"
 swap "abc"      `shouldBe` "ABC"
 swap "ABC"      `shouldBe` "abc"
 swap "123235"   `shouldBe` "123235"

*/

function swap(str) {
    var result  = '',
        i, size = str.length;

    for (i = 0; i < size; i += 1) {
        if (str.charAt(i) === str.charAt(i).toLowerCase()) {
            result += str.charAt(i).toUpperCase();
        } else {
            result += str.charAt(i).toLowerCase();
        }
    }

    return result;
}

function swap_v2(str) {
    return str.split('').map(function (char) {
        return char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase();
    }).join('');
}

var text = 'So, today we have REALLY good day';

console.log(text, '===>', swap(text));
console.log(text, '===>', swap_v2(text));