/**
 * Created by Fomichev Yuri on 13.03.2018
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* Задание 2 (Calculator) */

/*
 Напишите конструктор Calculator, который создаёт расширяемые объекты-калькуляторы.

 Первый шаг задачи: вызов calculate(str) принимает строку,
 например «1 + 2», с жёстко заданным форматом «ЧИСЛО операция ЧИСЛО»
 (по одному пробелу вокруг операции), и возвращает результат.
 Понимает плюс + и минус -.

 Пример использования:
 var calc = new Calculator;
 console.log( calc.calculate('3 + 7') ); // 10

 Второй шаг — добавить калькулятору метод addMethod(name, func),
 который учит калькулятор новой операции.
 Он получает имя операции name и функцию от двух аргументов func(a,b),
 которая должна её реализовывать.

 Например, добавим операции умножить, поделить и возвести в степень:
 var powerCalc = new Calculator;
 powerCalc.addMethod('*', function(a, b) {
    return a * b;
 });
 powerCalc.addMethod('/', function(a, b) {
    return a / b;
 });
 powerCalc.addMethod('**', function(a, b) {
    return Math.pow(a, b);
 });

 var result = powerCalc.calculate('2 ** 3');

 console.log( result ); // 8
*/

function Calculator() {
    var
        query = {},
        init  = function (input) {
            var array;

            if (input) {
                if (query.operands) {
                    delete query.operands;
                }

                if (query.operation) {
                    delete query.operation;
                }

                array = input.split(' ');

                query.operands = [];
                query.operands.push(parseInt(array[0], 10));
                query.operands.push(parseInt(array[2], 10));

                query.operation = array[1];
            }
        };

    this.calculate = function (input) {
        init(input);

        if (query.operation in Calculator.methods) {
            console.log(
                input,
                '=',
                Calculator.methods[query.operation].apply(query, query.operands)
            );
        } else {
            console.log(
                'Error: Can not calculate expression "' + input + '".',
                'Operation "' + query.operation + '" not found!'
            );
        }

    };

    /* --- Static --- */
    Calculator.methods = Calculator.methods || {};
    if (!Calculator.addMethod) {
        Calculator.addMethod = function (name, func) {
            if (name && func && typeof func === 'function') {
                if (!this.methods[name]) {
                    this.methods[name] = func;
                    console.log('Operation "' + name + '" successfully added!');
                } else {
                    console.log('Error: Operation "' + name + '" already defined! Therefore can not be added twice!');
                }
            }
        };
        Calculator.addMethod('+', function (a, b) {
            return a + b;
        });
        Calculator.addMethod('-', function (a, b) {
            return a - b;
        });
    }
    if (!Calculator.showMethods) {
        Calculator.showMethods = function () {
            var name;

            for (name in this.methods) {
                if (this.methods.hasOwnProperty(name)) {
                    console.log(name, this.methods[name]);
                }
            }
        };
    }
}

var calc = new Calculator();

Calculator.addMethod('+', function (a, b) {
    return a + b;
});
calc.calculate('4 + 2');
calc.calculate('7 - 3');
calc.calculate('7 * 3');
Calculator.addMethod('*', function (a, b) {
    return a * b;
});
calc.calculate('7 * 3');
calc.calculate('18 / 3');
Calculator.addMethod('/', function (a, b) {
    return a / b;
});
calc.calculate('18 / 3');
calc.calculate('3 ** 2');
Calculator.addMethod('**', function (a, b) {
    return Math.pow(a, b);
});
calc.calculate('3 ** 2');

var calc2 = new Calculator();

calc2.calculate('7 -- 2');
calc2.calculate('7 - 2');