# prueba-labcave-server-socket
Server NodeJS sin express de la Prueba LabCave FullStackDeveloper de Joaqu&iacute;n Casas.

###### Para arrancar el servidor:
*nodemon index.js*

###### Configuraci&oacute;n:
- **nodemon**: para recargar el servidor al detectar cambios en el c&oacute;digo.
- **eslint**: linter.
- **dateformat**: para formatear fechas.
- **socket.io**: para crear el servicio mediante socket.io en vez de express.

###### Estructura proyecto:
index.js contiene la l&oacute;gica del servicio:

- **io.sockets.on('connection')**: se conecta al servidor.
    + **socket.emit('connected')**: indica que se ha conectado al servidor.
    + **socket.on('getTime')**: obtiene la hora actual.
      + **socket.emit('getTimeCallback')**: devuelve la hora actual en formato HH:MM:ss (Horas:Minutos:Segundos).
    + **socket.on('disconnect')**: indica la desconexi&oacute;n del servidor.
