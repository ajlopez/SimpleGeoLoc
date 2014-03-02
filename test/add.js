
var sgl = require('..');

exports['add simple item with lat/long'] = function (test) {
    var store = sgl.createStore();
    test.equal(store.add(0, 0, { }), null);
};

