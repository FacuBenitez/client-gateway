# Cliente Gateway para Microservicios

Este proyecto implementa un cliente gateway que actúa como intermediario entre los clientes y los microservicios de productos y órdenes. Utiliza NestJS y NATS como sistema de mensajería para la comunicación entre servicios.

## Características principales

- Enrutamiento de solicitudes a los microservicios correspondientes
- Comunicación asíncrona mediante NATS
- Manejo de órdenes y productos
- Paginación de resultados

## Estructura del proyecto

El proyecto está organizado en los siguientes módulos principales:

- `AppModule`: Módulo raíz que integra todos los demás módulos
- `ProductsModule`: Maneja las operaciones relacionadas con productos
- `OrdersModule`: Gestiona las operaciones de órdenes
- `NatsModule`: Configura la conexión con el servidor NATS

## Configuración

La configuración del proyecto se realiza mediante variables de entorno. Asegúrese de configurar correctamente el archivo `.env` con los valores adecuados para su entorno.

## Ejecución del servidor NATS

Para levantar el servidor NATS necesario para la comunicación entre servicios, puede utilizar Docker con el siguiente comando:
```
docker run -d --name nats-server -p 4222:4222 -p 8222:8222 nats
```