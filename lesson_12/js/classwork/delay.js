function delay(callback, time) {
    return function () {
        let args    = arguments,
            context = this;
        
        setTimeout(function () {
            fn.apply(context, args);
        }, time);
    }
}

function fn(value) {
    console.log(value);
}

var d1 = delay(fn, 1500),
    d2 = delay(fn, 2500);

d1('d1');
d2('d2');