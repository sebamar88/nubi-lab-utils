# EventEmitter

> **Categoría:** Utilities | **[⬅️ Volver al índice](Home)**

#### EventEmitter

```ts
class EventEmitter<
    Events extends Record<string, unknown> = Record<string, unknown>
> {
    on<K extends keyof Events>(
        event: K,
        listener: EventListener<Events[K]>
    ): this;
    once<K extends keyof Events>(
        event: K,
        listener: EventListener<Events[K]>
    ): this;
    off<K extends keyof Events>(
        event: K,
        listener: EventListener<Events[K]>
    ): this;
    removeAllListeners<K extends keyof Events>(event?: K): this;
    async emit<K extends keyof Events>(
        event: K,
        data: Events[K]
    ): Promise<boolean>;
    emitSync<K extends keyof Events>(event: K, data: Events[K]): boolean;
    onError(listener: EventListenerWithError): this;
    listenerCount<K extends keyof Events>(event: K): number;
    getListeners<K extends keyof Events>(event: K): EventListener<Events[K]>[];
    eventNames(): (keyof Events)[];
    setMaxListeners(n: number): this;
    getMaxListeners(): number;
}

function createEventEmitter<
    Events extends Record<string, unknown> = Record<string, unknown>
>(options?: EventEmitterOptions): EventEmitter<Events>;
```

---

## Enlaces Relacionados

- **[📚 Documentación Principal](https://github.com/sebamar88/bytekit#readme)**
- **[🏠 Índice de Wiki](Home)**
- **[📦 Módulos Utilities](Utilities)**

## Instalación

```bash
npm install bytekit
```

## Importación

```typescript
// Importación específica (recomendado)
import { EventEmitter } from "bytekit/eventemitter";

// Importación desde el índice principal
import { EventEmitter } from "bytekit";
```

---

**💡 ¿Encontraste un error o tienes una sugerencia?** [Abre un issue](https://github.com/sebamar88/bytekit/issues) o contribuye al proyecto.
