# Todo App
Cada tarea va a tener las siguientes propiedades:

- Descripción (texto)
- Estado (pendiente o completada)
- Estado de edición (normal o en edición).

En nuestra aplicación tenemos diferentes acciones representadas por iconos:

- El icono cuadrado a la izquierda de la descripción de la tarea nos permitirá marcar dicha tarea como completada.
- Si la tarea está como completada, dicho icono cambiará visualmente y al presionarlo nuevamente podemos marcar la tarea como no completada.
- El icono del lápiz nos va a permitir editar la tarea
- Mientras que el de la papelera nos va a permitir eliminarla.
- Cuando presionemos el icono de editar, este icono junto con el de la papelera cambiarán y nos permitirán confirmar la actualización de la tarea o cancelar los cambios.

Estas acciones nos permitirán completar un CRUD con un par de detalles adicionales.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
