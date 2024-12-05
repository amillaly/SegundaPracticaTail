---
sidebar_position: 2
---


# Iterator

**También llamado:** Iterador

**Iterator** es un patrón de diseño de comportamiento que permite recorrer elementos de una colección sin exponer su representación interna (como listas, pilas o árboles).

![Texto alternativo](/img/imagen18.png)

## Problema

Imagina que tienes una aplicación que gestiona colecciones de datos, como listas de usuarios, pilas de tareas o árboles de directorios. Inicialmente, estas colecciones sólo necesitaban recorrerse secuencialmente. Sin embargo, los nuevos requerimientos exigen recorridos personalizados: saltar elementos, recorrer al revés o filtrar elementos durante el recorrido.

Si intentas implementar estos comportamientos directamente en las colecciones, su código se vuelve innecesariamente complejo y difícil de mantener. Además, si necesitas iterar de diferentes maneras, tendrías que duplicar la lógica del recorrido en varias partes de tu aplicación. ¿No sería mejor encapsular este comportamiento en un lugar separado, manteniendo la colección limpia y sencilla?

## Solución

El patrón **Iterator** sugiere que crees una clase separada para manejar el recorrido de una colección. Esta clase proporciona una interfaz estándar para acceder a los elementos de la colección, independientemente de su estructura interna. Esto permite que las colecciones mantengan su lógica enfocada en almacenar datos y que el código de iteración se externalice y sea reutilizable.

Por ejemplo, en una aplicación de listas de reproducción, puedes crear iteradores para recorrer canciones en orden normal, al revés o por género. Cada iterador encapsula su lógica de recorrido sin modificar la colección subyacente.

![Texto alternativo](/img/imagen20.png)

## Estructura

### Implementación basada en clases de iteradores

![Texto alternativo](/img/imagen19.png)

1. **La Interfaz de Iterador** define las operaciones necesarias para recorrer una colección, como `hasNext`, `next` y opcionalmente `remove`.
2. **El Iterador Concreto** implementa esta interfaz y contiene toda la lógica necesaria para recorrer una colección específica.
3. **La Colección** declara un método para crear un iterador compatible con su estructura.
4. **El Cliente** usa el iterador para acceder a los elementos de la colección, sin preocuparse por cómo están organizados.

## Pseudocódigo

En este ejemplo, el patrón Iterator permite a un cliente recorrer diferentes tipos de colecciones (listas, pilas) de manera uniforme, ocultando los detalles de implementación interna.

```javascript
// La interfaz del iterador declara operaciones esenciales para un
// recorrido secuencial.
interface Iterator<T> {
    hasNext(): boolean
    next(): T
}

// Iterador concreto para listas.
class ListIterator<T> implements Iterator<T> {
    private list: List<T>
    private position: number = 0

    constructor(list: List<T>) {
        this.list = list
    }

    hasNext(): boolean {
        return this.position < this.list.size()
    }

    next(): T {
        if (!this.hasNext()) {
            throw new Error("No more elements")
        }
        return this.list.get(this.position++)
    }
}

// La interfaz de la colección declara un método para crear
// iteradores.
interface IterableCollection<T> {
    createIterator(): Iterator<T>
}

// Colección concreta: lista.
class List<T> implements IterableCollection<T> {
    private items: T[] = []

    add(item: T) {
        this.items.push(item)
    }

    get(index: number): T {
        return this.items[index]
    }

    size(): number {
        return this.items.length
    }

    createIterator(): Iterator<T> {
        return new ListIterator(this)
    }
}

// Cliente que utiliza iteradores.
const list = new List<number>()
list.add(1)
list.add(2)
list.add(3)

const iterator = list.createIterator()
while (iterator.hasNext()) {
    console.log(iterator.next())
}
```

## Aplicabilidad

**Utiliza el patrón Iterator cuando:**

1. **Necesitas recorrer elementos de una colección compleja sin exponer su estructura interna.**
   - El patrón Iterator encapsula la lógica del recorrido, permitiéndote acceder a los elementos sin conocer detalles sobre cómo se almacenan.

2. **Quieres implementar múltiples formas de recorrer una colección.**
   - Por ejemplo, recorrer de adelante hacia atrás, saltar elementos o aplicar filtros durante la iteración.

3. **Deseas unificar el acceso a diferentes tipos de colecciones.**
   - Un cliente puede usar iteradores genéricos para interactuar con listas, pilas, árboles, etc., sin necesidad de conocer cómo funcionan internamente.

## Beneficios del Patrón Iterator

- Oculta la complejidad de las colecciones y expone sólo las operaciones necesarias.
- Facilita la implementación de recorridos personalizados.
- Promueve el principio de responsabilidad única al separar el almacenamiento de datos del recorrido.
