/**
 * Created by Fomichev Yuri on 07.11.2017
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* Массив, очищенный от анаграмм */

var array = ['возов', 'киборг', 'корсет', 'ЗОВ', 'ГРОБИК', 'костер', 'СЕКТОР'];
var container = {};

function anagramClean(array) {
    array.forEach(function (item) {
        var words = {},
            letters = [];
        item = item.toLowerCase();
        container[item] = words;
        words.length = item.length;
        words.letters = letters;
        item.split('').forEach(function (item, index, array) {
            var letter = {};

            function countLetters(letter) {
                var result = {},
                    occurrences = 0,
                    pos = -1,
                    positions = [];
                while ((pos = array.join('').indexOf(letter, pos + 1)) >= 0) {
                    positions.push(pos);
                    occurrences++;
                }
                result.positions = positions;
                result.occurrences = occurrences;
                return result;
            }

            letters[item] = letter;
            letter.charCode = item.charCodeAt(0);
            letter.occurrences = countLetters(item).occurrences;
            letter.positions = countLetters(item).positions;
        });
        console.log(container);
    });
}

console.log(' Исходный массив:', array);
console.log('Очищенный массив:', anagramClean(array));