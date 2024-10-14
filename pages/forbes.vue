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
      <ULandingHero
        :ui="{ wrapper: 'py-12 sm:py-16 md:py-20' }"
        title="Crypto Forbes"
        description="The people that we can $TRUST on the top rank."
      />
      <!-- <TrustForbesTabs /> -->
      <TrustForbesList class="my-10" />
    </UContainer>
  </UMain>
</template>
