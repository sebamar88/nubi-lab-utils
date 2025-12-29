# StringUtils

> **Categoría:** Helpers | **[⬅️ Volver al índice](Home)**

#### StringUtils

```ts
class StringUtils {
    static removeDiacritics(str: string): string;
    static slugify(str: string, options?: SlugifyOptions): string;
    static compactWhitespace(str: string): string;
    static capitalize(str: string): string;
    static capitalizeWords(str: string): string;
    static truncate(
        str: string,
        length: number,
        options?: TruncateOptions
    ): string;
    static mask(str: string, options?: MaskOptions): string;
    static interpolate(
        template: string,
        values: Record<string, unknown>,
        options?: InterpolateOptions
    ): string;
    static initials(str: string, limit?: number): string;
    static toQueryString(
        obj: Record<string, unknown>,
        options?: QueryStringOptions
    ): string;
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
import { StringUtils } from "bytekit/stringutils";

// Importación desde el índice principal
import { StringUtils } from "bytekit";
```

---

**💡 ¿Encontraste un error o tienes una sugerencia?** [Abre un issue](https://github.com/sebamar88/bytekit/issues) o contribuye al proyecto.
