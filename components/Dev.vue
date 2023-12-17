  <script setup lang="ts">
import croupier from '~/machines/croupier';

    const { state, send } = useMachine(croupier)
  </script>

<template>
    <div>
    <p>ites</p>
      <h1>Current state: {{ state.value }}</h1>
      <h1>Current context: {{ state.context }}</h1>
      <h1>Current actions: {{ state.actions }}</h1>

      <button @click="send('deckOpenned')">
      openDeck
      </button>
      <br />
      <button @click="send('cardShuffled')">send CardShuffled</button>
      <br />
      <button @click="send('exitputmode')">send exitputmode</button>
    </div>
  </template>
  