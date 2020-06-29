# Architecture

## Notas

* Cada parte funcional del proyecto tiene un módulo de angular que exporta su API pública.
* Cada página cuenta con su propio NgModule y su propio RoutingModule

## App

* Módulo principal que contiene el resto de la aplicación

### Core

* Módulos que aportan cierta funcionalidad base de la aplicación.

### Public

* Funcionalidad pública de la app.

### Private

* Funcionalidad privada de la app.
* Por cada unidad funcional del dominio tenemos un módulo.
* Cada unidad funcional cuenta con un servicio de dominio, este servicio resuelve toda la lógica de negocio asociada a esa entidad.
