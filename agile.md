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
