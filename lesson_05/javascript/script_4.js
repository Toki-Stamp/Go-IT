/**
 * Created by Fomichev Yuri on 04.09.2017
 * Contact me at : toki.stamp@gmail.com
 */
'use strict';

/* Arrays */

function getArrayLastElement(targetArray) {
    return targetArray[targetArray.length - 1];
}

function insertArrayLastElement(targetArray, lastElement) {
    return targetArray.push(lastElement);
}

function replaceArrayLastElement(targetArray, newElement) {
    return targetArray[targetArray.length - 1] = newElement;
}

function replaceArrayPenultimateElement(targetArray, newElement) {
    /* Предпоследний */
    return targetArray[targetArray.length - 2] = newElement;
}

function removeArrayFirstElement(targetArray) {
    targetArray.shift();
}

function getRandomElementFromArray(targetArray) {
    var min = 0,
        max = targetArray.length - 1,
        randomElement = min + Math.floor(Math.random() * (max + 1 - min));
    return targetArray[randomElement];
}

function findElementIndexFromArray(targetArray, targetElement) {
    var i = 0;
    while (i < targetArray.length) {
        if (targetArray[i] === targetElement) {
            /* found */
            return i;
        }
        i++;
    }
    /* not found */
    return -1;
}

function filterArray(targetArray, leftBound, rightBound) {
    var resultArray, i, j;
    for (resultArray = [], i = 0, j = 0; i < targetArray.length - 1; i++) {
        if (targetArray[i] >= leftBound && targetArray[i] <= rightBound) {
            resultArray[j++] = targetArray[i];
        }
    }
    return resultArray;
}

var fruits = ['apple', 'orange'];

console.log(fruits);
console.log('Adding new element "kiwi" to the end of array');
insertArrayLastElement(fruits, 'kiwi');
console.log(fruits);
console.log('Replacing last element "' + getArrayLastElement(fruits) + '" by the new one "pear"');
replaceArrayLastElement(fruits, 'pear');
console.log(fruits);
console.log('Removing first element of array');
removeArrayFirstElement(fruits);
console.log(fruits);
console.log('Adding two new element "apricot", "peach" to the beginning of array');
fruits.unshift('apricot', 'peach');
console.log(fruits);
console.log('Replacing penultimate element by the new one "banana"');
replaceArrayPenultimateElement(fruits, 'banana');
console.log(fruits);
console.log(getRandomElementFromArray(fruits));
console.log(getRandomElementFromArray(fruits));
console.log(getRandomElementFromArray(fruits));
console.log(getRandomElementFromArray(fruits));
console.log(getRandomElementFromArray(fruits));
console.log(getRandomElementFromArray(fruits));
console.log(getRandomElementFromArray(fruits));
console.log(fruits);
var randomElement = getRandomElementFromArray(fruits);
console.log('Getting element index of random element "' + randomElement + ' from array');
console.log(findElementIndexFromArray(fruits, randomElement));
randomElement = getRandomElementFromArray(fruits);
console.log('Getting element index of random element "' + randomElement + ' from array');
console.log(findElementIndexFromArray(fruits, randomElement));
randomElement = getRandomElementFromArray(fruits);
console.log('Getting element index of random element "' + randomElement + ' from array');
console.log(findElementIndexFromArray(fruits, randomElement));
randomElement = getRandomElementFromArray(fruits);
console.log('Getting element index of random element "' + randomElement + ' from array');
console.log(findElementIndexFromArray(fruits, randomElement));
randomElement = getRandomElementFromArray(fruits);
console.log('Getting element index of random element "' + randomElement + ' from array');
console.log(findElementIndexFromArray(fruits, randomElement));
console.log('Getting element index of random element from array which is not exists');
console.log(findElementIndexFromArray(fruits, "something"));

var targetArray = [5, 7, 4, 8, 3, 0],
    resultArray,
    leftBound = 3,
    rightBound = 5;
console.log('Getting elements from target array [ ' + targetArray +
    ' ] satisfying the inequality ' + leftBound +
    ' <= a[i] <= ' + rightBound);
resultArray = filterArray(targetArray, leftBound, rightBound);
console.log('Target array [ ' + targetArray + ' ]');
console.log('Result array [ ' + resultArray + ' ]');