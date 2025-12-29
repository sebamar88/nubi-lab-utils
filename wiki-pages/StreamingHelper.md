# StreamingHelper

> **Categoría:** Helpers | **[⬅️ Volver al índice](Home)**

#### StreamingHelper

```ts
class StreamingHelper {
    static async streamJsonLines<T>(
        url: string,
        options?: StreamOptions<T>
    ): Promise<StreamResult<T>>;
    static streamSSE<T>(
        url: string,
        options?: SSEOptions<T>
    ): SSESubscription<T>;
    static async downloadStream(
        url: string,
        options?: DownloadOptions
    ): Promise<Blob>;
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
import { StreamingHelper } from "bytekit/streaminghelper";

// Importación desde el índice principal
import { StreamingHelper } from "bytekit";
```

---

**💡 ¿Encontraste un error o tienes una sugerencia?** [Abre un issue](https://github.com/sebamar88/bytekit/issues) o contribuye al proyecto.
