# CryptoUtils

> **Categoría:** Utilities | **[⬅️ Volver al índice](Home)**

#### CryptoUtils

```ts
class CryptoUtils {
    static generateToken(bytes?: number): string;
    static generateUUID(): string;
    static base64Encode(str: string): string;
    static base64Decode(str: string): string;
    static base64UrlEncode(str: string): string;
    static base64UrlDecode(str: string): string;
    static async hash(str: string): Promise<string>;
    static async verifyHash(str: string, hash: string): Promise<boolean>;
    static constantTimeCompare(a: string, b: string): boolean;
    static async hmac(message: string, secret: string): Promise<string>;
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
import { CryptoUtils } from "bytekit/cryptoutils";

// Importación desde el índice principal
import { CryptoUtils } from "bytekit";
```

---

**💡 ¿Encontraste un error o tienes una sugerencia?** [Abre un issue](https://github.com/sebamar88/bytekit/issues) o contribuye al proyecto.
