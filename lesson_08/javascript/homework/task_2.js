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
    var expression        = {},
        init              = function (input) {
            var array;

            if (input) {
                if (expression.operands) {
                    delete expression.operands;
                }

                if (expression.operation) {
                    delete expression.operation;
                }

                array = input.split(' ');

                expression.operands = [];
                expression.operands.push(parseInt(array[0], 10));
                expression.operands.push(parseInt(array[2], 10));

                expression.operation = array[1];
            }
        },
        addOperation      = function (key, fn) {
            if (key && fn && typeof fn === 'function') {
                if (this instanceof Calculator) {
                    Calculator.addOperation(key, fn);
                } else {
                    if (!Calculator.operations[key]) {
                        Calculator.operations[key] = fn;
                        console.log('Operation "' + key + '" successfully added!');
                    } else {
                        console.log('Error: Operation "' + key + '" already defined! Therefore can not be added twice!');
                    }
                }
            }
        },
        getOperationsList = function () {
            var operation;

            if (this instanceof Calculator) {
                Calculator.getOperationsList();
            } else {
                for (operation in Calculator.operations) {
                    if (Calculator.operations.hasOwnProperty(operation)) {
                        console.log(operation, Calculator.operations[operation]);
                    }
                }
            }
        };

    this.calculate         = function (input) {
        init(input);

        if (expression.operation in Calculator.operations) {
            console.log(
                input,
                '=',
                Calculator.operations[expression.operation].apply(expression, expression.operands)
            );
        } else {
            console.log(
                'Error: Can not calculate expression "' + input + '".',
                'Operation "' + expression.operation + '" not defined!'
            );
        }

    };
    this.addOperation      = addOperation;
    this.getOperationsList = getOperationsList;

    /* --- Static --- */
    if (!Calculator.operations) {
        Calculator.operations = {};
        if (!Calculator.addOperation) {
            Calculator.addOperation = addOperation;
            Calculator.addOperation('+', function (a, b) {
                return a + b;
            });
            Calculator.addOperation('-', function (a, b) {
                return a - b;
            });
        }
        if (!Calculator.getOperationsList) {
            Calculator.getOperationsList = getOperationsList;
        }
    }
}

var calc = new Calculator();

calc.addOperation('*', function (a, b) {
    return a * b;
});
calc.addOperation('/', function (a, b) {
    return a / b;
});

Calculator.addOperation('^', function (a, b) {
    return Math.pow(a, b);
});

calc.calculate('4 + 2');
calc.calculate('7 - 3');
calc.calculate('7 * 3');
calc.calculate('18 / 3');
calc.calculate('5 ^ 3');