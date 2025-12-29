# ErrorBoundary

> **Categoría:** Core | **[⬅️ Volver al índice](Home)**

#### ErrorBoundary

```ts
class ErrorBoundary {
    async execute<T>(fn: () => Promise<T>, context?: ErrorContext): Promise<T>;
    executeSync<T>(fn: () => T, context?: ErrorContext): T;
    wrap<T extends (...args: unknown[]) => Promise<unknown>>(fn: T): T;
    wrapSync<T extends (...args: unknown[]) => unknown>(fn: T): T;
    addHandler(handler: ErrorHandler): void;
    getErrorHistory(limit?: number): ErrorEntry[];
    createErrorReport(): ErrorReport;
}

function getGlobalErrorBoundary(config?: ErrorBoundaryConfig): ErrorBoundary;

class AppError extends Error {
    code: string;
    context?: Record<string, unknown>;
}
class AppValidationError extends AppError {}
class NotFoundError extends AppError {}
class TimeoutError extends AppError {}
class RateLimitError extends AppError {
    retryAfter?: number;
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
import { ErrorBoundary } from "bytekit/errorboundary";

// Importación desde el índice principal
import { ErrorBoundary } from "bytekit";
```

---

**💡 ¿Encontraste un error o tienes una sugerencia?** [Abre un issue](https://github.com/sebamar88/bytekit/issues) o contribuye al proyecto.
