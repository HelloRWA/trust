<script setup lang="ts">
definePageMeta({
  colorMode: "dark",
});

const now = new Date();
const nextDay = new Date(
  now.getFullYear(),
  now.getMonth() + 1,
  now.getDate() + 1,
  0,
  0,
  0,
  0
);
const time = nextDay - now;
const canSubmit = $computed(() => {
  return false;
});
</script>

<template>
  <UMain class="flex pt-10 justify-center">
    <UContainer class="w-full">
      
      <!-- <TrustForbesTabs /> -->
       <TrustForbesStats />
      <TrustForbesList class="my-10" />
    </UContainer>
  </UMain>
</template>
