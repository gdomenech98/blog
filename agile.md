<h1>:rocket: Metodologia Agile :rocket:</h1>
<ul>
  <li>1. Agile</li>
  <li>2. Historias de usuario (HU)</li>
  <li>3. Posiciones de un equipo agile</li>
  <li>4. Diseño emergente</li>
  <li>5. Continuos Integration (CI) and Continous Deployment (CD)</li>
  <li>6. Despliegue isolado</li>
</ul>

<h2>1. Agile</h2>

<p>Necesitamos partir de que el desarrollo de software consiste en hacer cambios a un asset digital, para que genere una experiencia diferente, que resuelva nuevas necesidades. La forma en la que se realiza esto, es en base a cambios incrementales sobre un mismo asset, normalmente almacenado en la nube, en servicios de control de versiones tipo git.</p>

<p>Negocio expresa ideas, dudas, miedos, inspiraciones, deseos y vaguedades, de las que el <b style="color: blue">Product Owner</b> (PO) extrae necesidades, que redacta en forma de <b style="color: blue">Historias de Usuario</b> (HU). Una HU de calidad solo habla de una necesidad, no de una propuesta de solución. Esas necesidades, expresadas siempre desde el punto de vista del usuario, las recoge y organiza el PO, en una cinta, donde las va ordenando por prioridad. De esa cinta, el equipo coge un grupo de HU, se las lleva, y se pone a trabajar en ellas. El equipo modifica el asset digital con más cambios incrementales, en base a lo que entiende que seria necesario hacerle, para cubrir las necesidades que expresa la HU. En ese punto, entra <b style="color: blue">Qualitty Assurance</b> (QA), que va validando que lo que se construye resuelve las necesidades que la HU expresa. QA es un representante del PO, que trabaja para él, y se asegura que lo que hace el sistema resuelve la necesidad expresada en la HU.</p>

<p><b style="color: blue">Reunion Retro</b>: después de cada sprint se reúne el equipo implicado en este y analizan y ponen en común los siguientes puntos: cosas que me han gustado | cosas que no me han gustado | cosas que podrían mejorar. Esta reunion permite analizar las fortalezas y debilidades del equipo adicionalmente permite proponer actitudes o conductas a mejorar para próximos sprints (las cuales se deben analizar en las futuras retros).</p>

<h2>2. Historias de usuario (HU)</h2>

<p>
Contexto: Un componente clave del desarrollo de software ágil es poner a las personas en primer lugar. Las historias de usuarios ponen a los usuarios finales reales en el centro de la conversación. En agile todo gira entorno al usuario, esto pasa dado que cuando no se hacia así en las reuniones de equipo (de marketing, ingeniería, diseñadores, etc) el tema del que se habla es de los detalles implementativos y problemas asociados al proceso de creación/construcción del proyecto. Entonces, cada uno defendía sus intereses, y eso suponía llegar, aveces, a un conflicto de intereses, dado que los intereses de unos con otros muchas veces se confrontaban. 
</p>
<p>
Es por esto que se decidió que el usuario fuese el centro, dado que va a ser el protagonista que va a hacer uso del producto que se esta desarrollando y por lo tanto, es el punto en común entre todas las entidades involucradas en el proceso de creación del producto que va a usar éste. 
</p>

<p>
Resumen: Las HUs son una explicación general que expresa una necesidad que tiene el usuario final del producto desarrollado, cuya función es articular como esta HU proporcionará una funcionalidad en el producto que aporte valor al usuario. El uso de HUs proporciona un marco de trabajo centrado en el usuario final, lo que impulsa la colaboración, creatividad y por tanto, la mejora en el producto.
</p>

<p>
Como crear HUs? Las HUs siguen una estructura similar a la siguiente: “Como [perfil], [quiero] [para].”
</p>
<p>
En esta estructura se expresa el usuario final (perfil) y una necesidad que debe ser resuelta (quiero) y la finalidad (para). Tener en cuenta las siguientes premisas para crear HUs
</p>
<ul>
  <li>Solo redactar HU que empiecen como usuario, no existe el factor de hacerlo com empresa o institución.</li>
  <li>Las HU utilizan un lenguaje no técnico para ofrecer contexto al equipo.</li>
  <li>Las HU no deben expresar detalles implementativos o soluciones a la necesidad que la HU expone ( en la descripción de la HU si que se podrían llegar a poner sugerencias).</li>
