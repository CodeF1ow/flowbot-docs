---
title: ⚙️ Admin
description: Admin commands
---

### Configuración Admin

Estos comandos solo pueden ser utilizados por miembros que tengan permiso **ADMINISTRAR_SERVIDOR**

### Establecer Prefijo

* **Descripción**: Establecer el prefijo del bot
* **Uso**: `!setprefix <nuevoPrefijo>`

### Enviar Embed

* **Descripción**: Enviar un mensaje incrustado
* **Uso**: `!embed <#canal>`

### Automoderación

Por defecto, los eventos de auto moderación se ignoran para los miembros que tienen los siguientes permisos ya que se les considera moderadores de canal/servidor:

`KICK_MEMBERS`, `BAN_MEMBERS`, `MANAGE_GUILD`, `MANAGE_MESSAGES`

`!automodconfig debug on` anula esta configuración por defecto

|                                     |                                                                                  |
| ------------------------------------|--------------------------------------------------------------------------------- |
| `!automodconfig status`             | Ver estado de la configuración                                                   |
| `!automodconfig strikes`            | Establecer la cantidad máxima de strikes antes de tomar acción                   |
| `!automodconfig action`             | Establecer la acción a realizar después de recibir strikes máximo                |
| `!automodconfig debug`              | Activar auto moderación para mensajes enviados por administradores y moderadores |
| `!automodconfig whitelist`          | Lista de canales que están en la lista blanca                                    |
| `!automodconfig whitelistadd`       | Agregar un canal a la lista blanca                                               |
| `!automodconfig whitelistremove`    | Eliminar un canal de la lista blanca                                             |

### Configuraciones

| Nombre                            | Descripción                                                                                             |
| --------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `!anti ghostping`                 | Registrar menciones fantasma en su servidor (requiere el establecimiento del canal `/modlog`)           |
| `!anti spam`                      | Habilitar o desactivar la detección antispam                                                            |
| `!anti massmention`               | Habilitar o deshabilitar la detección de menciones masivas (el umbral predeterminado es de 3 menciones) |

### Autoborrado

| Nombre                                   | Descripción                                                                                   |
| ---------------------------------------- | --------------------------------------------------------------------------------------------- |
| `!autodelete attachments` **\<on\|off>** | Permitir o prohibir el autoborrado de mensajes con archivos adjuntos                          |
| `!autodelete invites` **\<on\|off>**     | Permitir o prohibir el envío de invitaciones de Discord en mensajes                           |
| `!automod links` **\<on\|off>**          | Permitir o prohibir el envío de enlaces en mensajes                                           |
| `!automod maxlines` **\<cantidad>**      | Establecer el máximo de líneas permitidas por mensaje                                         |

Cada vez que un miembro intenta romper la regla automatizada, recibe un strike. Después de recibir el número máximo de strikes (por defecto 10), se realiza la acción de moderación (por defecto TIMEOUT) en ellos.

### Contadores de canales

* **Descripción**: Configurar el canal de contador en el servidor
* **Uso**: `!counter <tipo_contador> <nombre>`
* **Tipos de contadores disponibles**:
  * `USERS`: Cuenta el total de miembros del servidor (miembros + bots)
  * `MEMBERS`: Cuenta el número total de miembros
  * `BOTS`: Cuenta el número total de bots

### Advertencias

* `!maxwarn limit` **\<cantidad>**: Establecer un máximo de advertencias que puede recibir un miembro antes de tomar una acción
* `!maxwarn action` **\<timeout|kick|ban>**: Establecer la acción a realizar después de recibir un máximo de advertencias

### Registro de moderación

* **Descripción**: Activar o desactivar el registro de moderación
* **Uso**: `!modlog <canal|off>`

El registro de moderación permite el registro de todas las acciones de moderación y los eventos de auto moderación

### Traducciones de banderas

Habilitar esta función permitirá a los miembros simplemente reaccionar a cualquier mensaje con un emoji de bandera del país, traduciendo el contenido del mensaje a la lengua regional

* **Descripción**: Configurar la traducción de la bandera en el servidor
* **Uso**: `!flagtr <on|off>`

### Auto Rol

