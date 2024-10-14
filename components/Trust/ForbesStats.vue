<script setup lang="ts">
const stats = [
  { id: 1, name: "Total Holders", value: "1,245" },
  { id: 2, name: "Total Assets Value", value: "$41,681,933" },
  { id: 4, name: "Total Visits", value: "1234.5K" },
];
</script>

<template>
  <div class="bg-gray-900 py-12 sm:py-16">
    <div class="mx-auto max-w-2xl lg:max-w-none">
      <div class="text-center">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Crypto Forbes
        </h2>
        <p class="mt-4 text-lg leading-8 text-gray-300">
          The people that we can $TRUST on the top rank.
        </p>
      </div>
      <dl
        class="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-1 lg:grid-cols-3"
      >
        <div
          v-for="stat in stats"
          :key="stat.id"
          class="flex flex-col bg-white/5 p-8"
        >
          <dt class="text-sm font-semibold leading-6 text-gray-300">
            {{ stat.name }}
          </dt>
          <dd
            class="order-first text-3xl font-semibold tracking-tight text-white"
          >
            {{ stat.value }}
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>
