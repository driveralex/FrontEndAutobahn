export default class Card {
  #value: number
  #color: number

  constructor(value: number, color: number) {
    this.#value = value
    this.#color = color
  }

  get debugInfo() {
    return `Card is: ${this.computeColor()} and ${this.computeValue()}`
  }

  computeColor(): string {
    switch (this.#color) {
      case 0:
        return 'spade'
        break
      case 1:
        return 'club'
        break
      case 2:
        return 'heart'
        break
      case 3:
        return 'diamond'
        break
    }
    return ''
  }

  computeValue(): string {
    switch (this.#value) {
      case 11:
        return 'jack'
        break
      case 12:
        return 'queen'
        break
      case 13:
        return 'king'
        break
      default:
        return this.#value.toString()
    }
  }
}
