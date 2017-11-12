/**
 * Created by Fomichev Yuri on 12.11.2017
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* Find Your Villain Name */
/* https://www.codewars.com/kata/find-your-villain-name/train/javascript */

/* Self-invoking function */
(function main() {
    var firstName /* month */ = {
            January: 'The Evil',
            February: 'The Vile',
            March: 'The Cruel',
            April: 'The Trashy',
            May: 'The Despicable',
            June: 'The Embarrassing',
            July: 'The Disreputable',
            August: 'The Atrocious',
            September: 'The Twirling',
            October: 'The Orange',
            November: 'The Terrifying',
            December: 'The Awkward'
        },
        lastName /* Last digit of date */ = {
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
        },
        date = new Date(1983, 10, 13), // (year, month, date, hours, minutes, seconds, ms)
        dateOptions = {
            // year: 'numeric',
            month: 'long',
            day: 'numeric'
        };

    getVillainName(date);

    function getVillainName(birthday) {
        console.log('locale:',birthday.toLocaleString('en-US', dateOptions));
        console.log(birthday);
    }
})();