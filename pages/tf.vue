<script setup lang="ts">
definePageMeta({
  colorMode: "dark",
});
useSeoMeta({
  title: "$TrustFactor",
  description: "The factor that effect your $Trust Token mint.",
});

const items = [
  {
    title: "Auth with X",
    description:
      "Connect your X account. You should have at least 100 followers with 100 tweets.",
    icon: "line-md:twitter-x",
    color: "primary",
    tfValue: 10,
  },
  {
    title: "Invite Friends",
    description:
      "Share your invite link. Earn 1 $TF per invite, up to 100 $TF.",
    icon: "mdi:account-group",
    color: "success",
    tfValue: 100,
  },
  {
    title: "Wallet Signature",
    description: "Verify your wallet ownership by signing a message.",
    icon: "mdi:wallet",
    color: "info",
    tfValue: 10,
  },
  {
    title: "Address Verification",
    description:
      "Send a small random amount to a specified address for verification.",
    icon: "mdi:cash-check",
    color: "warning",
    tfValue: 10,
  },
  {
    title: "Purchase $TF",
    description: "Buy $TF directly. 10 $BSTSwap = 1 $TF",
    icon: "mdi:currency-usd",
    color: "success",
    tfValue: 1,
  },
  {
    title: "Share Leaderboard",
    description: "Share the token holder leaderboard on social media.",
    icon: "mdi:share-variant",
    color: "primary",
    tfValue: 10,
  },
  {
    title: "Top 100 Holder",
    description:
      "Hold over 10,000 USDC and be in the top 100 on the leaderboard.",
    icon: "mdi:trophy",
    color: "warning",
    tfValue: 50,
  },
  {
    title: "Passkey Verification",
    description: "Verify your identity using browser passkey.",
    icon: "mdi:key-chain",
    color: "info",
    tfValue: 10,
  },
  {
    title: "Voice Print Submission",
    description: "Submit your voice print for additional verification.",
    icon: "mdi:microphone",
    color: "success",
    tfValue: 10,
  },
];
</script>

<template>
  <UMain class="flex pt-10 justify-start flex-col">
    <UContainer class="w-full max-w-screen-lg">
      <TrustFactorStats class="mb-10" />
      <div class="flex flex-col space-y-10 mb-20">
        <ULandingCard
          v-for="item in items"
          :key="item.title"
          :ui="{ body: { base: 'flex flex-row justify-between' } }"
          :title="item.title"
          :description="item.description"
          :icon="item.icon"
          color="primary"
        >
          <div class="flex flex-col justify-center space-y-4 items-center">
            <div class="font-bold text-primary text-xl">
              {{ item.tfValue }} $TF
            </div>
            <UButton>Claim</UButton>
          </div>
        </ULandingCard>
      </div>
    </UContainer>
  </UMain>
</template>
