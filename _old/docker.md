[🔙 Volver al Indice](https://github.com/Sixedge-es/software_Arquitecture)

🐳 ️Docker 🐳
===================================

1. [Que es Docker?](#1.)
2. [Características de Docker](#2.)
3. [Clientes Docker]()
4. [Docker Compose]()
5. [Desarrollo con Docker]()
6. [Docker Entrypoint]()

1\. Que es Docker?
---------
**Los programas necesitan un entorno donde funcionar**: unos programas instalados al lado con sus versiones específicas, unos ficheros de configuración, etc. (en fin, **dependencias**).
El **problema** que tienes es que si tú construyes un programa, **dependes del entorno donde va a correr dicho programa**. En dicho entorno hay otros programas ya instalados, que a su vez quizás necesitan de otras versiones diferentes que las que tienes tu. Resumiendo, el hecho que los programas necesiten dependencias conlleva dificultad en su integración con otros programas y el entorno donde se despliegan.
En la empresa OSX decidieron que los programas vendrían en un **paquete**, llamado ***bundle***, donde **estarían todas sus dependencias**. De esa forma los programas no “ensucian” el sistema con las dependencias que necesitan para funcionar.

**Docker** es un sistema de **bundles declarativos para definir sistemas en los que ejecutar programas**. Permite describir cómo construir el entorno de tu programa de principio a fin. Poniendo el primer Dockerfile base, siguiendo toda la cadena de “FROM”s podemos ir importando otras imágenes (o programas ya empaquetados) a nuestro programa, y de ese modo podemos resolver todas sus dependencias. De este modo podemos adoptar otras imágenes docker en tu Dockerfile y es éste el que agrega ya los detalles que tu programa necesita.

*Y porqué no usar una Máquina Virtual?*
- **Gastas más recursos computacionales** (RAM, Disco, CPU, etc). Ya que no se montan sobre el propio Sistema Operativo (SO), sino que generan un SO nuevo que corre sobre el SO principal que tengas instalado en tu dispositivo.
- **Mayor latencia:** los comandos docker build y docker run son comandos muy rápidos por todas las cosas que pasan por debajo al ejecutarlos. Mientras que las VM’s son muy lentas y no se puede hacer Red Green Refactor cómodamente.

2\. Características de Docker
---------
- Es un lenguaje declarativo
- Versionado
- Basado en layers que se construyen una sobre otra anotando solo las 				diferencias. ***Como funciona un Dockerfile?*** En los docker files para **cada orden se genera una imagen**. Una orden corresponde a una linea de comandos e.j RUN, ENTRYPOINT, COPY, FROM, etc. **Cada vez que alguno de los comando se modifica se regenera la imagen de docker a partir de ese punto**.

3\. Clientes Docker
---------
Docker es un sistema **cliente-servidor**. El cliente ejecuta las ordenes que le manda el servidor. Un cliente docker se encarga de lanzar y añadir configuraciones de lanzamiento de imágenes docker, también llamados contenedores. Hay varios **clientes docker**, los mas usados son: **Docker Desktop, Docker Compose o Docker CLI** (haciendo uso del comando ```docker run```). Si los procesos de **cliente** y **servidor** (en este caso de Docker) **se encuentran en la misma máquina lo más común es que hablen por ficheros** en vez de por un **protocolo** como podría ser **HTTP**. El fichero donde tanto **cliente como servidor de Docker se comunican (leen y escriben del fichero)** esta en ```/var/run/docker.sock```, y básicamente es un socket HTTP ( es decir, se comunican por HTTP). Podemos **crear imágenes** de docker con **Dockerfile**, o bien podemos obtenerlas de un ***registry*** donde desarrolladores **suben sus imágenes** como podría ser ***Docker Hub***.

4\. Docker Compose
---------
Es un **cliente de docker** que actúa como un **orquestador de dockers** ya sea de imágenes Docker o en su defecto containers de Docker. Los ficheros docker compose son declarativos y usan **YAML** como lenguaje.

Tips importantes y buenas practicas:
- Por defecto docker compose **expone todos los containers en una sola red**. En la red, la interfaz de red del container recibe el mismo nombre que el nombre del propio container al cual pertenece.
e.g. Container “mongo” en la red se refiere con el nombre “mongo” a la ip ```xxx.xxx.xxx.xxx``` asociada a dicha red del container. De este modo podríamos hacer por ejemplo: ```ping mongo```.
- Puedes **separar los servicios** en diferentes dockers compose y ejecutar un conjunto de ficheros con docker-compose con el siguiente comando: ```docker-compose -f file1.yml -f file2.yml -f file3.yml up```
- Puedes arrancar un **docker compose como proyecto**.

5\. Desarrollo con Docker
---------
**Todo sistema debe ser agnóstico de donde se lanza**. Para que funcione solo deberíamos tener **instalado docker** y **todos los otros servicios van dockerizados (incluso docker-compose)**. Al sistema encargado de tener todo lo necesario para arrancar un proyecto se le llama ***Bootstrapping***.

*Como compartir volumenes entre el localhost y el contenedor docker?* se comparte el volumen del servidor con el volumen del cliente con el flag:  ```-v``` o  ```--volumes```

Aunque lanzas un servicio dentro de un cliente docker las rutas que apuntan a los directorios locales **siempre** son los directorios locales del PC. Es buena practica montar un volumen de la ruta donde se lanza el proyecto dentro del container, así tienes mapeado en el container la ruta de tu PC local. Ejemplo: Mi proyecto se encuentra en ```/home/ubuntu/myPorject```, es buena práctica pues montar el volumen dentro del contenedor ```docker -v /home/ubuntu/myPorject:/home/ubuntu/myPorject```. Adicionalmente podríamos pasar una variable de entorno con el nombre del directorio, ```-e LOCAL_DIR=‘/home/ubuntu/myPorject```.

*Como comunicar cliente-servidor Docker localmente?* Para correr un servicio docker (cliente) que se comunique localmente con tu servicio docker (servidor) deberas hacer el siguiente comando: 
```docker run -v /var/run/docker.sock:/var/run/docker.sock -ti docker```

*Exponer un puerto local al servidor docker?* Podemos mapear un puerto local a un puerto de docker, y no necesariamente tienen que coincidir el puerto que se expone localmente con el de docker. Esto se hace con el flag ```-p``` o ```--port```.

*Como compartir permisos de ficheros con un contenedor Docker?* Para que tengan **los mismos permisos debe coincidir el id de usuario del volumen del contenedor docker con el id de usuario del volumen en el localhost**. Si no coinciden podemos darle los permisos de usuario al (*opción 1*), o bien podríamos agregarle los permisos necesarios ```rwx``` (*opción 2*) al volumen de *localhost*. 
- Opción 1 (e.g): ```chown 1000 myFile```
- Opción 2 (e.g):```chmod +x myFile```
 Al elegir la opción 1 podemos aprovechar un hack y es que todos los sistemas ubuntu el usuario por defecto tiene el id 1000, así que si generamos una imagen de docker que da los permisos y sabemos que siempre desplegaremos en sistema ubuntu con el usuario por defecto, nunca vamos a tener  problemas de permisos si configuramos bien por primera vez los permisos de nuestro docker.

*⚠️ Atención con los sockets de los programas*: Cuando **redirigiros servicios con un webserver** (por ejemplo un **Nginx**) hay que ir con cuidado si tienen sockets (como podría ser el caso de que el programa tuviese “hot reload”), ya que tendremos que hacer un proxy pass del websocket.  
*Es buena practica hacer update y install en una misma orden en un dockerfile:* Por ejemplo si queremos instalar python pero antes queremos hacer un update de los paquetes **NO** haremos: ```RUN apt-get update``` y después ```RUN apt-get install python```, sino que lo haremos todo en un mismo comando: ```RUN apt-get update && apt-get install python```


6\. Docker Entrypoint
---------
Antes de explicar que es un entrypoint vamos a repasar algunos de los diferentes comandos que puede ejecutar un Dockerfile:

```CMD```: Comando que se ejecuta cuando la imagen arranca, después de ser construida.
```RUN```: Commando que ejecuta un comando mientras se construye la imagen de docker.
```ENTRYPOINT```: es el **programa que arranca el docker**, es el encargado de recibir el comando ```CMD```. Por defecto el entrypoint en las imágenes de docker es ```bash -c``` pero hay veces que esto **NO** es así.

El comando ```CMD``` se le pasa al ```ENTRYPOINT```, por ejemplo si tu comando es: ```cd /home``` y tu Entrypoint no es ```/bin/bash``` (bash) **no va a saber interpretarlo**. Si tu **entrypoint** de docker es ```bash -c``` entonces cuando tu pongas un comando, se ejecuta con bash, pudiendo hacer: 
```docker -run -ti image COMANDOAQUI```
Realmente se ejecuta ⬇️ donde ```bash -c``` es el entrypoint del ejemplo:
```docker -run -ti image bash -c COMANDOAQUI```

**⚠️ Solo puede haber solo una única declaración tanto del comando** ```CMD``` como ```ENTRYPOINT```. En caso de usar, por ejemplo, **docker-compose** en la declaración del yml **nos permite sobreescribir** estos comandos con las instrucciones **command** o **entrypoint**.
