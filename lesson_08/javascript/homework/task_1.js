/**
 * Created by Fomichev Yuri on 13.03.2018
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* Задание 1 (Chaining) */

/*
 Есть объект ladder
 var ladder = {
    step: 0,
    up: function() { // вверх по лестнице
        this.step++;
    },
    down: function() { // вниз по лестнице
        this.step--;
    },
    showStep: function() { // вывести текущую ступеньку
        alert( this.step );
    }
 };

 Сейчас, для последовательного вызова нескольких методов объекта,
 нужно делать так сделать так:

 ladder.up();
 ladder.up();
 ladder.down();
 ladder.showStep(); // 1

 Модифицируйте код методов объекта, чтобы вызовы можно было делать цепочкой:

 ladder.up().up().down().up().down().showStep(); // 1

 Такой подход называется «чейнинг» (chaining)
*/

var ladder = {
    step:     0,
    up:       function () { // вверх по лестнице
        this.step += 1;
        return this;
    },
    down:     function () { // вниз по лестнице
        this.step -= 1;
        return this;
    },
    showStep: function () { // вывести текущую ступеньку
        console.log(this.step);
    }
};

ladder.up().up().down().up().down().showStep();