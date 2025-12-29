# Validator

> **Categoría:** Helpers | **[⬅️ Volver al índice](Home)**

#### Validator

```ts
class Validator {
    static isEmail(email: string): boolean;
    static isEmpty(value: unknown): boolean;
    static minLength(value: string, min: number): boolean;
    static maxLength(value: string, max: number): boolean;
    static matches(value: string, pattern: RegExp): boolean;
    static isUrl(url: string): boolean;
    static isInternationalPhone(phone: string): boolean;
    static isPhoneE164(phone: string): boolean;
    static isUUIDv4(uuid: string): boolean;
    static isLocalPhone(phone: string, locale?: string): boolean;
    static isDni(dni: string, locale?: string): boolean;
    static isCuit(cuit: string): boolean;
    static isCbu(cbu: string): boolean;
    static isStrongPassword(
        password: string,
        options?: PasswordOptions
    ): boolean;
    static isDateRange(
        date: Date | string,
        from: Date | string,
        to: Date | string
    ): boolean;
    static isOneTimeCode(code: string, length?: number): boolean;
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
import { Validator } from "bytekit/validator";

// Importación desde el índice principal
import { Validator } from "bytekit";
```

---

**💡 ¿Encontraste un error o tienes una sugerencia?** [Abre un issue](https://github.com/sebamar88/bytekit/issues) o contribuye al proyecto.
