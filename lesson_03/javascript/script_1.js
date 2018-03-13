/**
 * Created by TS on 31.05.2017.
 */
'use strict';

var value,
    message = ['Please, enter an integer number bigger than 100:',
        'Excellent! You entered: ', 'Breaking the input!'],
    out;

while (true) {
    value = parseInt(prompt(message[0]));
    if (value > 100) {
        out = message[1] + value;
        break;
    } else if (!value) {
        out = message[2];
        break;
    }
}
alert(out);