# CacheManager

> **Categoría:** Utilities | **[⬅️ Volver al índice](Home)**

#### CacheManager

```ts
class CacheManager {
    constructor(options?: CacheManagerOptions);
    set<T>(key: string, value: T, ttl?: number): void;
    get<T>(key: string): T | null;
    has(key: string): boolean;
    remove(key: string): void;
    clear(): void;
    async getOrCompute<T>(
        key: string,
        fn: () => Promise<T>,
        ttl?: number
    ): Promise<T>;
    invalidatePattern(pattern: string): void;
    getStats(): CacheStats;
}

function createCacheManager(options?: CacheManagerOptions): CacheManager;

interface CacheStats {
    hits: number;
    misses: number;
    hitRate: number;
    size: number;
    maxSize: number;
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
import { CacheManager } from "bytekit/cachemanager";

// Importación desde el índice principal
import { CacheManager } from "bytekit";
```

---

**💡 ¿Encontraste un error o tienes una sugerencia?** [Abre un issue](https://github.com/sebamar88/bytekit/issues) o contribuye al proyecto.
