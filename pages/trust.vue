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
        title="$TRUST For Accumulated"
        description="The higher your $TrustFactor value, the more $TRUST you can claim every day."
      />
      <div
        class="max-w-screen-md mb-20 space-y-10 mx-auto flex flex-col items-center justify-center"
      >
        <UProgress color="primary" :indicator="false" :value="time" :max="3600 * 24 * 1000">
          <template #indicator="{ percent }">
            <div class="text-right" :style="{ width: `${percent}%` }">
              <Countdown :time="time" v-slot="{ hours, minutes, seconds }">
                <span class="text-primary text-xl font-bold">
                  {{ hours }} : {{ minutes }} : {{ seconds }}</span
                >
              </Countdown>
            </div>
          </template>
        </UProgress>
        <UButton
          :color="canSubmit ? 'primary' : 'gray'"
          size="xl"
          :disabled="!canSubmit"
          label="Claim"
        />
      </div>
      <TrustList class="mb-20" />
    </UContainer>
  </UMain>
</template>
