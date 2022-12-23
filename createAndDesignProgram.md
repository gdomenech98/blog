🛠️ Como crear y arquitecturizar un programa 🛠
===================================
Para crear un programa que sea lo más robusto ante el cambio debemos tener en cuenta que debe tener **compatibilidad, funcionalidad, coherencia** y **cohesion**. A continuación se explican detalladamente algunos de estos requisitos:

- Regla de ***“La novia o la hermana”***: La primera apreciación que deberemos considerar es que cada una de las elecciones que tomamos al decidir sobre nuestro programa (la tecnología a usar, como se programa, o como esa pieza se relaciona con las otras) **determinan**, o más bien **condicionan** en cierta medida, la **libertad que tienes al realizar los siguientes pasos**. Es por esta razón que se tiene que **intentar que las piezas no sean un “molde”** que encaja perfectamente con la otra pieza con la que se relaciona, sino que se debe pensar en un conjunto abstracto en el cual las piezas que construimos sean lo más **independientes** y **genéricas**. De este modo el **comportamiento de una pieza no infiere en el funcionamiento de las otras**.

    Hay una analogía a este concepto en la primera temporada de la serie Mr. Robot (Spoiler!). Eliot, el protagonista, cree que la chica que forma parte del grupo de hackers es su novia, pero no es hasta el último episodio de la temporada que se le revela al espectador que no era su “novia” sino su hermana. Aquí el director de la obra decidió dejar que todas las piezas sean lo suficientemente genéricas como que todas las acciones que realice Eliot puedan dar a entender que es su “novia”, pero realmente podrías interpretarlo de otro modo y podrían ser acciones que toma un hermano con su hermana. 

    Pues de esto va la arquitectura, de jugar a ser lo **suficientemente genérico** en cada una de las piezas que realizas como para no poder distinguir si es la “novia” o la “hermana”

- **Compromiso entre coherencia y cohesión**: En el momento que concretizamos un componente lo estamos adaptando demasiado a que encaje únicamente con una serie de piezas, por lo que la regla siempre sera: **mantener los componentes lo más genéricos posible**.

    Hay que descentralizar las cosas y adaptarlas al cambio, es decir, que no cueste cambiarlas en caso de necesitarlo. Hay que asumir una cosa y es que el **programa SIEMPRE va a cambiar** por tanto, tenemos que estar **preparados para el cambio**. No asumir esto es un error como desarrollador, dado que las ideas cambian y evolucionan en el 99% de los casos.

    Hay un **compromiso entre coherencia y cohesion**. Si hay **poca cohesión** todo será muy difícil de analizar y comprender, por tanto tendrá poca coherencia, dado que el sistema estará compuesto por muchas piezas y sera difícil ver que relaciones establecen estas entre sí. Mientras que si las piezas tienen **mucha cohesión**, es decir; se acoplan demasiado, no permitirá establecer ciertas relaciones entre piezas, dado que las piezas eran demasiado grandes y genéricas. Si tenemos mucha cohesión todos los cambios costaran mucho de aplicar dado que estará todo demasiado encapsulado y se pueden perder matices importantes del código.
    
- **Diseñar antes de implementar**: Hay que destinar tiempo a planificar cómo abordar los problemas y pensar en qué implicaciones pueden tener en las decisiones que tomes. En este proceso se debe mantener el concepto de diseño emergente y no sobreplanificar las cosas.

- ***DRY (Don’t Repeat Yourself)***: No repitas código, haz componentes que permitan reusarlo. Repetir código implica que si se desea modificar una parte del código que se repite debe replicarse el cambio en todos los sitios. Por este motivo debemos evitar duplicidades y tener una única fuente de código reutilizable. Al mantener una única fuente del código que se reutiliza se le llama ***“single source of truth”***). Hacer partes pequeñas, legibles y reusables de código.

- ***"Prepárate para el cambio, no para el futuro"***: No piques código para el futuro. Mantén los principios del diseño emergente y construye a medida que vayas necesitando. Esto no implica que cuando necesites construir un sistema no lo plantees preparado para el cambio, de hacerlo así va a ser mucho mas fácil extender y unir partes de código.

- Los 5 **principios SOLID**: SOLID son las siglas de (“**S**ingle Responsability", “**O**pen/Closed", “**L**iskov Substitution”, “**I**nterface Segregation” y "**D**ependency Inversion”).
-- ***Single Responsibility***: cada módulo o clase debe tener una única responsabilidad.
-- ***Open/Closed***: Las entidades de software deben estar abiertas a la extensión pero cerradas a la modificación. Deben visualizarse como cajas que transforman datos y estas cajas tienen conectores que permiten extender el comportamiento del programa.
-- ***Liskov Substitution***: Los objetos en un programa deben poder reemplazarse por instancias de sus subtipos.
-- ***Interface Segregation***: Los componentes (interfaces) enfocadas a un uso único son mejores que aquellas interfaces que intentan ser genéricas.
-- ***Dependency Inversion***: Hacer uso de componentes en vez de implementaciones concretas.

