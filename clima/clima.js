const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&APPID=619e71b6b5267d89f5cc4f250267551a&units=metric`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}