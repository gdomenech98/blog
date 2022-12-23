[🔙 Volver al Indice](https://github.com/Sixedge-es/software_Arquitecture)
📝️ Control de versiones con “Git" 📝
===================================

1. [Como hacer buenos commits? ](#1.)
2. [Comandos básicos de git](#2.)

1\. Como hacer buenos commits?
---------
Para hacer **buenos commits** debes seguir estas reglas:
- **Commits atómicos:** No hacer commits gigantes, se recomienda hacer commits atómicos es decir, con pocos archivos.
- **Buena descripción del mensaje de commit:** Una buenas descripciones en el mensaje permite visualizar de forma rápida los cambios que se han realizado en el proyecto sin necesidad de ver en detalle cada uno de los archivos modificados en el commit.
- **No comitear nada roto:** si y solo sí funciona el código hacer commit. Si no funciona el código y debes commitear añadir una **variable toggle** que permita desactivar el código que no funciona. Esta variable debe ser comiteada en el estado en el que no afecte a las personas que hagan pull del proyecto.

2\. Comandos básicos de git
---------
**Comando hard reset:** El siguiente comando hace checkout a un commit específico y lo establece como origin master. El commit del checkout será a partir de ese momento el master HEAD commit.
	```git reset --hard ${commit}```
	```git push origin master``` ( podemos añadir el comando force “-f”, pero ten cuidado)

Si queremos volver a un commit especifico podemos hacerlo con el siguiente comando:
	```git checkout ${commit}```
	```git revert ${commit} ``` Tira hacia atrás un commit
