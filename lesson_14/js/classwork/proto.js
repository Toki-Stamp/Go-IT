var Vehicle = {
    color   : 'red',
    price   : 90,
    rollAble: true
};

var Bike = {
    __proto__: Vehicle,
    price    : 150
};
console.log('1');
for (var key in Bike) {
    console.log(key + ':' + Bike[key]);
}
console.log('2');
for (var key in Bike) {
    if (Bike.hasOwnProperty(key)) {
        console.log(key + ':' + Bike[key]);
    }
}