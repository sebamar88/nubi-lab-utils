# WebSocketHelper

> **Categoría:** Helpers | **[⬅️ Volver al índice](Home)**

#### WebSocketHelper

```ts
class WebSocketHelper {
    constructor(url: string, options?: WebSocketOptions);
    async connect(): Promise<void>;
    on<T>(event: string, listener: (data: T) => void): void;
    once<T>(event: string, listener: (data: T) => void): void;
    off(event: string, listener: Function): void;
    send<T>(event: string, data: T): void;
    async request<Req, Res>(event: string, data: Req): Promise<Res>;
    onError(listener: (error: Error) => void): void;
    close(): void;
    isConnected(): boolean;
}
```

---

## Enlaces Relacionados

- **[📚 Documentación Principal](https://github.com/sebamar88/bytekit#readme)**
- **[🏠 Índice de Wiki](Home)**
- **[📦 Módulos Helpers](Helpers)**

## Instalación

```bash
npm install bytekit
```

## Importación

```typescript
// Importación específica (recomendado)
import { WebSocketHelper } from "bytekit/websockethelper";

// Importación desde el índice principal
import { WebSocketHelper } from "bytekit";
```

---

**💡 ¿Encontraste un error o tienes una sugerencia?** [Abre un issue](https://github.com/sebamar88/bytekit/issues) o contribuye al proyecto.
