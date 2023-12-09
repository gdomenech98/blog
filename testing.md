# 🧪 Testing
Los tests automaticos permiten verificar que un sistema digital se comporta de una manera esperada. Los hay de muchos tipos, por ejemplo:
- Un test que abre un navegador, entra a la web y verifica que aparece el botón en la posición correcta. 
- Tests que verifica que una función especifica produce un resultado concreto frente a una entrada específica.

## Pros y contras
Los tests proporcionan feedback rápido sobre el comportamiento de tu sistema, lo cual, utilizando inteligentemente puede acelerar muchísimo al equipo, permitiendole hacer cambios más rápido. 
La contrapartida de los tests es que poco a poco, los tests vuelven rigido el sistema. A más automatismos y verificaciones tienen las cosas, más cuesta cambiarlas luego, por que hay que retocar todas las verificaciones. Lo ideal sería tener tests que fallan cuando se te ha colado un error, pero que nunca fallan cuando no hay error. 
Resumen: tener en cuenta los equilibrios de lo que te dan los tests (feedback rapido) y lo que te quitan (flexibilidad). Por lo tanto, el objetivo es reducir la rigidez que agregan los tests y maximizar el feedback que proporcionan (que fallen cuando tienen que fallar y no cuando estamos evolucioando el sistema).
Los tests tienen que estar **desacoplados de los detalles implementativos**, que en realidad el enunciado del test debería ser como una **HU**, e idealmente, ser la propia HU (esto recibe el nombre de **BDD Behaviour Driven Development**, una disciplina de gestion integral dentro de la que encaja muy bien **Domain Driven Design** como arquitectura). 
Ejemplo: Un test podría ser algo tipo "como usuario quiero poder interactuar con la web" o "como usuario quiero poder interactuar con el sistema". Un tests e2e (end to end) que verifica que la web carga y monta los elementos dom basicos de despliegue.

## Categorizar tests
Hay una manera clásica de categorizar los tests automatizados de software, que es basicamente basada en el alcance del test:

1) **tests unitarios**: solo se pueden hacer fallar tocando en un unico sitio. Si puedes hacerlos fallar tocando en dos sitios diferentes del sistema, ya no son unitarios. Lo que se considera "un sitio" suele ser la unidad mas pequeña que uses en tu sistema de diseño. Normalmente suele ser o clase o función, para programación OOP y funcional respectivamente.
2) **tests de microintegración**: a veces hay unidades (clases, funciones...) que están relacionadas entre si de forma muy estrecha y que obtener feedback de ese bloque de forma islada puede tener valor. Esos tests son tests que puedes hacer fallar tocando cualquier parte de un grupusculo de tu topologia.
3) **test de integración**: son tests que proporcionan información sobre la integración de un grupo en un todo. Por ejemplo, la integración de un conjunto de clases y funciones, en un microservicio. Testear el microservicio es testear esa integración de unidades, por eso se llama test de integración
4) **test end to end (e2e)**: estos tests verifican que el sistema funciona desde fuera, como usuarios externos del sistema. Usan el UI o la API (si hay api externa como parte del sistema) para interactuar con el sistema y ofrecen feedback sobre el funcionamiento completo del sistema, no de una integración en concreto, o de una unidad especifica. 
