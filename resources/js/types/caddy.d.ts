export type CaddyConfig = {
    admin?: {
        listen: string;
        ui: string;
        debug: boolean;
    };
    apps: {
        http?: HttpApp;
        tls?: TlsApp;
        file_server?: FileServerApp;
        reverse_proxy?: ReverseProxyApp;
        // You can add more apps here as needed
    };
    logging?: LoggingConfig;
};

export type HttpApp = {
    servers: Record<string, HttpServer>;
};

export type HttpServer = {
    automatic_https: {
        disable_redirects: boolean;
    };
    listen: string[];
    routes: HttpRoute[];
};

export type HttpRoute = {
    handle: HttpHandler[];
    match?: HttpMatch[];
    // You can define more options for routes
};

export type Handlers =
    | "acme_server"
    | "authentication"
    | "copy_response"
    | "copy_response_headers"
    | "encode"
    | "error"
    | "file_server"
    | "headers"
    | "intercept"
    | "invoke"
    | "log_append"
    | "map"
    | "metrics"
    | "push"
    | "request_body"
    | "reverse_proxy"
    | "rewrite"
    | "static_response"
    | "subroute"
    | "templates"
    | "tracing"
    | "vars";

export type HttpHandler = {
    handler: Handlers;
    [key: string]: any; // Additional options based on the handler type
};

export type HttpMatch = {
    method?: string; // e.g., "GET", "POST"
    path?: string[]; // e.g., ["/api/*"]
    headers?: Record<string, string[]>; // e.g., { "Host": ["example.com"] }
    // Other matching conditions
};

export type TlsApp = {
    certificates: {
        cert_file: string;
        key_file: string;
    }[];
    // Other TLS settings like ACME, DNS providers, etc.
};

export type FileServerApp = {
    root: string; // File server root directory
    browse: boolean; // Allow directory browsing (true/false)
    // More file server options can be added here
};

export type ReverseProxyApp = {
    destination: string | string[]; // Destination servers
    transport?: {
        protocol: string;
        tls: boolean;
    };
    health_checks?: {
        interval: string;
        retries: number;
        // Other health check options
    };
    // More options for reverse proxy behavior
};

export type LoggingConfig = {
    level: "debug" | "info" | "warn" | "error";
    output: string; // e.g., "stdout", "file:/path/to/file"
    format?: string; // e.g., "json", "console"
};
