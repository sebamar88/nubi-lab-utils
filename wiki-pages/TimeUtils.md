# TimeUtils

> **Categoría:** Helpers | **[⬅️ Volver al índice](Home)**

#### TimeUtils

```ts
class TimeUtils {
    static now(): number;
    static sleep(ms: number): Promise<void>;
    static debounce<T extends (...args: unknown[]) => unknown>(
        fn: T,
        delay: number
    ): T;
    static throttle<T extends (...args: unknown[]) => unknown>(
        fn: T,
        delay: number
    ): T;
    static timeout<T>(promise: Promise<T>, ms: number): Promise<T>;
    static retry<T>(fn: () => Promise<T>, options?: RetryOptions): Promise<T>;
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
import { TimeUtils } from "bytekit/timeutils";

// Importación desde el índice principal
import { TimeUtils } from "bytekit";
```

---

**💡 ¿Encontraste un error o tienes una sugerencia?** [Abre un issue](https://github.com/sebamar88/bytekit/issues) o contribuye al proyecto.
