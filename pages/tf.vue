<script setup lang="ts"></script>

<template>
  <UMain class="flex pt-10 justify-center">
    <UContainer class="w-full max-w-screen-md">
      <ULandingHero
        title="Trust Factor"
        description="The factor that effect your $Trust Token mint."
      />
      <UDashboardCard
        title="Trust Factor Rank"
        description="You have 1234 $TrustFactor value, which is higher  than 80% of all users."
        icon="i-heroicons-chart-bar"
      >
        <UProgress :value="80" indicator />
      </UDashboardCard>
    </UContainer>
  </UMain>
</template>
