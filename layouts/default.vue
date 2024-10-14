<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

const { data: navigation } = await useAsyncData(
  "navigation",
  () => fetchContentNavigation(),
  { default: () => [] }
);
const { data: files } = useLazyFetch<ParsedContent[]>("/api/search.json", {
  default: () => [],
  server: false,
});

provide("navigation", navigation);
</script>

<template>
  <div>
    <Header />

    <UMain>
      <UContainer>
        <slot />
      </UContainer>
    </UMain>

    <Footer />

    <HelpSlideover />
    <ClientOnly>
      <LazyUContentSearch :files="files" :navigation="navigation" />
    </ClientOnly>
  </div>
</template>
