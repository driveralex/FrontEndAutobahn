<script setup lang="ts">
import Card from './Card.vue'
import croupier from '~/machines/croupier'
import CardClass from '~/composables/Card'

const { state, send } = useMachine(croupier)
</script>

<template>
  <div>
    <!-- <h1>Current state: {{ state.value }}</h1>
    <h1>Current context: {{ state.context }}</h1>
    <h1>Current actions: {{ state.actions }}</h1>

    <h1>Current deck card: {{ state.context.deck.numberOfCards }}</h1>

    <button @click="send('openCardGame')">
      send openCardGame
    </button>
    <br>
    <button @click="send('shuffleCards')">
      send shuffleCards
    </button>
    <br>
    <button @click="send('PutACardOnTable')">
      send PutACardOnTable
    </button>
    <br>
    <button>next event::: {{ state.nextEvents }}</button> -->
    <Table />
    <PlayerActions />
  </div>
</template>
