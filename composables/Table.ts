import type Card from './Card'

export default class Table {
  #numberOfSlots: number
  #slots: Card[][] = []

  constructor(numberOfSlots: number) {
    this.#numberOfSlots = numberOfSlots
    for (let i = 0; i < this.#numberOfSlots; i++)
      this.#slots[i] = []
  }

  addCardOnSlot(cardToAdd: Card, slotNumber: number) {
    this.#slots[slotNumber].push(cardToAdd)
  }

  get numberOfCardsOnTable() {
    return this.#slots.reduce((acc, cur) => {
      return acc + cur.length
    }, 0)
  }
}
