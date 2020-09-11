export {}

declare global {
  interface String {
    random(): string
    random_unicode(): string
  }
}

String.prototype.random = function() {
  return this[Math.floor(Math.random() * this.split('').length)]
}

String.prototype.random_unicode = function() {
  const pointer = Math.floor(Math.random() * (this.length / 2)) * 2
  return `${this[pointer]}${this[pointer + 1]}`
}

