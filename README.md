Prueba evelb

Instrucciones para poder ejecutar la aplicación con los archivos del repositorio,
se incluyen los archivos de cliente pero no los de producción por lo que tenemos que compilarlo para que funcione

Entrar en la carpeta server y ejecutar ``` npm install ```, este comando instala las dependencias del servidor.
Entrar en la carpeta client y ejecutar el mismo comando ``` npm install ``` para instalar las dependecias del cliente.

El servidor está configurado para servir un cliente de la ruta por defecto que crea algular al compilar,
por lo que desde la carpeta client ejecutamos ``` ng build --prod ```.

Desde la carpeta de servidor ejecutamos ``` node server.js``` esto ejecuta el servidor que estará escuchando en el puerto 8000,
por lo que para acceder a la web escribimos en un navegador: localhost:8000
