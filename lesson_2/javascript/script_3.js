/**
 * Created by TS on 31.05.2017.
 */
'use strict';
var input = prompt('Enter your login, please:'), password, out;
if (input === 'admin') {
    password = prompt('Enter your password, please:');
    if (password === 'pass') {
        out = 'Welcome home, dear Admin!';
    } else if (password === null) {
        out = 'Password input is canceled!';
    } else {
        out = 'Wrong password!'
    }
} else if (input === null) {
    out = 'Login input is canceled!';
} else {
    out = 'Access denied!';
}
alert(out);