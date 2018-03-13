/**
 * Created by Fomichev Yuri on 13.03.2018
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* Калькулятор с 3-мя методами */

/* Описание */

function getCalculator() {
    return {
        operands: [],

        read: function () {
            var respond,
                counter = 1,
                msg     = counter + ': Введите число: ';

            while (true) {
                respond = parseInt(prompt(msg), 10);

                if (respond) {
                    this.operands.push(respond);
                    counter += 1;
                } else {
                    return false;
                }
            }
        },

        sum: function () {
            return this.operands[0] + this.operands[1];
        },

        mul: function () {
            return this.operands[0] * this.operands[1];
        }
    };
}

var calculator = getCalculator();

calculator.read();