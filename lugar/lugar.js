//vamos a hacer una funcion con toda la logica

const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodeUrl = encodeURI(dir);

    //creamos una instancia
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeUrl }`,
        headers: { 'x-rapidapi-key': '6309564b4emshb4998decfb69736p136ca3jsn34fddff38a18' }
    });

    //se llama a la instancia peticion get
    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ dir }`);

    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    //datos que la funcion debe de retornar para obtener el clima
    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {

    getLugarLatLng

}