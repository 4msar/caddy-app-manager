<script setup lang="ts">
import { useAppStore } from '@/stores';
import { computed, watch } from 'vue';
import Button from './ui/Button.vue';

const store = useAppStore();
const activeSite = computed(() => store.activeSite);

watch(activeSite, (site) => {
    console.log('Active site changed', site);
});
</script>

<template>
    <div class="p-4">
        <div v-if="activeSite">
            <h2>{{ activeSite.name }}</h2>
            <p>{{ activeSite.description }}</p>
            <a :href="activeSite.url">{{ activeSite.url }}</a>
        </div>
        <div v-else>
            <p>Select a site to view</p>
        </div>

        <Button> Save </Button>
    </div>
</template>
