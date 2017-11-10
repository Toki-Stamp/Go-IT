/**
 * Created by Fomichev Yuri on 07.11.2017
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* Массив, очищенный от анаграмм */

(function main() {
    var array = ['воз', 'гогорог', 'корсет', 'ЗОВ', 'ГРОБОК', 'костер', 'СЕКТОР'],
        sortedArray = [];

    array.forEach(function (word) {
        sortedArray.push(getObjectPairsArray(getUniqueCharsObject(word)).sort(function (first, second) {
            /* В первую очередь сортировка по значению value */
            if (getObjectValue(first) > getObjectValue(second)) return -1;
            else if (getObjectValue(first) < getObjectValue(second)) return 1;
            /* Во вторую очередь в алфавитном порядке по ключу key */
            if (getObjectKey(first) > getObjectKey(second)) return 1;
            else if (getObjectKey(first) < getObjectKey(second)) return -1;
            return 0;
        }));
    });

    console.log(array);
    console.log('---------------------------');

    // sortedArray.forEach(function (item, index) {
    //     console.log(index, ':', item);
    // });

    /**
     * Получает значение value из входного объекта пары по ключу key
     *
     * @param {Object} object - объект пара {key: value}
     * @returns {Number} - количество повторений
     */
    function getObjectValue(object) {
        return object[getObjectKey(object)];
    }

    /**
     * Получает ключ key из входного объекта пары
     *
     * @param {Object} object - объект пара {key: value}
     * @returns {String} - ключ
     */
    function getObjectKey(object) {
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                return key;
            }
        }
    }

    /**
     * Преобразует объект уникальных букв в массив пар {key: value}, где
     * key - буква, value - количество её повторений
     *
     * @param {Object} charsObject - исходный объект
     * @returns {Array} - массив пар {key: value}
     */
    function getObjectPairsArray(charsObject) {
        var objectValuesArray = [], key, pair;
        for (key in charsObject) {
            if (charsObject.hasOwnProperty(key)) {
                pair = {};
                pair[key] = charsObject[key];
                objectValuesArray.push(pair);
            }
        }
        return objectValuesArray;
    }

    /**
     * Разбивает слово word в массив букв
     *
     * @param {String} word - слово для разбиения
     * @returns {Array} - массив букв
     */
    function getCharsArray(word) {
        return word.split('');
    }

    /**
     * Создаёт объект уникальных букв {key: value} из входящего слова word, где
     * key - уникальная буква, value - количество её повторений в исходном слове
     *
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

    // f([1, 2, 3, 4, 5, 6]);
    iterate(sortedArray);

    function iterate(array) {
        var current,
            left = 0,
            right = array.length - 1,
            first,
            second,
            out = [];
        while (left < right) {
            for (current = left + 1, first = array[left]; current <= right; current++) {
                second = array[current];
                if (first && second) {
                    if (first.length && second.length) {
                        if (first.length === second.length) {
                            compare(first, second);
                            console.log('---')
                        }
                    }
                }
            }
            console.log('---------------------------');
            left++;
        }

        function compare(first, second) {
            var i,
                size = first.length,
                pairFirst,
                pairSecond;
            console.log(first, first.length, 'and', second, second.length);
            for (i = 0; i < size; i++) {
                pairFirst = first[i];
                pairSecond = second[i];
                console.log('pair-first', pairFirst, 'pair-second', pairSecond);
                // if (getObjectValue(pairFirst) !== getObjectValue(pairSecond)) {
                //     console.log('break!');
                // } else if (getObjectKey(pairFirst) !== getObjectKey(pairSecond)) {
                //     console.log('break!');
                // } else {
                //     console.log('found equivalent!');
                // }
                if ((getObjectValue(pairFirst) === getObjectValue(pairSecond)) && (getObjectKey(pairFirst) === getObjectKey(pairSecond))) {
                    console.log('found-equivalent!');
                } else {
                    console.log('break!');
                }
            }
        }
    }
})();