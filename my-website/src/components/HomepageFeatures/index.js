import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Chain of Responsibility',

    Svg: require('@site/static/img/respo.svg').default,

    description: (
      <>
        Es un patrón de diseño de comportamiento que te permite pasar solicitudes 
        a lo largo de una cadena de manejadores. Al recibir una solicitud, 
        cada manejador decide si la procesa o si la pasa al siguiente manejador de la cadena.
      </>
    ),
  },
  {
    title: 'Command',

    Svg: require('@site/static/img/imasvg.svg').default,

    description: (
      <>
       Es un patrón de diseño de comportamiento que convierte una solicitud en un 
       objeto independiente que contiene toda la información sobre la solicitud. 
       Esta transformación te permite parametrizar los métodos con diferentes 
       solicitudes, retrasar o poner en cola la ejecución de una solicitud y soportar
        operaciones que no se pueden realizar.

      Aquí tienes un ejemplo: estás desarrollando un componente GUI, como un menú contextual,
       y quieres que los usuarios puedan configurar opciones del menú que activen operaciones
        cuando un usuario final haga clic sobre ellos.
      </>
    ),
  },
  {
    title: 'Iterator',
    Svg: require('@site/static/img/iterator.svg').default,
    description: (
      <>
        Es un patrón de diseño de comportamiento que te permite recorrer 
        elementos de una colección sin exponer su representación subyacente (lista, pila, árbol, etc.).
      </>
    ),
  },
  {
    title: 'Mediator',
    Svg: require('@site/static/img/mediator.svg').default,
    description: (
      <>
        es un patrón de diseño de comportamiento que te permite reducir las dependencias caóticas entre objetos.
         El patrón restringe las comunicaciones directas entre los objetos, forzándolos a colaborar únicamente
        a través de un objeto mediador.
      </>
    ),
  },
 
  {

    title: 'Memento',
    Svg: require('@site/static/img/momento.svg').default,
    description: (
      <>
        Diseño de comportamiento que te permite guardar y restaurar el estado
         previo de un objeto sin revelar los detalles de su implementación.
      </>
    ),
  },
  {
    title: 'Observer',

    Svg: require('@site/static/img/imgob.svg').default,
    description: (
      <>
        Es un patrón de diseño de comportamiento que te permite definir un mecanismo
        de suscripción para notificar a varios objetos sobre cualquier evento que le
         suceda al objeto que están observando.

         Aplicabilidad:
         Utiliza el patrón cuando algunos objetos de tu aplicación deban observar a 
         otros, pero sólo durante un tiempo limitado o en casos específicos.

      </>
    ),
  },
  {
    title: 'State',

    Svg: require('@site/static/img/imastate.svg').default,
    description: (
      <>
        Diseño de comportamiento que permite a un objeto alterar su comportamiento 
        cuando su estado interno cambia. Parece como si el objeto cambiara su clase.

        Aplicabilidad:
        Utiliza el patrón cuando tengas una clase contaminada con enormes condicionales
        que alteran el modo en que se comporta la clase de acuerdo con los valores actuales
        de los campos de la clase.
      </>
      
    ),
  },{
    title: 'Strategy',
    Svg: require('@site/static/img/imastrategy.svg').default,
    description: (
      <>
        Diseño de comportamiento que te permite definir una familia de algoritmos,
         colocar cada uno de ellos en una clase separada y hacer sus objetos intercambiables.

         Aplicabilidad:
         Utiliza el patrón Strategy cuando tengas muchas clases similares que sólo se 
         diferencien en la forma en que ejecutan cierto comportamiento.


      </>
    ),
  },{
    title: 'Template Method',
    Svg: require('@site/static/img/method (1).svg').default,
    description: (
      <>
        Es un patrón de diseño de comportamiento que define el esqueleto de
         un algoritmo en la superclase pero permite que las subclases sobrescriban 
         pasos del algoritmo sin cambiar su estructura.


      </>
    ),
  },{
    title: 'Visitor',
    Svg: require('@site/static/img/visitor.svg').default,
    description: (
      <>
        Es un patrón de diseño de comportamiento que te permite separar algoritmos
         de los objetos sobre los que operan.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p className={styles.featureText}>{description}</p>
      </div>
    </div>
  );
}


export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
