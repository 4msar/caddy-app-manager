<script setup lang="ts">
import { useAppStore } from '@/stores';
import { computed } from 'vue';
import ListItem from './ListItem.vue';

const store = useAppStore();

const sites = computed(() => store.sites);
const activeSite = computed(() => store.activeSite);
</script>

<template>
    <div
        class="h-content relative w-full overflow-y-auto rounded-[inherit] pb-8"
    >
        <div class="flex flex-1 flex-col gap-2 p-4 pt-4">
            <template v-if="sites.length > 0">
                <template v-for="site in sites" :key="site.id">
                    <ListItem
                        :site="site"
                        :active="activeSite?.id === site.id"
                    />
                </template>
            </template>
            <div v-else class="text-muted text-center">No sites found</div>
        </div>
    </div>
</template>
