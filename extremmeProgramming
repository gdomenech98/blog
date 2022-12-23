🏴‍☠️ Extreme programming 🏴‍☠️
===================================

1. [Flujo de trabajo básico de un “extremme programmer” ](#1.-agile)
2. [Red-Green-Refactor](#2.-historias-de-usuario-(hu))
3. [Concepto de “convention over configuration”](#3.-posiciones-de-un-equipo-agile)
4. [Duplicidad](#4.-diseño-emergente)
5. [Monorepo](#continuos-integration-(ci)-and-continous-deployment-(cd))

1\. Flujo de trabajo básico de un “extremme programmer” 
---------
1. Antes de ponerme a trabajar compruebo que el entorno actual funciona. Una vez comprobado hago pull para obtener los últimos cambios y estar **integrado**.
2. Sincronizo el proyecto (pull) constantemente mientras trabajo. Contra más constante sean los pulls menos partes tendrás que integrar, recuerda el problema siempre es la integración.
3. Desarrollo la historia de usuario.
4. Acabo la tarea antes de plegar del trabajo?
	- Funciona: Check que funcione y hago testing, si todo OK, commit y push
	- No funciona: Arreglo o hago Red-Green-Refactor de nuevo.
5. No acabo la tarea antes de plegar del trabajo?
	- Tengo cosas útiles: Añado un toggle, con una variable para activar/desactivar del código los trozos que he hecho pero todavía rompen el código en Green o hacen que no 	funcione correctamente. Hago commit y push con la variable toggle que desactiva mi 			código (de éste modo las personas que hagan pull no recibirán nada que les rompa el código).
	- No tengo nada útil: No haces commit y haces hard reset para estar en Green al día 			siguiente.



⚠️ **Antes de implementar una feature tengo que asegurarme que estoy en verde**, es decir que funciona. ***Que significa que funcionar?*** Pues que cumples con unos criterios de aceptación del cliente, por ejemplo que el programa no vaya lento, que el funcionamiento del programa sea el esperado, etc. 🚨**Nunca implementar una feature si no estoy en verde, porque entonces como se que lo que estoy implementando funciona?**

2\. Red-Green-Refactor 
---------
1. El proyecto no funciona (RED)
2. Arreglo el problema y hago que funcione a cualquier precio: rendimiento, pulidez de código, etc. ( GREEN)
3. Una vez funcionando (GREEN) me pongo a mejorarlo (REFACTOR).
Nota: El refactor implica mejorar el programa pero, hasta dónde tengo que mejorarlo?
- Opción 1: hasta que funciona con las prestaciones que el usuario final/cliente espera o 		demanda.
- Opción 2: dejarlo mejor de lo que estaba cada vez que trabajes con él.

3\.Concepto de “convention over configuration”
---------
Es un concepto usado en la informática. Básicamente se pretende que se tiene que conectar de forma natural con el código. Esto significa que el programa debe tener una configuración por defecto y el programa arranque. De este modo nunca falla aunque el ejecutor del programa no ponga inicialmente ninguna configuración. 
Para que no tenga configuración obligatoria el programa no debe haber ningún flag obligatorio, debe haber uno por default. 
El valor por defecto escogido para los flags debe ser el mejor possible para la mayoría de los casos, a estos valores por defecto se les llama ***“sane defaults”***.

4\.Duplicidad
---------
La duplicidad del código debe lanzar alarmas al developer, ya que suele indicar un **mal planteamiento del problema que se esta afrontando**. En estos casos suele ir bien parar y replantearse el sistema y hacer un refactor.

5\.Monorepo
---------
Un monorepo consiste en el concepto de que todos los servicios están en un mismo repositorio y no en varios. De este modo no tienes que ir pulleando cada repo de cada uno de los servicios que deseas desplegar. Otra ventaja es que permite desplegar de manera mas fácil el entorno de desarrollo, adicionalmente al tener todo centralizado en un repositorio permite tener integración continua dado que todos los cambios están reflejados sobre el mismo repositorio.

