# RateLimiter

> **Categoría:** Core | **[⬅️ Volver al índice](Home)**

#### RateLimiter

```ts
class RateLimiter {
    isAllowed(key: string): boolean;
    async waitForAllowance(key: string): Promise<void>;
    getStats(key: string): RateLimiterStats;
    reset(key?: string): void;
}

class SlidingWindowRateLimiter {
    isAllowed(key: string): boolean;
    async waitForAllowance(key: string): Promise<void>;
    getStats(key: string): RateLimiterStats;
    reset(key?: string): void;
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
import { RateLimiter } from "bytekit/ratelimiter";

// Importación desde el índice principal
import { RateLimiter } from "bytekit";
```

---

**💡 ¿Encontraste un error o tienes una sugerencia?** [Abre un issue](https://github.com/sebamar88/bytekit/issues) o contribuye al proyecto.
