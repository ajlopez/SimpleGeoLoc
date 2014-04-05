
EarthRadius = 6371; // km

function haversine(lat1, lon1, lat2, lon2) { // degrees
    var dLat = toRadians(lat2-lat1);
    var dLon = toRadians(lon2-lon1);
    var lat1 = toRadians(lat1);
    var lat2 = toRadians(lat2);

    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = EarthRadius * c;
    
    return d;
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function splitPosition(position) {
    var data = position.split(',');
    var result = {
        latitude: data[0].trim(),
        longitude: data[1].trim()
    };
    
    return result;
}

function Store() {
    var data = [];
    
    this.add = function (latitude, longitude, item) {
        if (arguments.length == 2 && typeof latitude == 'string') {
            var position = splitPosition(latitude);
            return this.add(position.latitude, position.longitude, longitude);
        }
        
        if (typeof latitude == 'string')
            latitude = parseFloat(latitude);
            
        if (typeof longitude == 'string')
            longitude = parseFloat(longitude);
            
        data.push([latitude, longitude, item]);
    };
    
    this.near = function (latitude, longitude, radius) {
        var result = [];
        
        data.forEach(function (datum) {
            var distance = haversine(latitude, longitude, datum[0], datum[1]);
            
            if (Math.abs(distance) <= radius)
                result.push({ latitude: datum[0], longitude: datum[1], item: datum[2] });
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