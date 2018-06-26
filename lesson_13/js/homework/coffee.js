/**
 * Created by Fomichev Yuri on 11.06.2018
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* http://learn.javascript.ru/task/getter-power */
/* http://learn.javascript.ru/task/add-public-coffeemachine */
/* http://learn.javascript.ru/task/setter-onready */

function Machine(power) {
    let self = this;
    
    this._state = false;
    this._power = power;
    this.enable = function () {
        console.log('Enable Machine');
        this._state = true;
    };
    this.disable = function () {
        console.log('Disable Machine');
        this._state = false;
    }
}

function CoffeeMachine(power, capacity) {
    /*-----------------------------------------------------*/
    Machine.apply(this, arguments);
    /*-----------------------------------------------------*/
    const WATER_HEAT_CAPACITY = 4200;
    let waterAmount   = 0,
        onReady       = function () {
            console.info('Ваш кофе готов! Наслаждайтесь!')
        },
        inProcess     = false,
        timer         = null,
        parentDisable = this.disable;
    
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
        if (this._state) {
            inProcess = true;
            console.log('Запускаю приготовление кофе. Время приготовления, примерно ' + getBoilTime());
            timer = setTimeout(function () {
                inProcess = false;
                onReady();
            }, getBoilTime());
        } else {
            throw new Error('Ошибка! Кофе машину сперва следует включить!');
        }
    };
    
    this.isRunning = function () {
        return inProcess;
    };
    
    this.disable = function () {
        clearTimeout(timer);
        timer = null;
        parentDisable.call(this);
        console.log('Disable Coffeemachine');
    }
}

function Fridge(power) {
    Machine.apply(this, arguments);
    
    let food = [];
    
    this.checkBeforeAdd = function (newFood) {
        console.log('state', this._state);
        
        if (!this._state) {
            throw new Error('Ошибка! Холодильник выключен!');
        }
        
        console.log('max', power);
        console.log('available', power - (food.length * 100));
        console.log('to add', (newFood.length * 100), newFood);
        
        if ((power / 100) >= (food.length + newFood.length)) {
            console.log('Добавить можно...');
        } else {
            throw new Error('Невозможно добавить, нет места!');
        }
    };
    
    this.addFood = function (...newFood) {
        this.checkBeforeAdd(newFood);
        console.log('Добавляем в холодильник:', newFood);
        food = food.concat(newFood);
    };
    this.getFood = function () {
        //возвращаем копию массива
        return food.slice(0);
    }
}

// let cm = new CoffeeMachine(100000, 500);
// cm.setWaterAmount(100);
// cm.enable();
// cm.run();
// cm.disable();
let fridge = new Fridge(500);

console.log('Продукты в холодильнике:', fridge.getFood());
fridge.enable();
fridge.addFood('колбаса', 'молоко');
console.log('Продукты в холодильнике:', fridge.getFood());
fridge.addFood('сыр', 'напиток', 'картошка');
console.log('Продукты в холодильнике:', fridge.getFood());
fridge.addFood('борщ');
console.log('Продукты в холодильнике:', fridge.getFood());