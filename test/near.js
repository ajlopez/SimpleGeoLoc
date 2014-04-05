
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

exports['near with two items, one is near'] = function (test) {
    var store = sgl.createStore();
    var item1 = { a: 1 };
    var item2 = { b: 2 };
    
    store.add(-34.5, -10.5, item1);
    store.add(-35.5, -11.5, item2);
    
    var result = store.near(-34.3,-10.1, 50);
    
    test.ok(result);
    test.ok(Array.isArray(result));
    test.equal(result.length, 1);
    test.equal(result[0].latitude, -34.5);
    test.equal(result[0].longitude, -10.5);
    test.equal(result[0].item, item1);
};

exports['add using string, near with two items, one is near'] = function (test) {
    var store = sgl.createStore();
    var item1 = { a: 1 };
    var item2 = { b: 2 };
    var item3 = { c: 3 };
    
    store.add("-34.5", "-10.5", item1);
    store.add("-35.5", "-11.5", item2);
    store.add("0", "0", item3);
    
    var result = store.near(-34.3,-10.1, 50);
    
    test.ok(result);
    test.ok(Array.isArray(result));
    test.equal(result.length, 1);
    test.strictEqual(result[0].latitude, -34.5);
    test.strictEqual(result[0].longitude, -10.5);
    test.equal(result[0].item, item1);
};

exports['add using only one string, near with two items, one is near'] = function (test) {
    var store = sgl.createStore();
    var item1 = { a: 1 };
    var item2 = { b: 2 };
    var item3 = { c: 3 };
    
    store.add("-34.5, -10.5", item1);
    store.add("-35.5, -11.5", item2);
    store.add("0, 0", item3);
    
    var result = store.near(-34.3,-10.1, 50);
    
    test.ok(result);
    test.ok(Array.isArray(result));
    test.equal(result.length, 1);
    test.strictEqual(result[0].latitude, -34.5);
    test.strictEqual(result[0].longitude, -10.5);
    test.equal(result[0].item, item1);
};
