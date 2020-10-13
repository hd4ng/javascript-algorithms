export default class LinkedListNode {
  /**
   * @param {*} value
   * @param {Object} next
   */
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }

  /**
   * @param {Function} callback
   */
  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`
  }
}
