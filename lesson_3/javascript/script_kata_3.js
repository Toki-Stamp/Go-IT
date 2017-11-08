/**
 * Created by Fomichev Yuri on 03.06.2017
 * Contact me at : toki.stamp@gmail.com
 */

/*  Kata 3: Love Function */
/*  Timmy & Sarah think they are in love, but around where they live,
 they will only know once they pick a flower each.
 If one of the flowers has an even number of petals and the other has an odd number of petals
 it means they are in love.
 Write a function that will take the number of petals of each flower and return true
 if they are in love and false if they aren't. */

function loveFunction(flower1, flower2) {
    return ((flower1 % 2) !== (flower2 % 2));
}

var flower1 = prompt('Enter number of petals of the first flower:');
var flower2 = prompt('Enter number of petals of the second flower:');
alert(loveFunction(flower1, flower2));
