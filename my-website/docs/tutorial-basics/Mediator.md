---
sidebar_position: 1
---

# Mediator


**También llamado:** Mediador

El patrón de diseño **Mediator** es un patrón de comportamiento que reduce las dependencias entre objetos comunicándolos a través de un objeto mediador. Este patrón permite que los objetos colaboren de forma desacoplada, haciendo que sus interacciones sean más fáciles de gestionar y modificar.

![Texto alternativo](/img/imagen21.png)

## Problema

Imagina que estás desarrollando un sistema de mensajería donde múltiples componentes, como usuarios, grupos y canales, deben interactuar entre sí. Sin un mediador, los objetos tendrían referencias directas entre sí, creando un sistema rígido con dependencias difíciles de mantener. 

Por ejemplo:
- Si el Usuario A necesita enviar un mensaje al Usuario B, tendría que conocer directamente al Usuario B.
- Si se agrega un nuevo componente, como un canal de comunicación, habría que modificar las clases existentes para integrarlo.

Este acoplamiento fuerte hace que el sistema sea frágil y difícil de escalar.

---

## Solución

El patrón **Mediator** sugiere introducir un objeto mediador para gestionar todas las comunicaciones entre los componentes. En lugar de comunicarse directamente entre ellos, los componentes envían solicitudes al mediador, quien las distribuye adecuadamente.

Esto centraliza las interacciones en un único lugar, eliminando la necesidad de referencias directas entre los componentes y reduciendo el acoplamiento.



## Estructura

![Diagrama Mediator](https://refactoring.guru/images/patterns/diagrams/mediator/structure.png)

1. **Mediator (Interfaz Mediador):** Declara la interfaz para la comunicación entre componentes.
2. **ConcreteMediator (Mediador Concreto):** Implementa la interfaz y centraliza las comunicaciones entre los componentes.
3. **Colleague (Colega):** Es la interfaz o clase base que define los métodos para los objetos que interactuarán a través del mediador.
4. **ConcreteColleague (Colega Concreto):** Implementa la funcionalidad específica de un componente y utiliza el mediador para comunicarse con otros colegas.

---

## Pseudocódigo

En este ejemplo, implementamos el patrón **Mediator** en un sistema de chat:

```java
// Interfaz Mediador
interface Mediator {
    void sendMessage(String message, User sender);
    void addUser(User user);
}

// Mediador Concreto
class ChatMediator implements Mediator {
    private List<User> users = new ArrayList<>();

    @Override
    public void addUser(User user) {
        users.add(user);
    }

    @Override
    public void sendMessage(String message, User sender) {
        for (User user : users) {
            // El mensaje no debe enviarse al remitente
            if (user != sender) {
                user.receiveMessage(message);
            }
        }
    }
}

// Clase Colega
abstract class User {
    protected Mediator mediator;
    protected String name;

    public User(Mediator mediator, String name) {
        this.mediator = mediator;
        this.name = name;
    }

    public abstract void sendMessage(String message);
    public abstract void receiveMessage(String message);
}

// Colega Concreto
class ChatUser extends User {
    public ChatUser(Mediator mediator, String name) {
        super(mediator, name);
    }

    @Override
    public void sendMessage(String message) {
        System.out.println(this.name + " envía: " + message);
        mediator.sendMessage(message, this);
    }

    @Override
    public void receiveMessage(String message) {
        System.out.println(this.name + " recibe: " + message);
    }
}

// Uso del Mediador
public class Main {
    public static void main(String[] args) {
        Mediator chatMediator = new ChatMediator();

        User user1 = new ChatUser(chatMediator, "Alice");
        User user2 = new ChatUser(chatMediator, "Bob");
        User user3 = new ChatUser(chatMediator, "Charlie");

        chatMediator.addUser(user1);
        chatMediator.addUser(user2);
        chatMediator.addUser(user3);

        user1.sendMessage("Hola a todos");
    }
}
```

---

## Aplicabilidad

- **Reduce el acoplamiento:** Utiliza el patrón **Mediator** cuando hay muchas dependencias entre componentes y deseas organizarlas en un lugar central.
- **Fácil mantenimiento:** Ideal cuando necesitas cambiar las interacciones entre componentes sin modificar sus clases directamente.
- **Escalabilidad:** Permite añadir nuevos componentes sin afectar a los existentes.

---

## Ventajas

- Reduce las dependencias entre los componentes.
- Centraliza el control de las interacciones.
- Mejora la mantenibilidad y escalabilidad del sistema.

---

## Desventajas

- El mediador puede convertirse en un punto único de fallo si crece demasiado en complejidad.
- Incrementa el número de clases y abstracciones en el sistema.

---
