<script setup lang="ts">
import croupier from '~/machines/croupier'

const { state, send } = useMachine(croupier)
</script>

<template>
  <h2>PlayerActions</h2>
  <h2>Current state: {{ state.value }}</h2>
  <h2>Current context: {{ state.context }}</h2>
  <h2>Current actions: {{ state.actions }}</h2>
  <h2>Next events: {{ state.nextEvents }}</h2>
  <h1>Current deck card: {{ state.context.deck.numberOfCards }}</h1>
  <div flex flex-row items-center justify-center gap-4 border-2 border-purple-400 border-solid>
    <button @click="send('openCardGame')">
      send openCardGame
    </button>
    <br>
    <button @click="send('shuffleCards')">
      send shuffleCards
    </button>
    <button @click="send('PutACardOnTable')">
      send PutACardOnTable
    </button>
  </div>
</template>
