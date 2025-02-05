import type { CaddyConfig, Site } from '@/types';

export const convertCaddyJsonToSites = (config?: CaddyConfig): Site[] => {
    if (!config) {
        return [];
    }
    const items = Object.keys(config.apps.http?.servers ?? {});

    return items.map((id) => {
        const server = config.apps.http?.servers[id];
        return {
            id,
            name: id,
            url: server?.routes[0]?.handle[0]?.handler,
            description: '',

            meta: server,
        } as Site;
    }) as Site[];
};
