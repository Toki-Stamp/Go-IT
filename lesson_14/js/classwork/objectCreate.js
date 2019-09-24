var o1 = {}, //proto = Object
    o2 = Object.create(null); //proto = null

o1.age = 15;
o2.age = 15;

console.dir(o1);
console.dir(o2);

var foo = 'Banana!';

foo.color = 'yellow!';

console.log(foo.color);
console.log(foo.toUpperCase());