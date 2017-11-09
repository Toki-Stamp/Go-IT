/**
 * Created by Fomichev Yuri on 07.11.2017
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* Массив, очищенный от анаграмм */

(function main() {
    var array = ['возов', 'киборг', 'корсет', 'ЗОВ', 'ГРОБИК', 'костер', 'СЕКТОР'],
        result = [];

    array.forEach(function (item) {
        result.push(uniqueCharsObject(item));
    });
    result.forEach(function (item, index) {
        var key, value;
        console.log('iteration: ' + index, ' object: ', item, ' length: ' + Object.keys(item).length);
        for (key in item) {
            if (item.hasOwnProperty(key)) {
                value = item[key];
                console.log(key + " = " + value);
            }
        }
    });
    // [{a: 1, b: 2}, {c: 3, d: 4}].sort(byOccurrences);
    //
    // function byOccurrences(a, b) {
    //     var aKey = Object.keys(a)[0],
    //         aValue = a[aKey],
    //         bKey = Object.keys(b)[0],
    //         bValue = b[bKey];
    //     // var result = 1;
    //     console.log(aKey, ': ', aValue);
    //     console.log(bKey, ': ', bValue);
    //     // return result;
    // }

    /**
     * Разбивает слово word в массив букв
     * @param {String} word - слово для разбиения
     * @returns {Array} - массив букв
     */
    function chars(word) {
        return word.split('');
    }

    /**
     * Создаёт объект уникальных букв {key: value} из входящего слова word, где
     * key - уникальная буква, value - количество её повторений в исходном слове
     * @param {String} word - входящее слово для поиска уникальных букв
     * @returns {Object} - объект {key: value} уникальных букв на количесто её повторений
     */
    function uniqueCharsObject(word) {
        var unique = {};
        chars(word).forEach(function (char) {
            char = char.toLowerCase();
            unique[char] = (char in unique) ? ++unique[char] : 1;
        });
        return unique;
    }

    // console.log(' Входной массив:', array);
    // console.log('Итоговый массив:', result);
})();