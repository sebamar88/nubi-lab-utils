# RetryPolicy

> **Categoría:** Core | **[⬅️ Volver al índice](Home)**

#### RetryPolicy

```ts
class RetryPolicy {
    constructor(config: RetryPolicyConfig);
    async execute<T>(fn: () => Promise<T>): Promise<T>;
    getAttempts(): number;
    getRemainingAttempts(): number;
}

class CircuitBreaker {
    constructor(config: CircuitBreakerConfig);
    async execute<T>(fn: () => Promise<T>): Promise<T>;
    getState(): CircuitBreakerState;
    reset(): void;
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
import { RetryPolicy } from "bytekit/retrypolicy";

// Importación desde el índice principal
import { RetryPolicy } from "bytekit";
```

---

**💡 ¿Encontraste un error o tienes una sugerencia?** [Abre un issue](https://github.com/sebamar88/bytekit/issues) o contribuye al proyecto.
