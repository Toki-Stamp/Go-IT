/**
 * Created by Fomichev Yuri on 07.11.2017
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* Массив, очищенный от анаграмм */

(function main() {
    var array = ['возов', 'киборг', 'корсет', 'ЗОВ', 'ГРОБИК', 'костер', 'СЕКТОР'];

    function anagramClean(array) {
        var container = {},
            hasNext = array.length,
            index = 0,
            item;
        while (hasNext) {
            item = array[index];
            console.log(index + ':' + item + ':' + splitToChars(item));

            index += 1;
            hasNext -= 1;
        }

        console.log(countChars('aloha'));

        function splitToChars(word) {
            return word.split('');
        }

        function countChars(word, char) {
            return splitToChars(word).reduce(function (occurrences, current) {
                if (current === char) occurrences += 1;
                return occurrences;
            }, 0);

        }

        return array;
    }

    console.log(' Исходный массив:', array);
    console.log('Очищенный массив:', anagramClean(array));
})();