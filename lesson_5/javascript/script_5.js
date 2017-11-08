/**
 * Created by Fomichev Yuri on 05.06.2017
 * Contact me at : toki.stamp@gmail.com
 */
'use strict';

/* Objects */

var tasks = {
    'Anna': 20,
    'Sergey': 30,
    'Elena': 10,
    'Boris': 'Dumb',
    'Dmitriy': 40
};

function isEmpty(object) {
    for (var key in object) {
        if (key) return false;
    }
    return true;
}

function getGreatest(objectIn) {
    var greatestKey,
        greatestValue = 0,
        objectOut = {},
        key,
        value;

    for (key in objectIn) {
        value = objectIn[key];
        if (isNumber(value) && (value > greatestValue)) {
            greatestKey = key;
            greatestValue = value;
        }
    }
    /* dynamically generated object { key: value } entries */
    objectOut[greatestKey] = greatestValue;
    return objectOut;
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function getMultiplied(object) {
    var key,
        value;

    for (key in object) {
        value = object[key];
        if (isNumber(value)) {
            value *= 2;
        }
        object[key] = value;
    }
    return object;
}

console.log(tasks);
console.log(getGreatest(tasks));
console.log(getMultiplied(tasks));