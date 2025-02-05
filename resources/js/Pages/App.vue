<script setup lang="ts">
import SearchForm from '@/Components/SearchForm.vue';
import SiteList from '@/Components/SiteList.vue';
import ViewSite from '@/Components/ViewSite.vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { useGetSites } from '@/libs';

useGetSites();
</script>

<template>
    <AuthenticatedLayout mainClass="flex w-full h-full items-stretch">
        <template #header>
            <div class="flex w-full items-center justify-between">
                <h2
                    class="text-xl leading-tight font-semibold text-gray-800 dark:text-gray-200"
                >
                    App
                </h2>
                <SearchForm />
            </div>
        </template>
        <aside class="h-full w-1/4 min-w-60 border-r">
            <SiteList />
        </aside>
        <section class="w-3/4">
            <ViewSite />
        </section>
    </AuthenticatedLayout>
</template>
