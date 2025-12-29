# ArrayUtils

> **Categoría:** Helpers | **[⬅️ Volver al índice](Home)**

#### ArrayUtils

```ts
class ArrayUtils {
    static chunk<T>(array: T[], size: number): T[][];
    static flatten<T>(array: unknown[], depth?: number): T[];
    static unique<T>(array: T[], by?: (item: T) => unknown): T[];
    static shuffle<T>(array: T[]): T[];
    static random<T>(array: T[]): T;
    static randomN<T>(array: T[], n: number): T[];
    static zip<T>(...arrays: T[][]): T[][];
    static unzip<T>(array: T[][]): T[][];
    static difference<T>(array1: T[], array2: T[]): T[];
    static intersection<T>(array1: T[], array2: T[]): T[];
    static union<T>(array1: T[], array2: T[]): T[];
    static partition<T>(
        array: T[],
        predicate: (item: T) => boolean
    ): [T[], T[]];
    static sum(array: number[]): number;
    static average(array: number[]): number;
    static min(array: number[]): number;
    static max(array: number[]): number;
    static range(start: number, end: number, step?: number): number[];
    static rotate<T>(array: T[], steps: number): T[];
    static transpose<T>(array: T[][]): T[][];
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
import { ArrayUtils } from "bytekit/arrayutils";

// Importación desde el índice principal
import { ArrayUtils } from "bytekit";
```

---

**💡 ¿Encontraste un error o tienes una sugerencia?** [Abre un issue](https://github.com/sebamar88/bytekit/issues) o contribuye al proyecto.
