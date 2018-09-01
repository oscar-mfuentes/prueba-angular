const rp = require('request-promise');
const Config = require('../config');

class Meteo {
    async getAllInfo(req, res) {
        try{
            let params = req.body;
            let result = await rp.get(`${Config.METEO_API_URL}?north=${params.north}&south=${params.south}&east=${params.east}&west=${params.west}&username=${Config.USER}`);
            result = JSON.parse(result);
            let response = {};
            if (result.weatherObservations.length > 0) {
                response = result.weatherObservations[0];
            }
            res.json(response);
        }catch(err){
            res.status(500);
            res.send(err.toString());
        }
    }
}

module.exports = new Meteo();