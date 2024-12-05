# Visitor
**También llamado:** Visitantees un patrón de diseño de comportamiento que te permite separar algoritmos de los objetos sobre los que operan.

![Texto alternativo](/img/imagen12.png)


## Problema
Imagina que tu equipo desarrolla una aplicación que funciona con información geográfica estructurada como un enorme grafo. Cada nodo del grafo puede representar una entidad compleja, como una ciudad, pero también cosas más específicas, como industrias, áreas turísticas, etc. Los nodos están conectados con otros si hay un camino entre los objetos reales que representan. Técnicamente, cada tipo de nodo está represe

![Texto alternativo](/img/imagen13.png)

En cierto momento, te surge la tarea de implementar la exportación del grafo a formato XML. Al principio, el trabajo parece bastante sencillo. Planificaste añadir un método de exportación a cada clase de nodo y después aprovechar la recursión para recorrer cada nodo del grafo, ejecutando el método de exportación. La solución era sencilla y elegante: gracias al polimorfismo, no acoplabas el código que invocaba el método de exportación a clases concretas de nodos.

Lamentablemente, el arquitecto del sistema no te permitió alterar las clases de nodo existentes. Dijo que el código ya estaba en producción y no quería arriesgarse a que se descompusiera por culpa de un potencial error en tus cambios.

![Texto alternativo](/img/imagen14.png)


## Solución
El patrón Visitor sugiere que coloques el nuevo comportamiento en una clase separada llamada visitante, en lugar de intentar integrarlo dentro de clases existentes. El objeto que originalmente tenía que realizar el comportamiento se pasa ahora a uno de los métodos del visitante como argumento, de modo que el método accede a toda la información necesaria contenida dentro del objeto.

## Analogia en el mundo real
![Texto alternativo](/img/imagen15.png)

Imagina un experimentado agente de seguros que está deseoso de conseguir nuevos clientes. Puede visitar todos los edificios de un barrio, intentando vender seguros a todo aquel que se va encontrando. Dependiendo del tipo de organización que ocupe el edificio, puede ofrecer pólizas de seguro especializadas:
1. Si es una cafetería, vende seguros contra incendios e inundaciones.

2. Si es un banco, vende seguros contra robos.

## Estructura
![Texto alternativo](/img/imagen16.png)

1. La interfaz Visitante declara un grupo de métodos visitantes que pueden tomar elementos concretos de una estructura de objetos como argumentos. Estos métodos pueden tener los mismos nombres si el programa está escrito en un lenguaje que soporte la sobrecarga, pero los tipos de sus parámetros deben ser diferentes.
2. Cada Visitante Concreto implementa varias versiones de los mismos comportamientos, personalizadas para las distintas clases de elemento concreto.
3. La interfaz Elemento declara un método para “aceptar” visitantes. Este método deberá contar con un parámetro declarado con el tipo de la interfaz visitante.
4. Cada Elemento Concreto debe implementar el método de aceptación. El propósito de este método es redirigir la llamada al método adecuado del visitante correspondiente a la clase de elemento actual. Piensa que, aunque una clase base de elemento implemente este método, todas las subclases deben sobrescribir este método en sus propias clases e invocar el método adecuado en el objeto visitante.
5. El Cliente representa normalmente una colección o algún otro objeto complejo (por ejemplo, un árbol Composite). A menudo, los clientes no son conscientes de todas las clases de elemento concreto porque trabajan con objetos de esa colección a través de una interfaz abstracta.


## Pseudocódigo
En este ejemplo, el patrón Visitor añade soporte de exportación XML a la jerarquía de clases de formas geométricas.

![Texto alternativo](/img/imagen17.png)

 
 ## Aplicabilidad
 **Utiliza el patrón Visitor cuando necesites realizar una operación sobre todos los elementos de una compleja estructura de objetos (por ejemplo, un árbol de objetos).**

   El patrón Visitor te permite ejecutar una operación sobre un grupo de objetos con diferentes clases, haciendo que un objeto visitante implemente distintas variantes de la misma operación que correspondan a todas las clases objetivo.

 **Utiliza el patrón Visitor para limpiar la lógica de negocio de comportamientos auxiliares.**

   El patrón te permite hacer que las clases primarias de tu aplicación estén más centradas en sus trabajos principales extrayendo el resto de los comportamientos y poniéndolos dentro de un grupo de clases visitantes.

**Utiliza el patrón cuando un comportamiento solo tenga sentido en algunas clases de una jerarquía de clases, pero no en otras.**

## Ejemplo de Código
```javascript
// La interfaz elemento declara un método `accept` (aceptar) que
// toma la interfaz visitante base como argumento.
interface Shape is
    method move(x, y)
    method draw()
    method accept(v: Visitor)

// Cada clase de elemento concreto debe implementar el método
// `accept` de tal manera que invoque el método del visitante
// que corresponde a la clase del elemento.
class Dot implements Shape is
    // ...

    // Observa que invocamos `visitDot`, que coincide con el
    // nombre de la clase actual. De esta forma, hacemos saber
    // al visitante la clase del elemento con el que trabaja.
    method accept(v: Visitor) is
        v.visitDot(this)

class Circle implements Shape is
    // ...
    method accept(v: Visitor) is
        v.visitCircle(this)

class Rectangle implements Shape is
    // ...
    method accept(v: Visitor) is
        v.visitRectangle(this)

class CompoundShape implements Shape is
    // ...
    method accept(v: Visitor) is
        v.visitCompoundShape(this)


// La interfaz Visitor declara un grupo de métodos de visita que
// se corresponden con clases de elemento. La firma de un método
// de visita permite al visitante identificar la clase exacta
// del elemento con el que trata.
interface Visitor is
    method visitDot(d: Dot)
    method visitCircle(c: Circle)
    method visitRectangle(r: Rectangle)
    method visitCompoundShape(cs: CompoundShape)

// Los visitantes concretos implementan varias versiones del
// mismo algoritmo, que puede funcionar con todas las clases de
// elementos concretos.
//
// Puedes disfrutar de la mayor ventaja del patrón Visitor si lo
// utilizas con una estructura compleja de objetos, como un
// árbol Composite. En este caso, puede ser de ayuda almacenar
// algún estado intermedio del algoritmo mientras ejecutas los
// métodos del visitante sobre varios objetos de la estructura.
class XMLExportVisitor implements Visitor is
    method visitDot(d: Dot) is
        // Exporta la ID del punto (dot) y centra las
        // coordenadas.

    method visitCircle(c: Circle) is
        // Exporta la ID del círculo y centra las coordenadas y
        // el radio.

    method visitRectangle(r: Rectangle) is
        // Exporta la ID del rectángulo, las coordenadas de
        // arriba a la izquierda, la anchura y la altura.

    method visitCompoundShape(cs: CompoundShape) is
        // Exporta la ID de la forma, así como la lista de las
        // ID de sus hijos.


// El código cliente puede ejecutar operaciones del visitante
// sobre cualquier grupo de elementos sin conocer sus clases
// concretas. La operación `accept` dirige una llamada a la
// operación adecuada del objeto visitante.
class Application is
    field allShapes: array of Shapes

    method export() is
        exportVisitor = new XMLExportVisitor()

        foreach (shape in allShapes) do
            shape.accept(exportVisitor)