# EnvManager

> **Categoría:** Helpers | **[⬅️ Volver al índice](Home)**

#### EnvManager

```ts
class EnvManager {
    get(key: string, defaultValue?: string): string | undefined;
    require(key: string): string;
    isProd(): boolean;
    isDev(): boolean;
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
import { EnvManager } from "bytekit/envmanager";

// Importación desde el índice principal
import { EnvManager } from "bytekit";
```

---

**💡 ¿Encontraste un error o tienes una sugerencia?** [Abre un issue](https://github.com/sebamar88/bytekit/issues) o contribuye al proyecto.
