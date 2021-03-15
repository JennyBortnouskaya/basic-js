class VigenereCipheringMachine {
  constructor(bool = true) {
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    this.result = []
    this.helper = 0
    this.bool = bool
  }
  getRightKey(message, key) {
    if (key.length < message.length) {
      key = key + key
      return this.getRightKey(message, key)
    } else {
      return key.toUpperCase().split('').slice(0, message.length)
    }

  }
  newCrypt(message, key, flag) {
    if (message === undefined || key === undefined) {
      throw new Error
    }
    let rightKey = this.getRightKey(message, key)
    message = message.toUpperCase().split('')
    for (let i = 0; i < message.length; i++) {
      if(message[i] >= 'A' && message[i] <= 'Z') {
        let indexMessageLetter = this.alphabet.indexOf(message[i])
        let indexKeyLetter = this.alphabet.indexOf(rightKey[this.helper])
        if(flag) {
          let newLetter = this.alphabet[(indexMessageLetter+indexKeyLetter)%this.alphabet.length]
          this.result.push(newLetter)
          this.helper++
        } else {
          let newLetter = this.alphabet[(indexMessageLetter+this.alphabet.length-indexKeyLetter)%this.alphabet.length]
          this.result.push(newLetter)
          this.helper++
        }
      } else {
        this.result.push(message[i])
      }
    }
  }
  encrypt(message, key) {
    this.newCrypt(message, key, true)
    let res = []
    if (this.bool) {
      res = this.result.join('')
    } else {
      res = this.result.reverse().join('')
    }
    this.result = []
    this.helper = 0
    return res
  }

  decrypt(message, key) {
    this.newCrypt(message, key, false)
    let res = []
    if (this.bool) {
      res = this.result.join('')
    } else {
      res = this.result.reverse().join('')
    }
    this.result = []
    this.helper = 0
    return res
  }
}

module.exports = VigenereCipheringMachine
