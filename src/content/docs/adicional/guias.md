---
title: ✍️ Guias
description: Admin commands
---

### Guias

Aquí está la versión mejorada y corregida de la parte proporcionada:

#### Configuración de Comandos Slash

* Los comandos Slash están desactivados por defecto
* En el archivo **config.js**, establezca **SLASH = true** y **CONTEXT = true**, y reemplace TEST\_GUILD\_ID con el ID del servidor donde desea probar inicialmente los comandos. Esto garantizará que todos los comandos se registren de inmediato
* Una vez que esté satisfecho con los comandos, establezca **GLOBAL = true** para registrar estas interacciones globalmente

{% hint style="warning" %}
_**Los comandos Slash globales** pueden tardar hasta 1 hora en mostrarse en todos los servidores._
{% endhint %}

#### Configuración del Tablero de Control

* En el archivo **config.js**, asegúrese de establecer la habilitación del tablero de control en **true**
* Agregue su URL base, `http://localhost:8080/api/callback` en la página de redirecciones OAuth2 de su aplicación en el [portal de desarrolladores de Discord](https://discord.com/developers/applications)

```
  Dashboard: {
    habilitado: true, // habilitar o deshabilitar el Dashboard
    baseURL: "http://localhost:8080", // URL base
    URL de redireccionamiento de falla: "http://localhost:8080", // URL de redirección
    puerto: "8080", // puerto en que se ejecuta el bot
  },
```