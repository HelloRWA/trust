<script setup lang="ts">
const links = [
  [
    {
      label: "BTC",
      icon: "i-heroicons-user-circle",
    },
    {
      label: "ETH",
      icon: "i-heroicons-user-group",
    },
    {
      label: "Notifications",
      icon: "i-heroicons-bell",
    },
  ],
  [
    {
      label: "Documentation",
      icon: "i-heroicons-book-open",
      to: "https://ui.nuxt.com/pro",
      target: "_blank",
    },
    {
      label: "Buy now",
      icon: "i-heroicons-ticket",
      to: "https://ui.nuxt.com/pro/pricing",
      target: "_blank",
    },
  ],
];
</script>

<template>
  <UDashboardToolbar class="py-0 px-1.5 overflow-x-auto">
    <UHorizontalNavigation :links="links" />
  </UDashboardToolbar>
</template>
