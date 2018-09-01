const rp = require('request-promise');
const Config = require('../config');

class Geo {
    async getAllInfo(req, res) {
        try{
            let params = req.body;
            let result = await rp.get(`${Config.GEO_API_URL}?q=${params.city}&maxRows=20&startRow=0&lang=en&isNameRequired =true&style=FULL&username=${Config.USER}`);
            result = JSON.parse(result);
            let response = {};
            if(result.geonames[0]){
                response = {
                    fullName: result.geonames[0].toponymName,
                    province: result.geonames[0].adminName2,
                    community: result.geonames[0].adminName1,
                    country: result.geonames[0].countryName,
                    population: result.geonames[0].population,
                    coordinates: {
                        lat: result.geonames[0].lat,
                        lng: result.geonames[0].lng
                    }
                }
                if(result.geonames[0].bbox) {
                    response.bearings = {
                        north: result.geonames[0].bbox.north,
                        east: result.geonames[0].bbox.east,
                        south: result.geonames[0].bbox.south,
                        west: result.geonames[0].bbox.west
                    };
                }
            }
            res.json(response);
        }catch(err){
            res.status(500);
            res.json(err.toString());
        }
    }
}

module.exports = new Geo();