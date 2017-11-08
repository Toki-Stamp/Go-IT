/**
 * Created by Fomichev Yuri on 07.11.2017
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* Сортировка массива объектов по полю age */

var john = {name: 'John', age: 23},
    anna = {name: 'Anna', age: 18},
    bill = {name: 'Bill', age: 11},
    people = [john, anna, bill];

function ageSort(a, b) {
    return a.age - b.age;
}

console.log(people);

console.log(people.sort(ageSort).map(function (item) {
    return item.name;
}));