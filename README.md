## Prueba evelb

#### Para poder ejecutar la aplicación es necesario tener instalado el cliente de angular y node 8 o superior (la v8.11.4 es la que yo utilizo, la LTS más reciente).

#### Instrucciones para poder ejecutar la aplicación, se incluyen los archivos de cliente pero no los de producción por lo que tenemos que compilarlo para que funcione

###### Entrar en la carpeta server y ejecutar ``` npm install ```, este comando instala las dependencias del servidor. Entrar en la carpeta client y ejecutar el mismo comando ``` npm install ``` para instalar las dependecias del cliente.

###### El servidor está configurado para servir un cliente de la ruta por defecto que crea algular al compilar, por lo que desde la carpeta client ejecutamos ``` ng build --prod ```.

###### Desde la carpeta de servidor ejecutamos ``` node server.js``` esto ejecuta el servidor que estará escuchando en el puerto 8000, por lo que para acceder a la web escribimos en un navegador: localhost:8000

###### Anotación sobre el mapa: Lo veremos con una marca de agua y nos puede dar un error por consola de que excedemos las peticiones permitidas, esto es porque la api-key es una que tengo creada para estos casos en mi cuenta personal y aunque la regenere como sigue vinculada a mi cuenta no sirve de nada. Además no cuenta con un dominio https.
