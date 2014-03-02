

function Store() {
    var data = [];
    
    this.add = function (latitude, longitude, item) {
        data.push([latitude, longitude, item]);
    };
    
    this.near = function (latitude, longitude, radius) {
        return [];
    };
}

function createStore() {
    return new Store();
}

module.exports = {
    createStore: createStore
};