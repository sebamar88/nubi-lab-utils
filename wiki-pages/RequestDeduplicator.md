# RequestDeduplicator

> **Categoría:** Core | **[⬅️ Volver al índice](Home)**

#### RequestDeduplicator

```ts
class RequestDeduplicator {
    async execute<T>(key: string, fn: () => Promise<T>): Promise<T>;
    getStats(): DeduplicatorStats;
    getInFlightCount(): number;
    clear(): void;
}
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
import { RequestDeduplicator } from "bytekit/requestdeduplicator";

// Importación desde el índice principal
import { RequestDeduplicator } from "bytekit";
```

---

**💡 ¿Encontraste un error o tienes una sugerencia?** [Abre un issue](https://github.com/sebamar88/bytekit/issues) o contribuye al proyecto.
