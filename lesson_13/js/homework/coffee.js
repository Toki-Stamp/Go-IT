/**
 * Created by Fomichev Yuri on 11.06.2018
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* http://learn.javascript.ru/task/getter-power */
/* http://learn.javascript.ru/task/add-public-coffeemachine */

/* http://learn.javascript.ru/task/setter-onready */

function CoffeeMachine(power, capacity) {
    let waterAmount = 0,
        onReady     = function () {
            console.info('Ваш кофе готов! Наслаждайтесь!')
        };
    const WATER_HEAT_CAPACITY = 4200;
    
    /*-----------------------------------------------------*/
    function getBoilTime() {
        return (waterAmount * WATER_HEAT_CAPACITY * 80) / power;
    }
    
    function checkWaterAmount(amount) {
        if (amount < 0) {
            throw new Error('Значение должно быть положительным');
        }
        if (amount > capacity) {
            throw new Error("Нельзя залить воды больше, чем " + capacity);
        }
    }
    
    /*-----------------------------------------------------*/
    
    this.setWaterAmount = function (amount) {
        checkWaterAmount(amount);
        console.log('Заливаем в чайник ' + amount + ' воды');
        waterAmount = amount;
    };
    
    this.getWaterAmount = function () {
        return "Объём воды в чайнике " + waterAmount;
    };
    
    this.getPower = function () {
        return "Мощность " + power;
    };
    
    this.addWater = function (amount) {
        checkWaterAmount(waterAmount + amount);
        console.log('Добавляем ' + amount + ' воды');
        waterAmount += amount;
    };
    
    this.setOnReady = function (fn) {
        if (fn && (typeof fn === 'function')) {
            onReady = fn;
        }
    };
    
    this.run = function () {
        console.log('Запускаю приготовление кофе. Время приготовления, примерно ' + getBoilTime());
        setTimeout(function () {
            onReady();
        }, getBoilTime());
    };
}

let cm = new CoffeeMachine(100000, 500);

console.log(cm.getPower());
console.log(cm.getWaterAmount());
cm.setWaterAmount(200);
console.log(cm.getWaterAmount());
cm.addWater(100);
console.log(cm.getWaterAmount());
cm.addWater(200);
console.log(cm.getWaterAmount());
// cm.addWater(100); ошибка, нельзя налить воды больше объёма
// console.log(cm.getWaterAmount());
// cm.run();
cm.setOnReady(function () {
    console.log('Готов кофе: ' + cm.getWaterAmount() + 'мл');
});
cm.run();