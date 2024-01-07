<script setup lang="ts">
import type Card from '~/composables/Card' // Import your Card class

const props = defineProps<{
  card: Card
}>()
</script>

<template>
  <p>{{ props.card.debugInfo }}</p>
</template>
