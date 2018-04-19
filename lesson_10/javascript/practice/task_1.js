/**
 * Created by Fomichev Yuri on 18.03.2018
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* Задание 1 (Объект в массив) */

/*
 Есть объект из чисел, строк и прочих данных.
 Необходимо его превратить в массив
 состоящий только из чисел или строк.
 Написать метод extractNumber или extractString,
 который будет возвращать массив.
*/

var object = {
    person1Age:  20,
    person1Name: 'Ivanov',
    person2Age:  30,
    person2Name: 'Petrov',
    person3Age:  40,
    person3Name: 'Sidorov'
};

var ages  = [20, 30, 40];
var names = ['Ivanov', 'Petrov', 'Sidorov'];

var extractor = {
    extractNumber: function (obj) {
        var result = [];

        for (var key in obj) {
            if (typeof obj[key] === 'string') {
                result.push(obj[key]);
            }
        }

        return result;
    },
    extractString: function (obj) {
        var result = [];

        for (var key in obj) {
            if (typeof obj[key] === 'number') {
                result.push(obj[key]);
            }
        }

        return result;
    }
};

console.log(extractor.extractNumber(object));
console.log(extractor.extractString(object));