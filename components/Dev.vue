<script setup lang="ts">
import croupier from '~/machines/croupier'

const { state, send } = useMachine(croupier)

const client = useSupabaseClient()

const { data: games } = await useAsyncData('games', async () => {
  const { data } = await client.from('games').select()

  return data
})
</script>

<template>
  <div>
    <h1>Current state: {{ state.value }}</h1>
    <h1>Current context: {{ state.context }}</h1>
    <h1>Current actions: {{ state.actions }}</h1>
    <h2>data :{{ games }}</h2>

    <div v-for="(slot, key) in state.context.table.slots" :key="key" flex="gap3" border="~ rounded red-700 dark:teal-700">
      <p>
        {{ slot[slot.length - 1]?.debugInfo }}
      </p>
    </div>

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
    <button>next event::: {{ state.nextEvents }}</button>
  </div>
</template>
