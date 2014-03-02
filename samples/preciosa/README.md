# Preciosa Ciudades

Un ejemplo con las ciudades contenidas en el proyecto [Preciosa](https://github.com/mgaitan/preciosa)

## Uso

Necesita tener Node.js instalado.

Ejecutar en la línea de comando:
```
node near <ciudad> <radio>
```
El radio en kilómetros.

Ejemplo:
```
node near Quilmes 4
```

Salida

```js
[ { latitude: -34.7585,
    longitude: -58.24544,
    item:
     { id: 81,
       name: 'Villa D. Sobral',
       latitude: -34.7585,
       longitude: -58.24544 } },
  { latitude: -34.75172,
    longitude: -58.24495,
    item:
     { id: 101,
       name: 'Villa Augusta',
       latitude: -34.75172,
       longitude: -58.24495 } },
  { latitude: -34.72418,
    longitude: -58.25265,
    item:
     { id: 307,
       name: 'Quilmes',
       latitude: -34.72418,
       longitude: -58.25265 } },
  { latitude: -34.74849,
    longitude: -58.23078,
    item:
     { id: 897,
       name: 'Ezpeleta',
       latitude: -34.74849,
       longitude: -58.23078 } },
  { latitude: -34.70728,
    longitude: -58.2718,
    item:
     { id: 1177,
       name: 'Bernal',
       latitude: -34.70728,
       longitude: -58.2718 } } ]
```

