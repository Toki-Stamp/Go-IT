/**
 * Created by TS on 31.05.2017.
 */
'use strict';

function min(a, b) {
    return 'Min is ' + ((a < b) ? parseInt(a) : parseInt(b));
}

console.log(min(prompt('Enter a:'), prompt('Enter b:')));