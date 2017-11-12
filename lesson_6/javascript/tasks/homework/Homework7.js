/**
 * Created by Fomichev Yuri on 07.11.2017
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* Массив, очищенный от анаграмм */

var array = ['воз', 'киборг', 'корсет', 'ЗОВ', 'ГРОБИК', 'костер', 'СЕКТОР'];

/* Self-invoking function */
(function main() {
    var plainWordObjectsArray,
        cleanWordObjectsArray,
        cleanMappedWordObjectArray;

    plainWordObjectsArray = getWordObjectsArray(array);
    cleanWordObjectsArray = getCleanWordObjectsArray(plainWordObjectsArray);
    cleanMappedWordObjectArray = getMappedWordObjectsArray(cleanWordObjectsArray);

    console.log(array);
    console.log(plainWordObjectsArray);
    console.log(cleanWordObjectsArray);
    console.log(cleanMappedWordObjectArray);

    /**
     * Создаёт объект word с несколькми полями, где
     * {String} source-word - исходное слов
     * {Object} chars-object - объект уникальных букв с количеством их повторений в слове
     * {Array} simple-chars-array - массив объектов пар буква на количество повторений
     * {Array} sorted-chars-array - отсортированный массив simple-chars-array
     *
     * @param {String} word - входящее слово
     * @return {Object} - объект слова
     */
    function getWordObject(word) {
        var wordObject = {};
        if (word) {
            wordObject['source-word'] = word;
            wordObject['chars-object'] = getUniqueCharsObject(word);
            wordObject['simple-chars-array'] = getObjectPairsArray(getUniqueCharsObject(word));
            wordObject['sorted-chars-array'] = getSortedObjectPairsArray(getObjectPairsArray(getUniqueCharsObject(word)));
        }
        return wordObject;
    }

    /**
     * Получает отсортированный миссив объектов {key: value}, где
     * сортировка идёт в первую очередь по значению value, после чего,
     * в случае равенства значений value, в алфавитном порядке по ключу key
     *
     * @param {Array} objectPairsArray - не сортированный массив пар {key: value}
     * @return {Array} - возвращает отсортированный массив
     */
    function getSortedObjectPairsArray(objectPairsArray) {
        var sortedObjectPairsArray = (objectPairsArray) ? objectPairsArray.slice() : []; // clone
        return sortedObjectPairsArray.sort(function (first, second) {
            if (getObjectValue(first) > getObjectValue(second)) {
                return -1;
            }
            else if (getObjectValue(first) < getObjectValue(second)) {
                return 1;
            }
            if (getObjectKey(first) > getObjectKey(second)) {
                return 1;
            }
            else if (getObjectKey(first) < getObjectKey(second)) {
                return -1;
            }
            return 0;
        });
    }

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
        var objectPairsArray = [],
            key,
            pair;
        for (key in charsObject) {
            if (charsObject.hasOwnProperty(key)) {
                pair = {};
                pair[key] = charsObject[key];
                objectPairsArray.push(pair);
            }
        }
        return objectPairsArray;

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
        var uniqueCharsObject = {};
        if (word && (typeof word === 'string')) {
            getCharsArray(word).forEach(function (char) {
                char = char.toLowerCase();
                uniqueCharsObject[char] = (char in uniqueCharsObject) ? ++uniqueCharsObject[char] : 1;
            });
        }
        return uniqueCharsObject;

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

    /**
     * Создаёт массив объектов слов из исходного массива
     *
     * @param {Array} array - входной массив слов {String}
     * @return {Array} - возвращает массив объектов слов
     */
    function getWordObjectsArray(array) {
        var wordObjectsArray = [];
        array.forEach(function (item) {
            wordObjectsArray.push(getWordObject(item));
        });
        return wordObjectsArray;
    }

    /**
     * Очишает массив объктов слов от анаграмм
     *
     * @param {Array} wordObjectsArray - входной массив
     * @return {Array} - очищенный от анаграмм массив
     */
    function getCleanWordObjectsArray(wordObjectsArray) {
        var cleanWordObjectsArray = (wordObjectsArray) ? wordObjectsArray.slice() : [], // clone
            current,
            pointer = 0,
            size = cleanWordObjectsArray.length - 1,
            first,
            second;
        if (size > 1) {
            while (pointer < size) {
                for (current = pointer + 1, first = cleanWordObjectsArray[pointer]['sorted-chars-array']; current <= size; current++) {
                    second = cleanWordObjectsArray[current]['sorted-chars-array'];
                    if (first && second) {
                        if (first.length && second.length) {
                            if (first.length === second.length) {
                                if (compareCharsObjects(first, second)) {
                                    cleanWordObjectsArray.splice(current, 1);
                                    size--;
                                    current--;
                                }
                            }
                        }
                    }
                }
                pointer++;
            }
            return cleanWordObjectsArray;
        } else {
            return wordObjectsArray;
        }
    }

    /**
     * Создаёт массив мапинг, возвращая из входного массива объектов слов массив исходных слов {String}
     *
     * @param {Array} wordObjectsArray - входной массив объектов слов
     * @return {Array} - массив исходных слов
     */
    function getMappedWordObjectsArray(wordObjectsArray) {
        return wordObjectsArray.map(function (item) {
            return item['source-word'];
        })
    }

})();