* **Descripción**: Configurar el rol que se debe dar cuando un miembro se une al servidor
* **Uso**: `!autorole <rol|off>`

### Bienvenidas

* **Uso**: `!welcome status` **\<on|off>**
* **Descripción**: Activar o desactivar el mensaje de bienvenida
  
****

* **Uso**: `!welcome channel` **<#canal>**
* **Descripción**: Configurar el canal donde deben enviarse los mensajes de bienvenida
  
****

* **Uso**: `!welcome preview`
* **Descripción**: Enviar una vista previa de bienvenida

****

* **Uso**: `!welcome desc` **\<contenido>**
* **Descripción**: Establecer la descripción incrustada de bienvenida

****

* **Uso**: `!welcome footer` **\<contenido>**
* **Descripción**: Establecer el pie de página incrustado de bienvenida

****

* **Uso**: `!welcome thumbnail` **\<on|off>**
* **Descripción**: Activar o desactivar la miniatura de mensaje de bienvenida

****

* **Uso**: `!welcome color` **<#hex>**
* **Descripción**: Establecer el color incrustado de bienvenida

****

* **Uso**: `!welcome image` **\<URL_imagen>**
* **Descripción**: Establecer la imagen incrustada de bienvenida

****

### Despedidas

* **Uso**: `!farewell status` **\<on|off>**
* **Descripción**: Activar o desactivar el mensaje de despedida

****

* **Uso**: `!farewell channel` **<#canal>**
* **Descripción**: Configurar el canal donde deben enviarse los mensajes de despedida

****

* **Uso**: `!farewell preview`
* **Descripción**: Enviar una vista previa de despedida

****

* **Uso**: `!farewell desc` **\<contenido>**
* **Descripción**: Establecer la descripción incrustada de despedida

****

* **Uso**: `!farewell footer` **\<contenido>**
* **Descripción**: Establecer el pie de página incrustado de despedida

****

* **Uso**: `!farewell thumbnail` **\<on|off>**
* **Descripción**: Activar o desactivar la miniatura de mensaje de despedida

****

* **Uso**: `!farewell color` **<#hex>**
* **Descripción**: Establecer el color incrustado de despedida

****

* **Uso**: `!farewell image` **<#URL_imagen>**
* **Descripción**: Establecer la imagen incrustada de despedida

****

# Reemplazos permitidos de contenido

* `{server}` : Nombre del servidor
* `{count}` : Contador de miembros del servidor
* `{member:nick}` : Apodo del miembro
* `{member:name}` : Nombre del miembro
* `{member:dis}` : Discriminador del miembro
* `{member:tag}` : Etiqueta del miembro
* `{member:mention}` : Mención del miembro
* `{member:avatar}` : URL de avatar del miembro
* `{inviter:name}` : Nombre del invitador
* `{inviter:tag}` : Etiqueta del invitador
* `{invites}` : Invitaciones del invitador

### Roles de reacción

**Crear roles de reacción**

* **Uso**: `!addrr` **<#canal>** `<idMensaje>` `<rol>` `<emoticono>`
* **Descripción**: Configurar roles de reacción para el mensaje especificado

****

**Eliminar Roles de reacción**

* **Uso**: `!removerr` **<#canal>** `<idMensaje>`
* **Descripción**: Eliminar la reacción configurada para el mensaje especificado

****

### Ticketing

**Configuración**

* `!ticket setup` **<#canal>**: Configurar un nuevo mensaje de ticket
* `!ticket log` **<#canal>**: Configurar el canal de registro de tickets
* `!ticket limit` **\<cantidad>**: Establecer el número máximo de tickets abiertos simultáneamente
* `!ticket closeall`: Cerrar todos los tickets abiertos

**Comandos de canal de ticket**

* `!ticket close`: Cerrar el ticket
* `!ticket add` **\<idUsuario|idRol>**: Agregar usuario/rol al ticket
* `!ticket remove` **\<idUsuario|idRol>**: Eliminar usuario/rol del ticket

**Comandos de categoría de ticket**

* `!ticketcat list`: Listar todas las categorías de ticket
* `!ticketcat add` **\<categoría>** | **\<nombre>**: Crear una nueva categoría de ticket
* `!ticketcat remove` **\<categoría>**: Eliminar una categoría de ticket
