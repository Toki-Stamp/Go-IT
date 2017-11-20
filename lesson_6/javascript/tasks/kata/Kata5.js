/**
 * Created by Fomichev Yuri on 13.11.2017
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* Take a Ten Minute Walk */
/* https://www.codewars.com/kata/take-a-ten-minute-walk/train/javascript */

/* Self-invoking function */
(function main() {
    /* valid */
    var test1 = ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'];
    /* invalid */
    var test2 = ['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'];
    /* invalid */
    var test3 = ['w'];
    /* invalid */
    var test4 = ['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's'];
    /* invalid */
    var test5 = [];
    /* valid */
    var test6 = ['n', 'n', 'n', 'n', 's', 'w', 'e', 'e', 'e', 'e'];
    /* valid */
    var test7 = ['n', 'n', 'n', 's', 's', 'w', 'e', 'e', 'e', 'e'];

    console.log('m', test1, getUniqueElements(test1), isValidWalk(test1));
    console.log('s', test1, getUniqueElements(test1), isValidWalk_super(test1));
    console.log('m', test2, getUniqueElements(test2), isValidWalk(test2));
    console.log('s', test2, getUniqueElements(test2), isValidWalk_super(test2));
    console.log('m', test3, getUniqueElements(test3), isValidWalk(test3));
    console.log('s', test3, getUniqueElements(test3), isValidWalk_super(test3));
    console.log('m', test4, getUniqueElements(test4), isValidWalk(test4));
    console.log('s', test4, getUniqueElements(test4), isValidWalk_super(test4));
    console.log('m', test5, getUniqueElements(test5), isValidWalk(test5));
    console.log('s', test5, getUniqueElements(test5), isValidWalk_super(test5));
    console.log('m', test6, getUniqueElements(test6), isValidWalk(test6));
    console.log('s', test6, getUniqueElements(test6), isValidWalk_super(test6));
    console.log('m', test7, getUniqueElements(test7), isValidWalk(test7));
    console.log('s', test7, getUniqueElements(test7), isValidWalk_super(test7));

    function getUniqueElements(array) {
        var uniqueElements = {};
        array.forEach(function (element) {
            uniqueElements[element] = (element in uniqueElements) ? ++uniqueElements[element] : 1;
        });
        return uniqueElements;
    }

    function isValidWalk(walk) {
        var directions = {},
            direction,
            length,
            steps      = [];
        if (walk.length !== 10) {
            return false;
        }
        walk.forEach(function (direction) {
            directions[direction] = (direction in directions) ? ++directions[direction] : 1;
        });
        length = Object.keys(directions).length;
        if (length % 2 !== 0) return false;
        for (direction in directions) {
            if (directions.hasOwnProperty(direction)) steps.push(directions[direction]);
        }
        if ((steps.length === 2) && (steps[0] === steps[1])) return true;
        return ((steps[0] === steps[1]) && (steps[2] === steps[3])) ||
            ((steps[0] === steps[2]) && (steps[1] === steps[3])) ||
            ((steps[0] === steps[3]) && (steps[1] === steps[2]));
    }

    function isValidWalk_super(walk) {
        var dx = 0,
            dy = 0,
            dt = walk.length;

        for (var i = 0; i < walk.length; i++) {
            switch (walk[i]) {
                case 'n':
                    dy--;
                    break;
                case 's':
                    dy++;
                    break;
                case 'w':
                    dx--;
                    break;
                case 'e':
                    dx++;
                    break;
            }
        }
        return dt === 10 && dx === 0 && dy === 0;
    }
})();