</ul>
<p></p>

<h2>3. Posiciones de un equipo agile</h2>

<p>Product Owner (PO): es el encargado de tratar con el cliente y expresar sus necesidades en forma de historias de usuario.</p>
<p><Developers:  proponen y generan soluciones implementativas a las necesidades expresadas por el PO./p>
<p>Scrum Master (SM): Para que el PO y los propios developers no se molesten en el flujo de trabajo el SM es el encargado de gestionar al equipo de forma interna y hacer que todo fluya. E.g un developer necesita ayuda de otro para realizar una HU, pero el otro esta muy focused haciendo su HU y pararla en ese momento supone un coste muy alto. Para que el developer que necesita ayuda no interfiera en el flujo de trabajo del otro developer le expresa su problema al SM y este es el encargado de saber cual es el mejor momento para que los dos developers trabajen juntos. En la posición de SM básicamente se encarga de ir hablando con los developers y el PO para saber cuales son sus inquietudes y necesidades y intentar satisfacerlas de la mejor manera.</p>
<p>Quality Assurance (QA): Es la persona encargada de asegurarse que todo lo que se entrega tanto al cliente como al usuario final cumple unos estándares mínimos de calidad.</p>

<h2>4. Diseño emergente</h2>
  
<p>Hay varias maneras de plantear soluciones y de arquitecturizar un plan, pero podríamos segmentar-las en dos tipos. El primero consiste en planear todo al máximo (y esperar a que el plan salga tal y como lo planeaste). La segunda opción consiste en hacer pasos pequeños, tener claro un objetivo, pero no planificar todo de punta a punta, sino construir y plantear soluciones a medida que emergen ideas y se van proporcionando soluciones.</p>
<p>Un spyke consiste en un diseño que emerge cuando consigues que funcione por primera vez una idea. Hay tres posibles maneras de actuar después de hacer un spyke:
</p>
<ul>
  <li>Hacer refactor entero.</li>
  <li>Hacer un refactor por partes.</li>
  <li>No hacer nada.</li>
</ul>

<h2>5. Continuos Integration (CI) and Continous Deployment (CD)</h2>

<p>Hemos comentado que en Agile se pretende tener un bucle de feedback constante, es para ello que se utilizan sistemas de Integración Continua (CI) y Despliegue Contínuo (CD).
</p>
  
<p>Que es CI? Basicamente este flujo se encarga de que los cambios que subes a un repositorio estén integrados. Lo hace a través de una serie de ordenes que se recogen en “pipes”. Si pasan las pipes se sube el cambio al repositorio y, normalmente, se suele desplegar en un entorno (esta ultima parte corresponde al flujo de CD).
</p>
<p>Que es CD? objetivo es saber que el developer ha hecho un cambio. Desplegándolo y mostrándolo en un entorno.</p>
  
<p>Como se gestiona el CI/CD? Cómo solventamos el problema de ir deployeando en un entorno de manera automática. Antes lo gestionabas con Jenkins. Jenkins es un software que se instala en algún ordenador que actúa como PC y permite ejecutar procesos ante un push a un repositorio. Ahora estos automatismos que hacías con Jenkins lo puedes gestionar con herramientas con Gitlab o Github con las pipelines de Github, CircleCI, etc. Cada vez que alguien deployea ejecuta la pipeline asociada. 
</p>
  
<p>Que son los “runners”? Un runner, consiste en un contenedor docker que se ejecuta, en el puedes controlar y ejecutar pipes. Estos runners pueden ser máquinas que puedes configurar tu o puedes usar algunas maquinas ya configuradas. Si comiteas en un repositorio configurado con CI/CD mira las pipes y ve cual esta asociada a tu rama y la ejecuta, si pasa los tests de las pipes sube el cambio al entorno de desarrollo.
</p>

<p>Porque CD? El problema es que lo que se construye o desarrolla, lo tiene que ir viendo lo más rápido posible el resto de la empresa, más tiempo pasa entre que construyes y ven, peor. Hacer integración continua no tiene nada que ver con hacer deploy a producción (eso es la integración final). </p>

<p>Para mi hay varios niveles de CI:</p>
<ul>
  <li>Nivel 1: Hay un único entorno donde todos los developers ven el resultado de integrar el trabajo commiteado de todos los developers. Este nivel es imprescindible para cualquiera de las estrategias que quieran seguir CI correctamente.
