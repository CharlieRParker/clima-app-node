const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//
//lugar.getLugarLatLng(argv.direccion)
//.then(console.log);

// //get clima reqiere la longitud como parametros
// clima.getClima(40.750000, -74.00000)
//     .then(console.log)
//     .catch(console.log)


//conectar ambos servicios y devolver el clima de xxxx es de xxxx o nose pudo determinar el clima de xxxx con async y await
//hay que llamar al lugar y hay que llamar al clima
const getInfo = async(direccion) => {

    try {
        const coordenadas = await lugar.getLugarLatLng(direccion); //como es un await el resultado de la promesa esta almacenado en las coordenadas
        const temp = await clima.getClima(coordenadas.lat, coordenadas.lng); //
        return `El clima de ${ coordenadas.direccion } es de ${ temp }.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${ direccion }`;
    }
}

//manejamos asi la funcion como una promesa
getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);