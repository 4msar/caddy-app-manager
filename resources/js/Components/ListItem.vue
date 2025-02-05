<script setup lang="ts">
import { useAppStore } from '@/stores';
import type { Site } from '@/types';

defineProps<{
    active?: boolean;
    site: Site;
}>();

const { setActiveSite } = useAppStore();
</script>

<template>
    <button
        class="hover:bg-accent flex cursor-pointer flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all"
        :class="{ 'bg-zinc-200': active }"
        @click="setActiveSite(site)"
    >
        <div class="flex w-full flex-col gap-1">
            <div class="flex items-center">
                <div class="flex items-center gap-2">
                    <div class="font-semibold">Alice Smith</div>
                    <!---->
                </div>
                <div class="text-muted-foreground ml-auto text-xs">
                    over 1 year ago
                </div>
            </div>
            <div class="text-xs font-medium">Re: Project Update</div>
        </div>
        <div class="text-muted-foreground line-clamp-2 text-xs">
            Thank you for the project update. It looks great! I've gone through
            the report, and the progress is impressive. The team has done a
            fantastic job, and I appreciate the hard work everyone has put in. I
            have a few minor suggestions that I'll include in the attached
            document. Let's discuss these duri
        </div>
        <div class="flex items-center gap-2">
            <div
                class="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-md border border-transparent px-2.5 py-0.5 text-xs font-semibold shadow transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
            >
                work
            </div>
            <div
                class="focus:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex items-center rounded-md border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
            >
                important
            </div>
        </div>
    </button>
</template>
