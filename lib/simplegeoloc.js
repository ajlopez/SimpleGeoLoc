

function Store() {
    this.add = function (lat, lng, item) {
    };
}

function createStore() {
    return new Store();
}

module.exports = {
    createStore: createStore
};