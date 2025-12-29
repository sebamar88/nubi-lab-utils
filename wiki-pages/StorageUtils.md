# StorageUtils

> **Categoría:** Helpers | **[⬅️ Volver al índice](Home)**

#### StorageUtils

```ts
class StorageUtils {
    constructor(storage?: Storage);
    set<T>(key: string, value: T, ttl?: number): void;
    get<T>(key: string): T | null;
    remove(key: string): void;
    clear(): void;
    has(key: string): boolean;
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
import { StorageUtils } from "bytekit/storageutils";

// Importación desde el índice principal
import { StorageUtils } from "bytekit";
```

---

**💡 ¿Encontraste un error o tienes una sugerencia?** [Abre un issue](https://github.com/sebamar88/bytekit/issues) o contribuye al proyecto.
