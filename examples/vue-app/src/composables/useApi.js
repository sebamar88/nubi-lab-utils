import { ref, onMounted, onUnmounted } from "vue";
import { createApiClient } from "bytekit";

export function useApiClient(config) {
    const client = createApiClient(config);
    return client;
}

export function useApiQuery(client, url) {
    const data = ref(null);
    const loading = ref(true);
    const error = ref(null);
    let cancelled = false;

    async function fetchData() {
        try {
            loading.value = true;
            const response = await client.get(url);
            if (!cancelled) {
                data.value = response;
                error.value = null;
            }
        } catch (err) {
            if (!cancelled) {
                error.value = err.message;
            }
        } finally {
            if (!cancelled) {
                loading.value = false;
            }
        }
    }

    onMounted(() => {
        fetchData();
    });

    onUnmounted(() => {
        cancelled = true;
    });

    return { data, loading, error, refetch: fetchData };
}
