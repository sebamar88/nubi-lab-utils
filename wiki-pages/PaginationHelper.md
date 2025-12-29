# PaginationHelper

> **Categoría:** Utilities | **[⬅️ Volver al índice](Home)**

#### PaginationHelper

```ts
class PaginationHelper {
    constructor(items: unknown[], options?: PaginationOptions);
    getCurrentPage(): unknown[];
    next(): void;
    previous(): void;
    goToPage(page: number): void;
    getState(): PaginationState;
}

function createPaginator(
    items: unknown[],
    options?: PaginationOptions
): PaginationHelper;

interface PaginationState {
    currentPage: number;
    pageSize: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    offset: number;
    limit: number;
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
import { PaginationHelper } from "bytekit/paginationhelper";

// Importación desde el índice principal
import { PaginationHelper } from "bytekit";
```

---

**💡 ¿Encontraste un error o tienes una sugerencia?** [Abre un issue](https://github.com/sebamar88/bytekit/issues) o contribuye al proyecto.
