/**
 * Created by Fomichev Yuri on 05.06.2017
 * Contact me at : toki.stamp@gmail.com
 */
'use strict';

/* Objects */

var user = {};
user.name = 'Sergey';
user.surename = 'Petrov';
console.log(user);
user.name = 'Andrey';
user.age = 30;
console.log(user);
delete user.name;
console.log(user);
