# DateUtils

> **Categoría:** Helpers | **[⬅️ Volver al índice](Home)**

#### DateUtils

```ts
class DateUtils {
    static parse(date: Date | string | number): Date;
    static isValid(date: unknown): boolean;
    static toISODate(date: Date | string): string;
    static startOfDay(date: Date | string): Date;
    static endOfDay(date: Date | string): Date;
    static add(date: Date | string, duration: DateDuration): Date;
    static diff(
        from: Date | string,
        to: Date | string,
        options?: DiffOptions
    ): number;
    static diffInDays(
        from: Date | string,
        to: Date | string,
        options?: DiffOptions
    ): number;
    static isSameDay(date1: Date | string, date2: Date | string): boolean;
    static isBefore(date1: Date | string, date2: Date | string): boolean;
    static isAfter(date1: Date | string, date2: Date | string): boolean;
    static format(date: Date | string, locale?: string): string;
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
import { DateUtils } from "bytekit/dateutils";

// Importación desde el índice principal
import { DateUtils } from "bytekit";
```

---

**💡 ¿Encontraste un error o tienes una sugerencia?** [Abre un issue](https://github.com/sebamar88/bytekit/issues) o contribuye al proyecto.
