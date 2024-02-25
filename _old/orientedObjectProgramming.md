[🔙 Volver al Indice](https://github.com/Sixedge-es/software_Arquitecture)

💊 Programación Orientada a Objetos (POO) 💊
===================================

1. [Que es la POO?]()
2. [Ventajas del POO]()
3. [Domain Driven Design (DDD)]()
4. [Composición de objetos de dominio]()
5. [Test Driven Design(TDD)]()
5.1. [Cuando aplicar TDD]()
5.2. [TDD con Jest]()

1\. Que es la POO? 
---------
La programación orientada a objetos (POO) es un paradigma de la programación que se basa en el concepto de los “objetos”, los cuales pueden contener datos y código: datos por cada uno de los campos (conocido como atributos o propiedades), y el código, que actúa sobre los objetos (conocido como métodos).

2\. Ventajas del POO
---------
- **Reusabilidad:** Permite reutilizar las clases.
- **Desarrollo seguro:** dado que los datos están ocultos y no pueden ser accedido por otra función externa.
- **Centralización:** el código es fácil de mantener y extender dado que parte de la logica del código  se encuentra en el objeto, por lo que esta centralizado.
- **Abstracción:** con la POO se consigue ocultar la complejidad del código a diferentes usuarios y permite al objeto mostrar información de acorde con los requerimientos del cliente.
- **Herencia:** La herencia permite crear clases hijos que heredan los métodos y campos de sus clases padre. Esto permite no caer en DRY Don’t Repeat Yourself y desarrollar código de una manera eficiente.
- **Polimorífismo:** es la provisión de una interfaz única para múltiples entidades, por lo que una sola entidad puede representar múltiples tipos de objetos.
- **Encapuslación:**  Es básicamente la propiedad que permite a los programadores proteger los datos guardados en clases.

3\. Domain Driven Design (DDD)
---------
Un programa no es una entidad estática, ya que va evolucionando, y por lo tanto debe estar preparado para el cambio.

Es muy importante entender que un programa tiene infinitos grados de libertad y la primera pieza que pongamos va a condicionar las siguientes decisiones. A más piezas vayamos añadiendo a nuestro programa más definido va a quedar y dispondremos de menos grados de libertad. Es por esto que se debe plantear todo el sistema con **entidades imaginarias que cuando se hable con el cliente sean conceptos comprensibles** para éste (es decir en **lenguaje humano**). Por ejemplo: coches, facturas, usuarios, etc. Estas entidades imaginarias son **llamadas objetos de dominio** (Domain Objects) en **DDD**. 
Al final el cliente, cuando te explica su idea, esta todo el tiempo hablando de conceptos reales. No habla de detalles implementativos como UI o la DB. Plantear el sistema usando DDD te permite jugar con una gran ventaja: que el cliente te esta describiendo el programa. Dado que el cliente cuando describe su idea habla de entidades y de como éstas se relacionan entre si (e.g. necesito un sistema que dada la matricula de un coche pueda identificar al conductor). 
Con DDD si cambia algo en la manera de plantear el programa solo tendrás que añadir o quitar objetos de dominio y reestructurar las relaciones que se establecen entre ellos. Mientras que en otros modelos que no son DDD si no se usan modelos tienes que imaginar cómo el cliente quiere la aplicación y el programa va a ser menos robusto a cambios, dado que te estarás peleando con la comprensión del concepto del producto que el cliente tiene en mente y con los detalles implementativos de éste.

**Objeto de dominio:** entidad que dispone de atributos y métodos que engloba un concepto o idea y puede establecer relaciones con otros objetos de dominio. Todos los objetos de dominio, para estar bien formulados deben tener las siguientes propiedades: 
- **La Inmutabilidad:** Significa que el objeto de dominio no debe poder modificarse, en caso de ser modificado se debe devolver un nuevo objeto. Esto tiene consecuencias muy profundas, dado que si no es inmutable las consultas y modificaciones al objeto pueden hacerse desde cualquier punto del programa y eso puede llevar al desastre tu programa. Es como modificar una variable global, si no lo hacemos inmutable.
- **La idempotencia:**  Consiste en que al largo del tiempo y de tu programa se mantiene el 		estado.

4\.Composición de objetos de dominio
---------
Cuando estamos trabajando con objetos de dominio puede que en ciertos momentos debamos operar o mostrar por pantalla una composición de datos formada por varios objetos de dominio. Esta composición muchas veces puede llegar a ser compleja y entonces se despierta esta duda: dónde hago esta composición de modelos en el frontend o en el backend?
La respuesta no esta para nada definida y tiene varias posibles soluciones, con varios argumentos para cada solución. Pero podría existir una solución versátil totalmente valida:

**Solución mixta:** Podría en el backend operar sin objetos de dominio compuestos pero devolver los datos al frontend como si fuese un objeto de dominio nuevo. Entonces cuando éste lo reciba lo va a tratar como un objeto de dominio, que solo existe en el frontend.

5\. Test Driven Design (TDD)
---------
El TDD es un paradigma de la programación el cual se basa en que para poder desarrollar la feature ésta debe estar respaldada por un test. Una frase que debes pensar es “yo cuando programo cosas es porque me lo pide el test”. Los tests hechos en TDD se suelen llamar ***Unit Tests (tests unitarios)***. Los test unitarios permiten probar una única funcionalidad de tu programa, permitiendo tener aislado y probado el funcionamiento de una parte de tu programa.
 La gracia de TDD es que se puede ver y entender el código a partir de los tests realizados. Básicamente TDD permite aplicar RGR (Red-Green-Refactor): 

1. Tenemos una feature que queremos implementar.
2. Creamos el test: va a salir en Rojo dado que no hemos implementado la feature. 
3. Implementamos la feature y pasa el test pasando a Verde. 
4. Ya podemos hacer el refactor llegados a éste punto, pero después de hacerlo debemos pasar los tests de nuevo. 
Siempre antes de hacer un push debes pasar los tests y ver que todo esté en verde, si no lo esta no se debe realizar el push, dado que el entorno de integración pasaría a estar roto (en rojo) y no queremos eso.

5.1\. Cuando aplicar TDD
---------
TDD **no se debe aplicar a todo el programa**, únicamente a aquellas partes que sean core del programa, por ejemplo: en el **Dominio**. No tiene sentido comprobar una conexión, como podría ser una llamada a una API. 

Aplicaremos TDD a aquellas partes del programa según:
- Cuanto probable es que se rompa la pieza.
- Cuanto probable es que se tenga que replicar.
- El dinamismo de los datos.
- Cuanto tiempo tardo en darme cuenta de los errores.

En TDD si el programa esta en verde (pasa todos los tests) no existe el concepto de ***“BUG”***, dado que el programa esta en verde, entonces a lo que llamamos “bug” simplemente es la ausencia de un test para esa casuística. A esta situación algunos involucrados en procesos TDD le llaman ***“ISSUE"***, de ahi viene el término usado en Git o Jira).

En **fases iniciales del desarrollo puede que no nos interese tener TDD**, dado que en fases tempranas todo es muy cambiante y incierto, y hacer test supone **frenar el proceso de creación**.

Tips:
- Se debe tratar el código de los tests como código normal, aplicar los principios de **SOLID**.


5.2\. TDD con Jest
---------
Jest es una librería de javascript que permite hacer unit tests. Comandos básicos de Jest:
- **describe**(“name”, testing functions) sirve para agrupar tests
- **test**(“name”, test function) sirve para declarar tests (es lo mismo que it(“name”, test function). Simplemente es por legibilidad en ingles it(“expects to fail”, ()=> {…})
- **expects** (value).functionToEvaluate

    *Haciendo uso de la función expects(value).toStrictEqual() podemos comparar estrictamente objetos y arrays, sin tener en cuenta su puntero.
- **only.test** hace que solo ejecute ese test dentro del test
**beforeAll(()=>{…})** función que se inicializa al inicio del test, antes de correr cualquier test.
