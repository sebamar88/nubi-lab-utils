# ResponseValidator

> **Categoría:** Core | **[⬅️ Volver al índice](Home)**

#### ResponseValidator

```ts
class ResponseValidator {
    static validate(data: unknown, schema: ValidationSchema): ValidationResult;
    static validateArray(
        data: unknown[],
        schema: ValidationSchema
    ): ValidationResult;
}

interface ValidationSchema {
    type: string;
    properties?: Record<string, ValidationSchema>;
    required?: string[];
    pattern?: RegExp;
    minimum?: number;
    maximum?: number;
    minLength?: number;
    maxLength?: number;
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
import { ResponseValidator } from "bytekit/responsevalidator";

// Importación desde el índice principal
import { ResponseValidator } from "bytekit";
```

---

**💡 ¿Encontraste un error o tienes una sugerencia?** [Abre un issue](https://github.com/sebamar88/bytekit/issues) o contribuye al proyecto.
