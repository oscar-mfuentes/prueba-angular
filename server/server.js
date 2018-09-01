const express = require('express');
const app = express();
const test = require('./controllers/test');
const meteo = require('./controllers/meteoInfo');
const geo = require('./controllers/geoInfo');
const port = '8000';
const bodyParser = require('body-parser');
const cors = require('cors');

// Usamos body-parser para acceder a los parámetros de las peticiones.
// De esta forma los tenemos accesibles en la propiedad body y convertidos a objetos de javascript
app.use(bodyParser.json());

// Configurar cabeceras y cors
app.use(cors());

// Para la ruta por defecto le decimo que sirva los archivos del cliente
app.use('/', express.static('../client/dist/client'));

// Este endpoint nos devuelve la información meteorológica para la localización que utilicemos
app.post('/getMeteoInfo', (req, res) => {
  meteo.getAllInfo(req, res);
});

// Este endpoint devuelve la información geográfica de la ciudad que busquemos
app.post('/getGeoInfo', (req, res) => {
  geo.getAllInfo(req, res);
});

app.listen(port, (err) => {
  if (err) {
    console.log('something bad happened', err)
  }else{
    console.log(`server is listening on ${port}`)
  }
});