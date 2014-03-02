
var sgl = require('../..');

var store = sgl.createStore();
var ciudades = { };

function loadCiudades() {
    var data = require('./ciudades.json');
    
    data.forEach(function (datum) { 
        if (datum.model != 'cities_light.city')
            return;
            
        if (!datum.fields.geoname_id)
            return;
            
        var item = {
            id: datum.pk,
            name: datum.fields.name,
            latitude: parseFloat(datum.fields.latitude),
            longitude: parseFloat(datum.fields.longitude)
        };
        
        store.add(item.latitude, item.longitude, item);
        ciudades[item.name] = item;
    });
}

function near(name, radius) {
    var ciudad = ciudades[name];
    
    if (!ciudad)
        throw "city not found";
        
    var nearitems = store.near(ciudad.latitude, ciudad.longitude, radius);
    
    return nearitems;
}

module.exports = {
    loadCiudades: loadCiudades,
    near: near
}
