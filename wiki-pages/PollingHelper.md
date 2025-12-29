# PollingHelper

> **Categoría:** Utilities | **[⬅️ Volver al índice](Home)**

#### PollingHelper

```ts
class PollingHelper {
    constructor(fn: () => Promise<unknown>, options?: PollingOptions);
    async start(): Promise<PollingResult>;
    stop(): void;
}

function createPoller(
    fn: () => Promise<unknown>,
    options?: PollingOptions
): PollingHelper;

interface PollingResult {
    success: boolean;
    attempts: number;
    lastResult: unknown;
    totalTimeMs: number;
}
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
import { PollingHelper } from "bytekit/pollinghelper";

// Importación desde el índice principal
import { PollingHelper } from "bytekit";
```

---

**💡 ¿Encontraste un error o tienes una sugerencia?** [Abre un issue](https://github.com/sebamar88/bytekit/issues) o contribuye al proyecto.
