import Card from './Card'

export default class Deck {
  #pile: Card[] = []
  constructor() {
  }

  debugInfo() {
    for (const card of this.#pile)
      // eslint-disable-next-line no-unused-expressions
      card.debugInfo

    return null
  }

  get numberOfCards() {
    return this.#pile.length
  }

  openCardGame() {
    this.#pile.length = 0
    for (let i = 0; i < 52; i++)
      this.#pile.push(new Card(Math.floor(i / 4), i % 4))

    console.log('new deck created')
    return null
  }

  addToPile(card: Card) {
    this.#pile.push(card)
  }

  drawCard(): Card {
    const indexCardPicked = Math.floor(Math.random() * this.#pile.length) + 1
    const cardPicked = this.#pile[indexCardPicked]
    this.#pile = this.#pile.filter((value, index): boolean => {
      return indexCardPicked !== index
    })
    console.log('a card is draw')
    return cardPicked
  }
}
