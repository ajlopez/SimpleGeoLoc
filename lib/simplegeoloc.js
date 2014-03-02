

function Store() {
    var data = [];
    
    this.add = function (latitude, longitude, item) {
        data.push([latitude, longitude, item]);
    };
    
    this.near = function (latitude, longitude, radius) {
        var result = [];
        
        data.forEach(function (datum) {
            result.push({ longitude: datum[0], latitude: datum[1], item: datum[2] });
        });
        
        return result;
    };
}

function createStore() {
    return new Store();
}

module.exports = {
    createStore: createStore
};