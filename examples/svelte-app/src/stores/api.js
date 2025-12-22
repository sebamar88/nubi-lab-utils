import { writable } from "svelte/store";
import { createApiClient } from "bytekit";

export function createApiStore(config) {
    const client = createApiClient(config);
    return client;
}

export function createQueryStore(client, url) {
    const { subscribe, set, update } = writable({
        data: null,
        loading: true,
        error: null,
    });

    async function fetch() {
        update((state) => ({ ...state, loading: true }));

        try {
            const data = await client.get(url);
            set({ data, loading: false, error: null });
        } catch (err) {
            set({ data: null, loading: false, error: err.message });
        }
    }

    fetch();

    return {
        subscribe,
        refetch: fetch,
    };
}
