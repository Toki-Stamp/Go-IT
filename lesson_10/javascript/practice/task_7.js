/**
 * Created by Fomichev Yuri on 18.03.2018
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* Задание 7 */

/*
 Write a function suffle(arr) to shuffle an array.

*/

function shuffleArray(array) {
    return array.sort(function () {
        return (Math.random() - .5);
    })
}

function shuffleArrayBest(array) {
    var last = array.length - 1,
        currentIndex, randomIndex, temp;

    for (currentIndex = last; currentIndex > 0; currentIndex -= 1) {
        randomIndex         = Math.floor(Math.random() * (currentIndex + 1));
        temp                = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex]  = temp;
    }

    return array;
}

console.log(shuffleArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(shuffleArrayBest([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));