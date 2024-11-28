import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
        <p className={styles.cardText}>
        Los patrones de comportamiento tratan con algoritmos y la asignación 
        de responsabilidades entre objetos y se caracterizan por un complejo 
        control de flujo, el cual es difícil manejar en tiempo de ejecución, 
        por lo que se provoca que el enfoque se cambie lejos del control de flujo 
        para concentrarse exclusivamente en la manera en la que los objetos se comunican.
        </p>
        <p className={styles.cardText}>
        Características clave de los patrones de comportamiento:

        1. Desacoplamiento de objetos: Permiten que los objetos 
        interactúen sin conocer los detalles internos de los otros, 
        facilitando cambios sin afectar al sistema completo.

        2. Facilitación de la comunicación: Establecen maneras estándar
         para que los objetos se comuniquen, asegurando cooperación sin 
         depender directamente unos de otros.

        3. Encapsulación de algoritmos y comportamiento: Permiten encapsular
         algoritmos y comportamientos para su reutilización en diferentes contextos.

        4. Distribución de responsabilidades: Promueven la asignación clara 
        de responsabilidades entre clases y objetos, mejorando la claridad y
         mantenibilidad del diseño.
        </p>
        </div>
      </div>
    </header>
  );
}


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
