/**
 * Created by Fomichev Yuri on 12.03.2018
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* Can you keep a secret? */

/* http://www.codewars.com/kata/can-you-keep-a-secret/train/javascript */

function createSecretHolder(secret) {
    var secretHolder = {},
        locSecret    = secret;

    function getSecret() {
        return locSecret;
    }

    function setSecret(newSecret) {
        locSecret = newSecret;
    }

    secretHolder.getSecret = getSecret;
    secretHolder.setSecret = setSecret;

    return secretHolder;
}

function createSecretHolderBest(secret) {
    return {
        getSecret: function () {
            return secret;
        },

        setSecret: function (newSecret) {
            secret = newSecret;
        }
    }
}

var obj     = createSecretHolder(5);
var objBest = createSecretHolderBest(7);

console.log(obj.getSecret());
obj.setSecret(7);
console.log(obj.getSecret());
obj.setSecret(1);
console.log(obj.getSecret());
console.log('-------------------------');
console.log(objBest.getSecret());
objBest.setSecret(12);
console.log(objBest.getSecret());
objBest.setSecret(3);
console.log(objBest.getSecret());
