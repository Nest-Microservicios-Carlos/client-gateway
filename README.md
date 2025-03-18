<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Cliente Gateway
El gateway es el punto de comunicación entre nuestro cliente y los microservicios. Es el encargado de recibir las peticiones de los clientes y enviarlas a los microservicios correspondientes y devolver los resultados a los clientes.

## Dev
1. Clonar el repositorio
2. Instalar dependencias
3. Crear el archivo `.env` basado en el archivo `.env.example`
4.  Levantar el servicio de nats 
```
docker run -d --name nats-main -p 4222:4222 -p 6222:6222 -p 8222:8222 nats
```
5. Tener levantado los microservicios que se van a consumir
6. Ejecutar el comando `npm run start:dev`

## Nats
docker run -d --name nats-main -p 4222:4222 -p 6222:6222 -p 8222:8222 nats