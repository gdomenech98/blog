📦 Yarn 📦
===================================

1. [Que es yarn?](#1.)
2. [Solucionar dependencias internas de un paquete instalado](#2.)

1\. Que es yarn?
---------
Yarn es un **programa** que **permite gestionar paquetes del repositorio npm**. 

2\. Solucionar dependencias internas de un paquete instalado
---------
Para **fijar las dependencias** internas de un paquete instalado lo debemos hacer en la sección ***“resolution”*** del fichero **package.json** donde se encuentra instalado el paquete afectado, en el caso de no tenerla, podemos crear-la. 

Para comprender esto mejor vamos a tomar el siguiente ejemplo:
Disponemos de un paquete A con la version (1.0.0), el cual tiene una dependencia interna de otro paquete B con version (3.0.0). Tenemos adicionalmente instalado un paquete C con version (1.2.0) pero este paquete tiene problemas de compatibilidad con el paquete B, que usa la version (3.0.0) y necesitaría que tuviese la version (2.0.0). Para solucionarlo tendríamos que hacer lo siguiente:
```
{
	…
	dependencies: {
		“A”: “1.0.0”
		“C”: “1.2.0”
	},
	resolutions: {
		“B”: “2.0.0”
	}
	…
}
```
