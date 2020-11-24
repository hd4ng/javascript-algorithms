export default class DoublyLinkedListNode {
  /**
   * @constructor
   * @param {*} value
   * @param {DoublyLinkedListNode} next
   * @param {DoublyLinkedListNode} previous
   */
  constructor(value, next = null, previous = null) {
    this.value = value
    this.next = next
    this.previous = previous
  }

  /**
   * Print node.
   *
   * @param {function} callback
   * @returns {string}
   */
  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`
  }
}
