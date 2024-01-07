<script setup lang="ts">
import Card from './Card.vue'
import croupier from '~/machines/croupier'

const { state, send } = useMachine(croupier)
</script>

<template>
  <h2>This is the table</h2>

  <div>
    <p>The set of cards</p>
    <h1>Current deck card: {{ state.context.deck.numberOfCards }}</h1>
  </div>

  <div flex-colum flex border-2 border-sky-500 border-solid>
    <p>The highway</p>
    <div v-for="(slot, key) in state.context.table.slots" :key="key">
      <Card v-for="(card, index) in slot" :key="index" :card="card" />
    </div>
  </div>
</template>
