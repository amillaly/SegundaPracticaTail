---
sidebar_position: 6
---

# Chain of Responsibility

**También llamado:** Cadena de responsabilidad

El patrón **Chain of Responsibility** es un patrón de diseño de comportamiento que permite que múltiples objetos tengan la oportunidad de manejar una solicitud, sin que el remitente conozca qué objeto se hará cargo. Los objetos receptores están organizados en una cadena y la solicitud pasa a lo largo de la cadena hasta que un objeto la maneja.

---

## Problema

Imagina que estás desarrollando un sistema de procesamiento de solicitudes para una empresa. Las solicitudes pueden ser de diferentes tipos, como autorizaciones de gastos, permisos de vacaciones o aprobación de documentos. 

Inicialmente, cada solicitud pasa al gerente directo del solicitante. Si el gerente no puede manejar la solicitud (por ejemplo, por exceder su límite de autorización), se pasa al siguiente nivel, como un director o un vicepresidente.

Sin un diseño adecuado, este flujo de responsabilidad podría llevar a un código lleno de condicionales y difícil de mantener, ya que cada nivel tendría que conocer explícitamente al siguiente.

---

## Solución

El patrón **Chain of Responsibility** permite construir una cadena de manejadores para las solicitudes. Cada manejador procesa la solicitud o la pasa al siguiente en la cadena.

Esto asegura que el código sea más flexible y fácil de mantener, ya que puedes añadir, quitar o reorganizar los manejadores sin afectar a otros.


## Estructura

![Ilustraciòn 1](/img/imagen23.png)


1. **Handler (Manejador):** Define una interfaz común para manejar solicitudes. Puede contener una referencia al siguiente manejador en la cadena.
2. **ConcreteHandler (Manejador Concreto):** Implementa el manejo de las solicitudes y decide si las procesa o las pasa al siguiente manejador.
3. **Client (Cliente):** Inicia la solicitud y la envía al primer manejador de la cadena.

---

## Pseudocódigo

```java
// Clase base para manejadores en la cadena.
abstract class Handler {
    private Handler next;

    public Handler setNext(Handler next) {
        this.next = next;
        return next;
    }

    public void handleRequest(String request) {
        if (next != null) {
            next.handleRequest(request);
        }
    }
}

// Manejadores concretos que procesan solicitudes específicas.
class Manager extends Handler {
    public void handleRequest(String request) {
        if (request.equals("small_expense")) {
            System.out.println("Manager aprueba la solicitud de gasto pequeño.");
        } else {
            super.handleRequest(request);
        }
    }
}

class Director extends Handler {
    public void handleRequest(String request) {
        if (request.equals("large_expense")) {
            System.out.println("Director aprueba la solicitud de gasto grande.");
        } else {
            super.handleRequest(request);
        }
    }
}

class VicePresident extends Handler {
    public void handleRequest(String request) {
        System.out.println("Vicepresidente aprueba cualquier solicitud restante.");
    }
}

// Ejemplo de cliente configurando la cadena.
public class Client {
    public static void main(String[] args) {
        Handler manager = new Manager();
        Handler director = new Director();
        Handler vp = new VicePresident();

        manager.setNext(director).setNext(vp);

        manager.handleRequest("small_expense"); // Manager maneja esto.
        manager.handleRequest("large_expense"); // Director maneja esto.
        manager.handleRequest("other");         // VP maneja esto.
    }
}
```

---

## Aplicabilidad

- **Cuando esperas que varias clases puedan manejar una solicitud.** Permite que los objetos se conecten dinámicamente en la cadena en tiempo de ejecución.
- **Cuando quieres evitar acoplar al remitente de la solicitud con los receptores concretos.** El cliente no necesita conocer el orden ni los detalles de los manejadores.
- **Cuando quieres añadir o cambiar manejadores sin afectar a otros componentes del programa.**

---

## Ventajas

1. **Reducción de acoplamiento:** El cliente no necesita conocer quién manejará la solicitud.
2. **Facilidad de extensión:** Es sencillo añadir nuevos manejadores a la cadena.
3. **Flexibilidad:** El orden de los manejadores puede cambiar dinámicamente.

---

## Desventajas

1. **No hay garantía de que la solicitud será manejada:** Si ningún manejador toma la solicitud, esta puede perderse.
2. **Depuración difícil:** Con cadenas largas, rastrear qué manejador procesó una solicitud puede ser complicado.

---

## Ejemplo en el Mundo Real

- **Sistemas de soporte técnico:** Una solicitud de soporte puede pasar por varios niveles, desde atención básica al cliente hasta un especialista, dependiendo de su complejidad.
- **Sistemas de autorización:** Las solicitudes de aprobación pasan a través de varios niveles jerárquicos, desde el gerente hasta el director general.
