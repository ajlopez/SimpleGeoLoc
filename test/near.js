
var sgl = require('..');

exports['near in empty store'] = function (test) {
    store = sgl.createStore();
    
    var result = store.near(0, 0, 10);
    
    test.ok(result);
    test.ok(Array.isArray(result));
    test.equal(result.length, 0);
};

