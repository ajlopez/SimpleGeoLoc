
var sgl = require('..');

exports['create store'] = function (test) {
    var store = sgl.createStore();
    
    test.ok(store);
}