</li>
  <li>Nivel 2: El resto de la gente de la empresa ve lo que los developers están haciendo, en directo, o como mucho, día a día. Es importante aplicar este segundo nivel en la medida en la que estemos innovando en la parte de producto y exista incertidumbre sobre las posibles soluciones a nivel global.
</li>
  <li>Nivel 3: Los usuarios finales ven lo que están haciendo los developers en directo, o como mucho, día a día. Esta opción casi nunca está dentro del 80/20 de costes-beneficios.
</li>
</ul>
  
<p>En Integración Continua (CI) no sueles querer tener a los usuarios finales, por que tu quieres que los usuarios finales usen una version del proyecto que se desarrolla que tenga poco riesgo de fallar. Si cada cambio que realiza cada developer les llega a los usuarios finales, tienes que asegurarte de que algo frenará el cambio si el cambio es “malo" o “peligroso”. Esto requiere tener automatismos que prueban el programa antes de desplegarlo, que garanticen que “cumple” con unos mínimos de funcionalidad establecidos. Si el developer sube algo y rompe un entorno que solo usa la empresa internamente, pues no pasa nada, pero si lo usan los clientes, puedes generar problemas. Por ello, lo importante suele ser que quien te paga, vea lo que haces día a día en un entorno de desarrollo. De este modo obtienes un sistema de feedback rápido, así cuando te desvíes de las necesidades u objetivo del cliente, te lo dirá al momento, y no tendrás que rehacer casi nada, el coste al cambio sera mínimo. Si quien te paga no lo ve día a día, luego te dirá las cosas al final, y llorarás para cambiarlo todo. Obviamente si quien te paga quiere asegurarse de que lo que construye hace match con lo que necesita el usuario final, pues le recomiendo establecer un bucle parecido a este que se ha comentado: una integración continua del producto entre empresa-cliente. Es decir, que cuando la empresa lo que ve en el entorno de desarrollo (developers-empresa) le guste, que lo subamos a producción (pero esto ya es problema de la empresa en realidad). Si la empresa prefiere recibir el feedback de los usuarios al final, pues ellos sabrán, eso le debe importar a quien lleve la empresa, de no hacerlo se podría aconsejar a la empresa que no posterguen demasiado el canal de entregas con sus usuarios.
</p>
  
<p>⚠️ Para tener CI debemos tener solo una única rama, dado que si tienes más de una rama pasa demasiado tiempo desde que decides, hasta que recibes las consecuencias de tu decisión.</p>
<p></p>
  
<p>Suele haber dos maneras de pensar en CD:</p>
  <ul>
  <li>
    Tener dos ramas (balanza entre velocidad y seguridad) contra más velocidad más riesgos, contra más seguridad más lento vas dado que para deployear tardas más. No es recomendable. La primera rama sirve para hacer CI, la segunda es la que pullea todo el mundo y se hacen los merge requests para lanzar a producción. 
  </li>
  <li>
Tener 1 rama. Solo hay una rama, entonces todo se pushea a esa rama. Puede existir la posibilidad que se añadan tags por deploy. De este modo si se rompe el entorno puedes volver a X tag. En caso de tener tags no es recomendable fijar el tag de manera permanente o cada X tiempo, lo suyo es que el entorno siempre este en verde.
  </li>
</ul>
  
<h2>6. Despliegue isolado</h2>

<p>Muchas veces cuando desarrollamos en un entorno este depende de varios factores físicos como la RAM, la Memoria, el procesador, etc. Incluso el Sistema Operativo y otros programas que forman parte del entorno de trabajo. Como podemos desplegar entornos agnósticos y isolados que sean todos iguales? Una posible solución son las Virtual Private Servers (VPSs).
Los VPS son servicios que ofrecen grandes compañías de servidores. Estas compañías ofrecen una serie de recursos virtualizados de un servidor mucho mayor que alojan.</p>
  
<p>Qué ofrecen las VPSs respecto a otros entornos? Principalmente ofrecen dos cosas; poder desplegar entornos “on demand” permitiendo una rápida escalabilidad de recursos, pero también te ofrecen un entorno limpio y controlado donde desplegar tu entorno de desarrollo (e.j. con el ubuntu 20.04, todas las máquinas que contrates las puedes contratar con ese ubuntu, así que todas partirán de la misma base, numero de cores, memoria, etc.).</p>
