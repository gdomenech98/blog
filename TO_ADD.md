# FALTA AÑADIR

Created: 1 de febrero de 2024 17:33

- Regla de ***“La novia o la hermana”***: La primera apreciación que deberemos considerar es que cada una de las elecciones que tomamos al decidir sobre nuestro programa (la tecnología a usar, como se programa, o como esa pieza se relaciona con las otras) **determinan**, o más bien **condicionan** en cierta medida, la **libertad que tienes al realizar los siguientes pasos**. Es por esta razón que se tiene que **intentar que las piezas no sean un “molde”** que encaja perfectamente con la otra pieza con la que se relaciona, sino que se debe pensar en un conjunto abstracto en el cual las piezas que construimos sean lo más **independientes** y **genéricas**. De este modo el **comportamiento de una pieza no infiere en el funcionamiento de las otras**.
    
    Hay una analogía a este concepto en la primera temporada de la serie Mr. Robot (Spoiler!). Eliot, el protagonista, cree que la chica que forma parte del grupo de hackers es su novia, pero no es hasta el último episodio de la temporada que se le revela al espectador que no era su “novia” sino su hermana. Aquí el director de la obra decidió dejar que todas las piezas sean lo suficientemente genéricas como que todas las acciones que realice Eliot puedan dar a entender que es su “novia”, pero realmente podrías interpretarlo de otro modo y podrían ser acciones que toma un hermano con su hermana.
    
    Pues de esto va la arquitectura, de jugar a ser lo **suficientemente genérico** en cada una de las piezas que realizas como para no poder distinguir si es la “novia” o la “hermana”
    
- **Compromiso entre coherencia y cohesión**: En el momento que concretizamos un componente lo estamos adaptando demasiado a que encaje únicamente con una serie de piezas, por lo que la regla siempre sera: **mantener los componentes lo más genéricos posible**.
    
    Hay que descentralizar las cosas y adaptarlas al cambio, es decir, que no cueste cambiarlas en caso de necesitarlo. Hay que asumir una cosa y es que el **programa SIEMPRE va a cambiar** por tanto, tenemos que estar **preparados para el cambio**. No asumir esto es un error como desarrollador, dado que las ideas cambian y evolucionan en el 99% de los casos.
    
    Hay un **compromiso entre coherencia y cohesion**. Si hay **poca cohesión** todo será muy difícil de analizar y comprender, por tanto tendrá poca coherencia, dado que el sistema estará compuesto por muchas piezas y sera difícil ver que relaciones establecen estas entre sí. Mientras que si las piezas tienen **mucha cohesión**, es decir; se acoplan demasiado, no permitirá establecer ciertas relaciones entre piezas, dado que las piezas eran demasiado grandes y genéricas. Si tenemos mucha cohesión todos los cambios costaran mucho de aplicar dado que estará todo demasiado encapsulado y se pueden perder matices importantes del código.
    

*⚠️ Atención con los sockets de los programas*: Cuando **redirigiros servicios con un webserver** (por ejemplo un **Nginx**) hay que ir con cuidado si tienen sockets (como podría ser el caso de que el programa tuviese “hot reload”), ya que tendremos que hacer un proxy pass del websocket.

## 4.Duplicidad

La duplicidad del código debe lanzar alarmas al developer, ya que suele indicar un **mal planteamiento del problema que se esta afrontando**. En estos casos suele ir bien parar y replantearse el sistema y hacer un refactor.

## 5.Monorepo

Un monorepo consiste en el concepto de que todos los servicios están en un mismo repositorio y no en varios. De este modo no tienes que ir pulleando cada repo de cada uno de los servicios que deseas desplegar. Otra ventaja es que permite desplegar de manera mas fácil el entorno de desarrollo, adicionalmente al tener todo centralizado en un repositorio permite tener integración continua dado que todos los cambios están reflejados sobre el mismo repositorio.