/**
 * Created by TS on 31.05.2017.
 */
'use strict';

/* Chess Board */

var height = parseInt(prompt('Enter height of board: ', '8')),      // Y - rows, up to down
    width = parseInt(prompt('Enter width of board: ', '8')),        // X - columns, leftBound to rightBound
    white = '_',
    black = '#';

function isOdd(number) {
    return (number) % 2;
}

for (var y = 0, str; y < height; y++) {
    str = '';
    for (var x = 0, element; x < width; x++) {
        if ((isOdd(y) && isOdd(x)) || ((!isOdd(y) && !isOdd(x)))) {
            element = black;
        } else {
            element = white;
        }
        str += element;
    }
    console.log(str);
}
