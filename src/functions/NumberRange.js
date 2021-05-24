export default class NumberRange {
  ranges = []
  numbers = []
  error = false

  constructor(inputString) {
    if (!inputString) return
    const splitInput = inputString
      .split(/,(\s*)/)
      .filter((n) => n !== '' && n !== ' ')

    splitInput.forEach((input) => {
      if (!Number.isNaN(input)) {
        this.numbers.push(Number(input))
      }
    })
  }

  includes(number) {
    if (this.numbers.includes(number)) {
      return true
    }
  }
}
