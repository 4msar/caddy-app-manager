import { HttpServer } from './caddy';

export * from './caddy';

export type Site = {
    id: string | number;
    name: string;
    url: string;
    description?: string;

    meta?: HttpServer;
};

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
};
