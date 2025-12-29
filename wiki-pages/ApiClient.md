# ApiClient

> **Categoría:** Core | **[⬅️ Volver al índice](Home)**

#### ApiClient

```ts
class ApiClient {
    get<T>(url: string, options?: RequestOptions): Promise<T>;
    post<T>(url: string, body?: unknown, options?: RequestOptions): Promise<T>;
    put<T>(url: string, body?: unknown, options?: RequestOptions): Promise<T>;
    patch<T>(url: string, body?: unknown, options?: RequestOptions): Promise<T>;
    delete<T>(url: string, options?: RequestOptions): Promise<T>;
    getList<T>(
        url: string,
        options?: GetListOptions
    ): Promise<PaginatedResponse<T>>;
    request<T>(
        method: string,
        url: string,
        options?: RequestOptions
    ): Promise<T>;
}

function createApiClient(config: ApiClientConfig): ApiClient;
class HttpError extends Error {
    status: number;
    body: unknown;
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
import { ApiClient } from "bytekit/apiclient";

// Importación desde el índice principal
import { ApiClient } from "bytekit";
```

---

**💡 ¿Encontraste un error o tienes una sugerencia?** [Abre un issue](https://github.com/sebamar88/bytekit/issues) o contribuye al proyecto.
