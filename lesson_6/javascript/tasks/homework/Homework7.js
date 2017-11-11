/**
 * Created by Fomichev Yuri on 07.11.2017
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* Массив, очищенный от анаграмм */

(function main() {
    var array = ['воз', 'киборг', 'корсет', 'ЗОВ', 'ГРОБИК', 'костер', 'СЕКТОР'],
        sortedArray = [],
        cleanArray = [];

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
    cleanArray = getCleanArray(sortedArray);
    cleanArray.forEach(function (item, index) {
        console.log('index', index, 'item', item);
    });

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
        var objectValuesArray = [],
            key,
            pair;
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

    /**
     * Сравнивает поэлементно каждую пару {key: value} first и second на равенство
     *
     * @param {Object} first - объект UniqueCharsObject уникальных букв
     * @param {Object} second - объект UniqueCharsObject уникальных букв
     * @returns {Boolean} - эквивалентность всех элементов
     */
    function compareCharsObjects(first, second) {
        var i,
            size = first.length,
            pairFirst,
            pairSecond,
            matches;
        for (i = 0, matches = 0; i < size; i++) {
            pairFirst = first[i];
            pairSecond = second[i];
            if ((getObjectValue(pairFirst) === getObjectValue(pairSecond)) &&
                (getObjectKey(pairFirst) === getObjectKey(pairSecond))) {
                matches++;
            }
        }
        return (matches === size);

    }

    function getCleanArray(array) {
        var cleanArray = (array) ? array.slice(0) : [], // clone
            current,
            start = 0,
            stop = cleanArray.length - 1,
            first,
            second;
        if (stop > 1) {
            while (start < stop) {
                for (current = start + 1, first = cleanArray[start]; current <= stop; current++) {
                    second = cleanArray[current];
                    if (first && second) {
                        if (first.length && second.length) {
                            if (first.length === second.length) {
                                if (compareCharsObjects(first, second)) {
                                    cleanArray.splice(current, 1);
                                    stop--;
                                    current--;
                                }
                            }
                        }
                    }
                }
                start++;
            }
            return cleanArray;
        } else {
            return array;
        }
    }
})();