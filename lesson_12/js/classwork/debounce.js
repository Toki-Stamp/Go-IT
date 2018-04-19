function debounce(callback, time) {
    let stop = false;
    
    return function () {
        if (!stop) {
            callback.apply(this, arguments);
            stop = true;
            
            setTimeout(function () {
                stop = false;
            }, time);
        } else {
            console.log('bounce', arguments[0]);
        }
    }
}

function fn(value) {
    console.log(value);
}

let func = debounce(fn, 1000);

func('f1');
func('f2');
setTimeout(function () {func('f3')}, 100);
setTimeout(function () {func('f4')}, 1100);
setTimeout(function () {func('f5')}, 1500);
setTimeout(function () {func('f6')}, 2000);
setTimeout(function () {func('f7')}, 2150);