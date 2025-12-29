# FileUploadHelper

> **Categoría:** Helpers | **[⬅️ Volver al índice](Home)**

#### FileUploadHelper

```ts
class FileUploadHelper {
    static validateFile(
        file: File,
        options?: FileValidationOptions
    ): FileValidationResult;
    static async uploadFile(
        file: File,
        url: string,
        options?: UploadOptions
    ): Promise<UploadResponse>;
    static async uploadChunked(
        file: File,
        url: string,
        options?: ChunkedUploadOptions
    ): Promise<UploadResponse>;
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
import { FileUploadHelper } from "bytekit/fileuploadhelper";

// Importación desde el índice principal
import { FileUploadHelper } from "bytekit";
```

---

**💡 ¿Encontraste un error o tienes una sugerencia?** [Abre un issue](https://github.com/sebamar88/bytekit/issues) o contribuye al proyecto.
