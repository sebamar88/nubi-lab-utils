# DiffUtils

> **Categoría:** Utilities | **[⬅️ Volver al índice](Home)**

#### DiffUtils

```ts
class DiffUtils {
    static diff(
        old: Record<string, unknown>,
        new_: Record<string, unknown>
    ): DiffResult;
    static createPatch(
        old: Record<string, unknown>,
        new_: Record<string, unknown>
    ): Patch[];
    static applyPatch<T>(obj: T, patches: Patch[]): T;
    static deepEqual(obj1: unknown, obj2: unknown): boolean;
}

interface Patch {
    op: "add" | "remove" | "replace";
    path: string;
    value?: unknown;
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
import { DiffUtils } from "bytekit/diffutils";

// Importación desde el índice principal
import { DiffUtils } from "bytekit";
```

---

**💡 ¿Encontraste un error o tienes una sugerencia?** [Abre un issue](https://github.com/sebamar88/bytekit/issues) o contribuye al proyecto.
