import { assign } from 'xstate'

export default createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QGMBOB7ArgBwJZlQDp1swA7AYQENUIBxKgWzAGIIxkBrAeVLLMgBtAAwBdRKGzpYuAC650ZCSAAeiAEwBmAByEArNoBsARgCcw48IAsJ4ZoA0IAJ6IAtMfWHCm4cNObTQ01NAHZNdWNtAF8oxzQsPAJCWAALTAAzdIAbMGpaWBZkGggAZTTMnIgRcSQQKRl5RWU1BHUrdUIgts0bPXVtbUCHZ0RjdsIQ4SNtH2FJzymYuIwcfCJsLKpkMABBLKy8iFhuMgAVKgAjHJZzq7AAMVx9oTFlerkFJVqW1z1jQgi2hChjmZlMHg8hkcLgQmjGhFM6ms4WMYSsfysSxA8VWSQA7lQ5Pd0KgAAqbJwEACSZFgslQmGQjTILAoABkqRQANLVN7SD5Nb6IEGaQjaKzBQamPoRKbQ0Yhf56KzokJIzR6QxAgYxWIgMjodjwWo4xKoPkNT7NNyAwhWSwRcJw4zGHRQkYIVzqMKEOwBLQ2LUBYyGLGmtbEPiHBjMC0Cr6gFoBu1WAYy7SRfp9eWeyJ6CYu3w+FWZ4x6MMrM3JcrZXLFY2SfnM62tFV2vzaOZ6PSmVOhKw5r2i0zaTyBPTWEIZgwVhIRjZbXb7Q7HM6XHJx5tCz2mUwAyLA0G7iHDGHqb0AwzKqy+cE9kIhWe49abbZ7A71k63HKEbCYWQ7IcX7rmAm5WtuSLCN4gyGCEEqdoqVjSjmcJWPoAwBA+6g9v0mhPlWC5vsun5rncv7-oBxTAXcAAEAAUyAkE4ACUYGComoxoRE-h6ME-iGEEo6nog7T5mYNjaMqZa7v4+ERgSRIkuSVCUqgNJ0gyTLgY2lrsaowp-IQkRXiOhg3mE6imDmhjSr69pGHC0qotYclJLImCoGcKR1rQbEJvpCCKlBAmGJZQxIdeOaov8irYTeypTgMZauS+KkEAA6np7xbhxCB9KKmgCX4llmZJOg5sqHQTv4whmdKoQzClhAKbI6RKRSBCnOgpIqac3n3GAoG1Nl2kBe4kx2g6rpaC6rpGNZcIIt6hV-KFcJ-LqURAA */
  id: 'croupier',
  initial: 'StartOfTheGame',
  predictableActionArguments: true,
  context: {
    deck: new Deck(),
    table: new Table(5),
    tableCurrentIndex: 0,
  },
  states: {
    StartOfTheGame: {
      on: {
        openCardGame: {
          target: 'CardDeckCreated',
          actions: 'openCardGame',
        },
      },
    },
    CardDeckCreated: {
      on: {
        shuffleCards: 'PlaceAllCardsOnTable.ReadyToPlaceCardOnTable',
      },
    },
    PlaceAllCardsOnTable: {
      states: {
        ReadyToPlaceCardOnTable: {
          on: {
            PutACardOnTable: {
              actions: 'PutACardOnTable',
            },
          },
        },
      },
      always: {
        target: 'WaitingForPlayer',
        cond: 'tableIsInitialized',
      },

    },
    WaitingForPlayer: {},
  },
},
{
  actions: {
    openCardGame: (ctx) => {
      ctx.deck.openCardGame()
    },
    PutACardOnTable: assign({
      tableCurrentIndex: (ctx) => {
        ctx.table.addCardOnSlot(ctx.deck.drawCard(), ctx.tableCurrentIndex)
        return ctx.tableCurrentIndex + 1
      },
    }),
  },
  guards: {
    tableIsInitialized: ({ table }) => {
      return table.isTableInitialized
    },
  },
})
