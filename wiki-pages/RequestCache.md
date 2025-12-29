# RequestCache

> **Categoría:** Core | **[⬅️ Volver al índice](Home)**

#### RequestCache

```ts
class RequestCache {
    set(key: string, value: unknown, ttl?: number): void;
    get<T>(key: string): T | null;
    has(key: string): boolean;
    remove(key: string): void;
    clear(): void;
    invalidate(pattern: string): void;
    invalidatePattern(pattern: string): void;
    getStats(): CacheStats;
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
import { RequestCache } from "bytekit/requestcache";

// Importación desde el índice principal
import { RequestCache } from "bytekit";
```

---

**💡 ¿Encontraste un error o tienes una sugerencia?** [Abre un issue](https://github.com/sebamar88/bytekit/issues) o contribuye al proyecto.
