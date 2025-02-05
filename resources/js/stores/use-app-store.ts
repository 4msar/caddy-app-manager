import type { Site } from "@/types";
import { defineStore } from "pinia";

export const useAppStore = defineStore("app-store", {
    state: () => ({
        activeSite: null as Site | null,
        sites: [] as Site[],
    }),
    actions: {
        setActiveSite(site: Site) {
            this.activeSite = site;
        },
        setSites(sites: Site[]) {
            this.sites = sites;
        },
    },
});
