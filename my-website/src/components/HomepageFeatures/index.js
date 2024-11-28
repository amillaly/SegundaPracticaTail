import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Chain of Responsibility',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Command',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
       Es un patrón de diseño de comportamiento que convierte una solicitud en un 
       objeto independiente que contiene toda la información sobre la solicitud. 
       Esta transformación te permite parametrizar los métodos con diferentes 
       solicitudes, retrasar o poner en cola la ejecución de una solicitud y soportar
        operaciones que no se pueden realizar.

      Aplicabilidad:
      Utiliza el patrón Command cuando quieras poner operaciones en cola, programar 
      su ejecución, o ejecutarlas de forma remota.
      </>
    ),
  },
  {
    title: 'Iterator',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: 'Mediator',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: 'Memento',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: 'Observer',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
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
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
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
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
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
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },{
    title: 'Visitor',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
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
        <p>{description}</p>
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
