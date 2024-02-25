[🔙 Volver al Indice](https://github.com/Sixedge-es/software_Arquitecture)

🌐 NGINX 🌐
===================================

**Nginx** es un **servidor web** que suele usarse como **reverse proxy**. Nginx **permite crear archivos de configuración para redireccionar tus peticiones web**. Los ficheros de configuración aplican las **reglas de más estricta a menos**.

Hay varios tipos de configuraciones: podemos crear un **servidor especifico** que contenga unas **reglas solo para ese servidor** o **generar reglas para el servidor por defecto**.

Cada una de las **reglas** de redireccionamiento reciben el nombre ```proxy_pass```. En el siguiente ejemplo vamos a ver como se configuran:
```
location [nombre de la ruta] {
	proxy_pass [ruta a la que redirecciona];
}
```
```
location /api {
	proxy_pass http://localhost:1880/;
} 
```
⚠️Hay varios **matices** que son **sutiles pero importantes**. Si se incluye el carácter ```/``` al final de la dirección del servidor de destino, se indica a Nginx que **se debe preservar la ruta de la solicitud entrante y añadirla a la dirección del servidor de destino**. Por ejemplo, si un usuario accede a http://example.com/some/path, y la configuración de Nginx incluye proxy_pass http://localhost/, la solicitud será: redirigida a http://localhost/some/path. 

Ejemplo literal:
```
location /some/path {
	proxy_pass http://localhost/;
}  
```
redirecciona a: http://localhost/some/path

Si **NO** se incluye el carácter ```/``` al final de la dirección del servidor de destino, se indica al Nginx que **se debe ignorar la ruta de la solicitud entrante y va utilizar la dirección del servidor de destino tal cual**. Por ejemplo, si un usuario accede a: "http://example.com/some/path", y la configuración de Nginx incluye proxy-pass http://localhost*, la solicitud será redirigida a 'http://localhost

```
location /some/path {
	proxy_pass http://localhost;
}
```
redirecciona a: http://localhost


Nginx nos permite **crear varios alias para un servidor** (server) a través de ```upstream```. En el siguiente ejemplo vemos como el servidor con dirección: backoffice:8081 recibe el nombre de backoffice. Al ejemplo se le añade un poco de contexto adicional para comprender donde se coloca la orden upstream en un servicio de configuración.

```
upstream backoffice {
	server backoffice:8081;
} 
server {
	listen 	80;
	location / {
		proxy_pass http://backoffice; 
	}
}
```

Nginx nos permite **declarar servidores** y lo hacemos a través del comando ```server```. En este ejemplo configuramos un servidor y todas las peticiones que vayan al subdominio “patata” serán atendidas por este servidor. Adicionalmente le diremos que solo escucha en el puerto 80 y que tiene un size máximo de petición de 100 MegaBytes.
```
server {
	listen 80;
	server_name patata.*$;
	client_max_body_size 100M;
}
```
Como hemos visto en el ejemplo anterior Nginx permite el uso de **expresiones regulares** ```REGEX``` para especificar algunas de sus configuraciones, tales como (```proxypass``` o ```server```).


En cada uno de los ficheros de configuración de Nginx nos permite **concatenar otras configuraciones**. Esto se hace con la orden include. En el siguiente ejemplo veremos como se incluyen todos los archivos de configuración que se encuentra dentro de la carpeta ```/etc/nginx/conf.d/_services/*.service.conf``` cuyos nombres acaben en ```.service.conf```.
```
{
	server {
		listen 80;
	}
	include /etc/nginx/conf.d/_services/*.service.conf;
}
```
