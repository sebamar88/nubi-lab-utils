# Logger

> **Categoría:** Core | **[⬅️ Volver al índice](Home)**

#### Logger

```ts
class Logger {
    setLevel(level: LogLevel): void;
    child(namespace: string): Logger;
    debug(message: string, data?: unknown): void;
    info(message: string, data?: unknown): void;
    warn(message: string, data?: unknown): void;
    error(message: string, data?: unknown): void;
    log(level: LogLevel, message: string, data?: unknown): void;
    silent(): void;
}

function createLogger(config: LoggerConfig): Logger;
const consoleTransportNode: Transport;
const consoleTransportBrowser: Transport;
```

---

## Enlaces Relacionados

- **[📚 Documentación Principal](https://github.com/sebamar88/bytekit#readme)**
- **[🏠 Índice de Wiki](Home)**
- **[📦 Módulos Core](Core)**

## Instalación

```bash
npm install bytekit
```

## Importación

```typescript
// Importación específica (recomendado)
import { Logger } from "bytekit/logger";

// Importación desde el índice principal
import { Logger } from "bytekit";
```

---

**💡 ¿Encontraste un error o tienes una sugerencia?** [Abre un issue](https://github.com/sebamar88/bytekit/issues) o contribuye al proyecto.
