
var sgl = require('..');

exports['near in empty store'] = function (test) {
    var store = sgl.createStore();
    
    var result = store.near(0, 0, 10);
    
    test.ok(result);
    test.ok(Array.isArray(result));
    test.equal(result.length, 0);
};

exports['near with one item'] = function (test) {
    var store = sgl.createStore();
    var item = { };
    
    store.add(0, 0, item);
    var result = store.near(0, 0, 10);
    
    test.ok(result);
    test.ok(Array.isArray(result));
    test.equal(result.length, 1);
    test.equal(result[0].latitude, 0);
    test.equal(result[0].longitude, 0);
    test.equal(result[0].item, item);
};

exports['near with one item but too far'] = function (test) {
    var store = sgl.createStore();
    var item = { };
    
    store.add(0, 0, item);
    var result = store.near(1, 1, 10);
    
    test.ok(result);
    test.ok(Array.isArray(result));
    test.equal(result.length, 0);
};

exports['near with one item far but in radius'] = function (test) {
    var store = sgl.createStore();
    var item = { };
    
    store.add(-34.5, -10.5, item);
    var result = store.near(-34.3,-10.1, 100);
    
    test.ok(result);
    test.ok(Array.isArray(result));
    test.equal(result.length, 1);
    test.equal(result[0].latitude, -34.5);
    test.equal(result[0].longitude, -10.5);
    test.equal(result[0].item, item);
};

