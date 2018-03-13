/**
 * Created by Fomichev Yuri on 05.06.2017
 * Contact me at : toki.stamp@gmail.com
 */
'use strict';

/* Objects */

var dept = {
    junior: 1000,
    middle: 2500,
    senior: 3500,
    lead: 5000
};

function isEmpty(obj) {
    for (var property in obj) {
        if (property) return false;
    }
    return true;
}

function countSalaries(dept) {
    var result = 0;
    if (!isEmpty(dept)) {
        for (var prop in dept) {
            result += dept[prop];
        }
    }
    return result;
}
console.log('Total dept salaries: ' + countSalaries(dept));