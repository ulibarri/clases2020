## Practica #6
### Eventos y emisor de eventos
Creacion de eventos y un emisor de eventos 

Evento: algo que ha sucedido en nuestra app y que necesita una respuesta de nuestra parte.

En NODE hay dos tipos de eventos: 
- System events (abrir un archivo, leer un archivo, crear un directorio, han llegado datos desde internet, etc) manejados mediante Libuv.  Libuv is a C library that is used to abstract non-blocking I/O operations to a consistent interface across all supported platforms. It provides mechanisms to handle file system, DNS, network, child processes, pipes, signal handling, polling and streaming. It also includes a thread pool for offloading work for some things that can't be done asynchronously at the operating system level.
- Custom events (eventos creados por el desarrollador para atender necesidades particulares)  manejados por el Event Emitter. Aun asi, Javascript no tiene implementado el concepto de Event, no hay una clase como tal que los represente, pero nos proporciona el mecanismo para manejarlos

**Referencias**
- [Instrucciones Practica 6](https://docs.google.com/document/d/1zA8dGpsSW0A6cX9qlVxVwRSYzRMsUaPn-MkzEinJA3Y/edit)