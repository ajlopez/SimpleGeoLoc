

function Store() {
    this.add = function (latitude, longitude, item) {
    };
}

function createStore() {
    return new Store();
}

module.exports = {
    createStore: createStore
};