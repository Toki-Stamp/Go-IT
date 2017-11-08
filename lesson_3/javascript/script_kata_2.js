/**
 * Created by Fomichev Yuri on 03.06.2017
 * Contact me at : toki.stamp@gmail.com
 */

/* Kata 2: Return Negative */

function makeNegative(num) {
    return (num < 0) ? num : -num;
}
while (true) {
    var number = prompt('Enter number:');
    if (!number) break;
    alert('Answer is ' + makeNegative(number));
}