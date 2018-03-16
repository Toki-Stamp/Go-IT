/**
 * Created by Fomichev Yuri on 16.03.2018
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* Задание 4 (Object counter) */

/*
 Добавить в конструктор Article:
 •	Подсчёт общего количества созданных объектов.
 •	Запоминание даты последнего созданного объекта.
 •	Используйте для этого статические свойства.
 Пусть вызов Article.showStats() выводит то и другое.

 Использование:
    function Article() {
        this.created = new Date();
        // ... ваш код ...
    }

    new Article();
    new Article();

    Article.showStats(); // Всего: 2, Последняя: (дата)

    new Article();

    Article.showStats(); // Всего: 3, Последняя: (дата)
*/

function Article() {
    var date = (function (now) {
        var format  = function (value) {
                return (((value >= 0) && (value <= 9)) ? '0' : '') + value;
            },
            date    = now.toLocaleDateString('ru'),
            hours   = format(now.getHours()),
            minutes = format(now.getMinutes()),
            seconds = format(now.getSeconds());

        return date + ' [' + hours + ':' + minutes + ':' + seconds + ']'
    })(new Date());

    this.creationDate = date;

    Article.counter = ++Article.counter || 1;
    Article.last    = date;

    if (!Article.showStats) {
        Article.showStats = function () {
            console.log(
                'Instances counter: ' + Article.counter + '.',
                'Last created date: ' + Article.last
            );
        }
    }
}

var a1 = new Article();
var a2 = new Article();
Article.showStats();
var a3 = new Article();
Article.showStats();