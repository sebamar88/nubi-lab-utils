# ObjectUtils

> **Categoría:** Helpers | **[⬅️ Volver al índice](Home)**

#### ObjectUtils

```ts
class ObjectUtils {
    static isEmpty(obj: unknown): boolean;
    static deepClone<T>(obj: T): T;
    static merge<T>(...objects: Partial<T>[]): T;
    static deepMerge<T>(...objects: Partial<T>[]): T;
    static pick<T>(obj: T, keys: (keyof T)[]): Partial<T>;
    static omit<T>(obj: T, keys: (keyof T)[]): Partial<T>;
    static get<T>(obj: unknown, path: string): T | undefined;
    static set<T>(obj: T, path: string, value: unknown): T;
    static flatten<T>(obj: T, prefix?: string): Record<string, unknown>;
    static unflatten(obj: Record<string, unknown>): Record<string, unknown>;
    static filter<T>(
        obj: T,
        predicate: (key: string, value: unknown) => boolean
    ): Partial<T>;
    static mapValues<T>(obj: T, mapper: (value: unknown) => unknown): T;
    static hasKeys<T>(obj: T, keys: (keyof T)[]): boolean;
    static invert<T>(obj: Record<string, T>): Record<T, string>;
    static groupBy<T>(array: T[], key: keyof T): Record<string, T[]>;
    static indexBy<T>(array: T[], key: keyof T): Record<string, T>;
    static deepEqual(obj1: unknown, obj2: unknown): boolean;
    static size(obj: Record<string, unknown>): number;
    static entries<T>(obj: T): [string, unknown][];
    static fromEntries(entries: [string, unknown][]): Record<string, unknown>;
    static fromKeys<T>(keys: string[], value: T): Record<string, T>;
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
import { ObjectUtils } from "bytekit/objectutils";

// Importación desde el índice principal
import { ObjectUtils } from "bytekit";
```

---

**💡 ¿Encontraste un error o tienes una sugerencia?** [Abre un issue](https://github.com/sebamar88/bytekit/issues) o contribuye al proyecto.
