# Memento
**También llamado:** Recuerdo, Instantánea, Snapshot

**Memento** es un patrón de diseño de comportamiento que te permite guardar y restaurar el estado previo de un objeto sin relevar los detalles de su implementación.

![Texto alternativo](/img/imagen1.png)



## Problema
**Problema**

Imagina que estás desarrollando una aplicación de edición de texto que permite editar, formatear e insertar imágenes. Decides agregar una función de deshacer, una característica estándar esperada por los usuarios. Para implementarla, optas por una solución simple: antes de cada operación, la aplicación guarda el estado de los objetos en un almacenamiento. Cuando el usuario desee deshacer, se restaura el último estado guardado.

El reto está en cómo crear esas "instantáneas" del estado. La solución más directa sería copiar los valores de todos los campos de un objeto, pero esto solo funcionaría si los objetos tienen un acceso abierto a sus contenidos. En la práctica, muchos objetos reales ocultan sus datos importantes en campos privados, lo que complica la creación de las instantáneas.

![Texto alternativo](/img/imagen2.png)

Incluso si los objetos permitieran acceder fácilmente a su estado, esta solución presenta otros problemas. Con el tiempo, si se refactorizan clases o se cambian los campos, también tendrías que modificar las clases responsables de copiar el estado, lo que haría que el código se volviera frágil.

Además, las instantáneas del editor deben incluir múltiples datos, como el texto, la posición del cursor y el desplazamiento. Para almacenarlas, probablemente crearías una clase contenedora con muchos campos públicos para permitir el acceso a estos datos. Sin embargo, exponer el estado interno del editor haría que otras clases dependan de cada pequeño cambio en la clase de la instantánea, lo que afecta la encapsulación y robustez del sistema.

![Texto alternativo](/img/imagen3.png)


Esto plantea un dilema: si expones los detalles internos, las clases se vuelven vulnerables, pero si restringes el acceso, no puedes generar las instantáneas. ¿Existe una mejor manera de implementar la función de "deshacer"?
## Solución
El patrón Memento delega la creación de instantáneas de estado al propietario de ese estado, el objeto originador. Por lo tanto, en lugar de que haya otros objetos intentando copiar el estado del editor desde el “exterior”, la propia clase editora puede hacer la instantánea, ya que tiene pleno acceso a su propio estado.

El patrón sugiere almacenar la copia del estado del objeto en un objeto especial llamado memento. Los contenidos del memento no son accesibles para ningún otro objeto excepto el que lo produjo. Otros objetos deben comunicarse con mementos utilizando una interfaz limitada que pueda permitir extraer los metadatos de la instantánea (tiempo de creación, el nombre de la operación realizada, etc.), pero no el estado del objeto original contenido en la instantánea.

![Texto alternativo](/img/imagen4.png)

## Estructura
**Implementación basada en clases anidadas**
La implementación clásica del patrón se basa en el soporte de clases anidadas, disponible en varios lenguajes de programación populares (como C++, C# y Java).

![Texto alternativo](/img/imagen5.png)

1. La clase Originadora puede producir instantáneas de su propio estado, así como restaurar su estado a partir de instantáneas cuando lo necesita.
2. El Memento es un objeto de valor que actúa como instantánea del estado del originador. Es práctica común hacer el memento inmutable y pasarle los datos solo una vez, a través del constructor.
3. La Cuidadora sabe no solo “cuándo” y “por qué” capturar el estado de la originadora, sino también cuándo debe restaurarse el estado.


## Pseudocódigo
Este ejemplo utiliza el patrón Memento junto al patrón Command para almacenar instantáneas del estado complejo del editor de texto y restaurar un estado previo a partir de estas instantáneas cuando sea necesario.

![Texto alternativo](/img/imagen6.png)

Los objetos de comando actúan como cuidadores. Buscan el memento del editor antes de ejecutar operaciones relacionadas con los comandos. Cuando un usuario intenta deshacer el comando más reciente, el editor puede utilizar el memento almacenado en ese comando para revertirse a sí mismo al estado previo.

La clase memento no declara ningún campo, consultor (getter) o modificador (setter) como público. Por lo tanto, ningún objeto puede alterar sus contenidos. Los mementos se vinculan al objeto del editor que los creó. Esto permite a un memento restaurar el estado del editor vinculado pasando los datos a través de modificadores en el objeto editor. Ya que los mementos están vinculados a objetos de editor específicos, puedes hacer que tu aplicación soporte varias ventanas de editor independientes con una pila centralizada para deshacer.
 
 ## Aplicabilidad
 **Utiliza el patrón Memento cuando quieras producir instantáneas del estado del objeto para poder restaurar un estado previo del objeto.**

 El patrón Memento te permite realizar copias completas del estado de un objeto, incluyendo campos privados, y almacenarlos independientemente del objeto. Aunque la mayoría de la gente recuerda este patrón gracias al caso de la función Deshacer, también es indispensable a la hora de tratar con transacciones (por ejemplo, si debes volver atrás sobre un error en una operación).

 **Utiliza el patrón cuando el acceso directo a los campos, consultores o modificadores del objeto viole su encapsulación.**

 El Memento hace al propio objeto responsable de la creación de una instantánea de su estado. Ningún otro objeto puede leer la instantánea, lo que hace que los datos del estado del objeto original queden seguros.


## Ejemplo de Código

```javascript
// El originador contiene información importante que puede
// cambiar con el paso del tiempo. También define un método para
// guardar su estado dentro de un memento, y otro método para
// restaurar el estado a partir de él.
class Editor {
    private field text, curX, curY, selectionWidth;

    method setText(text) {
        this.text = text;
    }

    method setCursor(x, y) {
        this.curX = x;
        this.curY = y;
    }

    method setSelectionWidth(width) {
        this.selectionWidth = width;
    }

    // Guarda el estado actual dentro de un memento.
    method createSnapshot() {
        // El memento es un objeto inmutable; ese es el motivo
        // por el que el originador pasa su estado a los
        // parámetros de su constructor.
        return new Snapshot(this, text, curX, curY, selectionWidth);
    }
}

// La clase memento almacena el estado pasado del editor.
class Snapshot {
    private field editor;
    private field text, curX, curY, selectionWidth;

    constructor Snapshot(editor, text, curX, curY, selectionWidth) {
        this.editor = editor;
        this.text = text;
        this.curX = curX;
        this.curY = curY;
        this.selectionWidth = selectionWidth;
    }

    // En cierto punto, puede restaurarse un estado previo del
    // editor utilizando un objeto memento.
    method restore() {
        editor.setText(text);
        editor.setCursor(curX, curY);
        editor.setSelectionWidth(selectionWidth);
    }
}

// Un objeto de comando puede actuar como cuidador. En este
// caso, el comando obtiene un memento justo antes de cambiar el
// estado del originador. Cuando se solicita deshacer, restaura
// el estado del originador a partir del memento.
class Command {
    private field backup;

    method makeBackup() {
        backup = editor.createSnapshot();
    }

    method undo() {
        if (backup != null) {
            backup.restore();
        }
    }
    // ...
}```

