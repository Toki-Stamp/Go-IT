/**
 * Created by Fomichev Yuri on 12.11.2017
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* Find Your Villain Name */
/* https://www.codewars.com/kata/find-your-villain-name/train/javascript */

/* Self-invoking function */
(function main() {

    /* (year, month (e.g. 0 - 11), date (i.e. day), hours, minutes, seconds, ms) */
    var date = new Date(1983, 4, 9);

    console.log(getVillainName(date));

    function getVillainName(birthday) {
        var firstName = {
                January:   'The Evil',
                February:  'The Vile',
                March:     'The Cruel',
                April:     'The Trashy',
                May:       'The Despicable',
                June:      'The Embarrassing',
                July:      'The Disreputable',
                August:    'The Atrocious',
                September: 'The Twirling',
                October:   'The Orange',
                November:  'The Terrifying',
                December:  'The Awkward'
            },
            lastName  = {
                0: 'Mustache',
                1: 'Pickle',
                2: 'Hood Ornament',
                3: 'Raisin',
                4: 'Recycling Bin',
                5: 'Potato',
                6: 'Tomato',
                7: 'House Cat',
                8: 'Teaspoon',
                9: 'Laundry Basket'
            };
        return firstName[birthday.toLocaleString('en-US', {month: 'long'})] + ' ' + lastName[(birthday.getDate() % 10)];
    }
})();