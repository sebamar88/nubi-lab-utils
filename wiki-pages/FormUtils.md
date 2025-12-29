# FormUtils

> **Categoría:** Helpers | **[⬅️ Volver al índice](Home)**

#### FormUtils

```ts
class FormUtils {
    constructor(config: FormConfig);
    setValue(field: string, value: unknown): void;
    getValue(field: string): unknown;
    getFieldError(field: string): string;
    touchField(field: string): void;
    isTouched(field: string): boolean;
    isDirty(field: string): boolean;
    async validateField(field: string): Promise<string | null>;
    async validate(): Promise<Record<string, string>>;
    async submit(): Promise<boolean>;
    getState(): FormState;
    createBinding(field: string): FieldBinding;
    reset(): void;
    serialize(): Record<string, unknown>;
    deserialize(data: Record<string, unknown>): void;
}

function createForm(config: FormConfig): FormUtils;

class Validators {
    static required(value: unknown): boolean;
    static email(value: string): boolean;
    static minLength(value: string, min: number): boolean;
    static maxLength(value: string, max: number): boolean;
    static pattern(value: string, pattern: RegExp): boolean;
    static url(value: string): boolean;
    static match(value: string, other: string): boolean;
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
import { FormUtils } from "bytekit/formutils";

// Importación desde el índice principal
import { FormUtils } from "bytekit";
```

---

**💡 ¿Encontraste un error o tienes una sugerencia?** [Abre un issue](https://github.com/sebamar88/bytekit/issues) o contribuye al proyecto.
