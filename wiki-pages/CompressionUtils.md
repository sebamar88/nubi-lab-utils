# CompressionUtils

> **Categoría:** Utilities | **[⬅️ Volver al índice](Home)**

#### CompressionUtils

```ts
class CompressionUtils {
    static compress(str: string): string;
    static decompress(compressed: string): string;
    static base64Encode(str: string): string;
    static base64Decode(str: string): string;
    static base64UrlEncode(str: string): string;
    static base64UrlDecode(str: string): string;
    static serializeCompressed(obj: unknown): string;
    static deserializeCompressed(compressed: string): unknown;
    static getCompressionRatio(original: string, compressed: string): number;
    static minifyJSON(json: string): string;
    static prettyJSON(json: string, indent?: number): string;
    static async gzip(str: string): Promise<Buffer | string>;
    static async gunzip(data: Buffer | string): Promise<string>;
    static async deflate(str: string): Promise<Buffer | string>;
    static async inflate(data: Buffer | string): Promise<string>;
    static getSize(str: string): number;
    static formatBytes(bytes: number, decimals?: number): string;
}
```

## API surface (pnpm info) / Métodos expuestos

`pnpm info bytekit readme` ahora lista todos los exports públicos:

## ApiClient Details / Detalles del ApiClient

-   `baseUrl`: **EN** required prefix for relative endpoints. **ES** prefijo requerido para endpoints relativos.
-   `defaultHeaders`: **EN** shared headers merged per request. **ES** cabeceras comunes que se combinan en cada request.
-   `locale` + `errorMessages`: **EN** localized HTTP errors. **ES** mensajes localizados por código HTTP.
-   `fetchImpl`: **EN** inject your own fetch (tests, custom environments). **ES** inyectá tu propio `fetch` (tests o entornos custom).
-   `retryPolicy`: **EN** configure automatic retries with exponential backoff. **ES** configura reintentos automáticos con backoff exponencial.
-   `circuitBreaker`: **EN** configure circuit breaker to prevent cascading failures. **ES** configura circuit breaker para evitar fallos en cascada.

Each `request` (and `get`, `post`, `put`, `patch`, `delete`) accepts / Cada request acepta:

-   `searchParams`: **EN** serializes to URLSearchParams. **ES** se serializa automáticamente.
-   `body`: **EN** strings, serializable objects, or `FormData`. **ES** strings, objetos serializables o `FormData`.
-   `errorLocale`: **EN** override language per request. **ES** forzá un idioma específico.
-   Native `RequestInit` fields (`headers`, `signal`, etc.).

```ts
import { HttpError } from "bytekit";

try {
    await http.get("/users");
} catch (error) {
    if (error instanceof HttpError) {
        console.error("Server error", error.status, error.body);
    }
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
import { CompressionUtils } from "bytekit/compressionutils";

// Importación desde el índice principal
import { CompressionUtils } from "bytekit";
```

---

**💡 ¿Encontraste un error o tienes una sugerencia?** [Abre un issue](https://github.com/sebamar88/bytekit/issues) o contribuye al proyecto.
