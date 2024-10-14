<script setup lang="ts">
const columns = [
  {
    key: "id",
    label: "#",
  },
  {
    key: "name",
    label: "User",
    // sortable: true
  },
  {
    key: "amount",
    label: "$TRUST",
    // sortable: true
  },
  {
    key: "hash",
    label: "Tx Hash",
    // sortable: true
  },
  {
    key: "status",
    label: "Status",
  },
];

const q = ref("");

const { data, pending } = await useAsyncData(
  "trust-claim-list",
  () => {
    return $fetch("/api/trust/");
  },
  { default: () => [] }
);
const { txLink } = $(uniConnectorStore());

</script>

<template>
  <UTable
    :rows="data"
    :columns="columns"
    :loading="pending"
    sort-mode="manual"
    class="w-full"
    :ui="{ divide: 'divide-gray-200 dark:divide-gray-800' }"
  >
    <template #name-data="{ row }">
      <NuxtLink
        :to="`https://x.com/${row.name}`"
        target="_blank"
        class="flex items-center gap-3 hover:underline"
      >
        <UAvatar
          :src="row.avatar"
          :alt="row.name"
          :fallback="row.name.charAt(0)"
          size="xs"
        />

        <span class="text-gray-900 dark:text-white font-medium">{{
          row.name
        }}</span>
      </NuxtLink>
    </template>
    <template #bstAmount-data="{ row }">
      {{ row.bstAmount || "0" }} $BST
    </template>

    <template #hash-data="{ row }">
      <NuxtLink
        :to="txLink(row.hash, row.network)"
        target="_blank"
        class="flex items-center gap-3 hover:underline"
      >
        {{ shortAddress(row.hash || '') }}
      </NuxtLink>
    </template>

    <template #status-data="{ row }">
      <UBadge
        :label="row.status"
        :color="
          row.status === 'Claimed'
            ? 'green'
            : row.status === 'Created'
            ? 'orange'
            : 'red'
        "
        variant="subtle"
        class="capitalize"
      />
    </template>
  </UTable>
</template>
