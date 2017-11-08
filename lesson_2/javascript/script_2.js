/**
 * Created by TS on 31.05.2017.
 */
'use strict';
var number = +prompt('Enter any Integer number:'), out;
if (number > 0) {
    out = 1;
} else if (number < 0) {
    out = -1;
} else {
    out = 0;
}
alert('Answer is "' + out + '"');