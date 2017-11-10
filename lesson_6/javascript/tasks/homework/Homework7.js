/**
 * Created by Fomichev Yuri on 07.11.2017
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* Массив, очищенный от анаграмм */

(function main() {
    var array = ['возов', 'кибирг', 'корсет', 'ЗОВ', 'ГРОБОГ', 'костер', 'СЕКТОР'],
        sortedArray = [];

    // array.forEach(function (item) {
    //     sortedArray.push(getUniqueCharsObject(item));
    // });
    // var key, value;
    // for (key in item) {
    //     if (item.hasOwnProperty(key)) {
    //         value = item[key];
    //         console.log(key + " = " + value);
    //     }
    // }
    // sortedArray.sort(byOccurrences);
    // console.log(' Входной массив:', array);
    // console.log('Итоговый массив:', sortedArray);
    // console.log(getSortedArray({ф: 1, в: 1, н: 3, у: 4, р: 2, г: 2, ь: 4}));
    getObjectValuesArray({ф: 1, в: 1, н: 3, у: 4, р: 2, г: 2, ь: 4});
    // result.forEach(function (item, index) {
    //     var key, value;
    //     console.log('iteration: ' + index, ' object: ', item, ' length: ' + Object.keys(item).length);
    //     for (key in item) {
    //         if (item.hasOwnProperty(key)) {
    //             value = item[key];
    //             console.log(key + " = " + value);
    //         }
    //     }
    // });
    // [{a: 1, b: 2}, {c: 3, d: 4}].sort(byOccurrences);

    function getObjectValuesArray(charsObject) {
        var objectValuesArray = [];
        for (var key in charsObject) {
            if (charsObject.hasOwnProperty(key)) {
                objectValuesArray.push(charsObject[key]);
            }
        }
        console.log(charsObject);
        console.log(Object.keys(charsObject));
        console.log(objectValuesArray);
        objectValuesArray.sort(function (a, b) {
            return b - a;
        });
        console.log(objectValuesArray);

        // return objectValuesArray;
    }

    function byOccurrences(a, b) {
        var aKey = Object.keys(a)[0],
            aValue = a[aKey],
            bKey = Object.keys(b)[0],
            bValue = b[bKey];
        if (aValue > bValue) return -1;
        if (aValue < bValue) return 1;
        return 0;
    }

    /**
     * Разбивает слово word в массив букв
     * @param {String} word - слово для разбиения
     * @returns {Array} - массив букв
     */
    function getCharsArray(word) {
        return word.split('');
    }

    /**
     * Создаёт объект уникальных букв {key: value} из входящего слова word, где
     * key - уникальная буква, value - количество её повторений в исходном слове
     * @param {String} word - входящее слово для поиска уникальных букв
     * @returns {Object} - объект {key: value} уникальных букв на количесто её повторений
     */
    function getUniqueCharsObject(word) {
        var unique = {};
        getCharsArray(word).forEach(function (char) {
            char = char.toLowerCase();
            unique[char] = (char in unique) ? ++unique[char] : 1;
        });
        return unique;
    }

    /**
     *
     * @param {Object} charsObject
     * @returns {Array} - сортированный массив
     */
    function getSortedArray(charsObject) {

        // for (key in charsObject) {
        //     if (charsObject.hasOwnProperty(key)) {
        //         if (max < charsObject[key]) {
        //             max = charsObject[key];
        //         }
        //     }
        // }

        var currentKey,
            currentValue,
            maxKey,
            maxValue,
            maxIndex = 0,
            keysArray = Object.keys(charsObject),
            outputArray = [],
            pair = {},
            property,
            current,
            left = 0,
            right = keysArray.length - 1;
        console.log(charsObject);
        // console.log(keysArray);
        while (left <= right) {
            console.log('iteration:', left + 1);
            for (current = left, maxKey = keysArray[current], maxValue = charsObject[maxKey], maxIndex = current;
                 current <= right;
                 current++) {
                currentKey = keysArray[current];
                currentValue = charsObject[currentKey];
                if (charsObject.hasOwnProperty(currentKey)) {
                    if (currentValue > maxValue) {
                        maxKey = currentKey;
                        maxValue = currentValue;
                        maxIndex = current;
                    }
                }
                // console.log('key:', currentKey, 'value:', currentValue, 'left:', left, 'current:', current, 'right:', right);
            }
            pair[maxKey] = maxValue;
            keysArray.splice(maxIndex, 1);
            console.log('max:', pair, 'max-index', maxIndex);
            console.log(keysArray);
            // outputArray.push(pair);
            /* Clear Object */
            for (property in pair) delete pair[property];
            left += 1;
        }
        // outputArray.push(charsObject[keysArray[right - 1]]);
        // sortedArray.push(charsObject[max]);
        // return sortedUniqueCharsArray;
        // console.log(sortedArray);
        // return outputArray;
    }


})();