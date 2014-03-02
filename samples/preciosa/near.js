
var preciosa = require('./preciosa');

preciosa.loadCiudades();

var name = process.argv[2];
var radius = parseInt(process.argv[3]);

console.dir(preciosa.near(name, radius));

