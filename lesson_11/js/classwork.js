function getClass(target) {
    return {}.toString.call(target).slice(8, -1);
}

// console.log(getClass(null));
// console.log(getClass(''));
// console.log(getClass(new String()));
// console.log(getClass([]));
// console.log(getClass({}));
// console.log(getClass(function () {}));
// console.log(getClass(new RegExp('')));
// console.log(getClass(new Date()));
// console.log(getClass(new Promise(function () {})));
// console.log(getClass(new Number()));

let id = setTimeout(function () {
    console.log('timer')
}, 5000);

console.log('норм код');

try {
    console.log('начало');
    // throw new Error('какая-то ошибка');
    console.log('после ошибки');
} catch (e) {
    console.log('ошибка');
    console.log('обработка ошибки', e)
}

console.log('норм код дальше');