var Fields = {
    'prototype-field-1': 'prototype-value-1',
    'prototype-field-2': 'prototype-value-2'
};

function Constructor(value) {
    this['self-field'] = value;
}

Constructor.prototype = Fields;

var child = new Constructor('self-value');

console.log('child', child);

for (var key in child) {
    console.log(key, ':', child[key]);
}
