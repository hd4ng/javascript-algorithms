import LinkedListNode from './linked-list-node'

export default class LinkedList {
  constuctor() {}

  /**
   * @param {*} value
   * @returns {LinkedList}
   */
  prepend(value) {}

  /**
   * @param {*} value
   * @returns {LinkedList}
   */
  append(value)




  /**
   * @param {*} value
   * @return {LinkedListNode}
   */
  delete(value)

  /**
   * @param {Object} findParams
   * @param {*} findParams.value
   * @param {function} findParams.callback
   * @returns {LinkedListNode}
   */
  find({value = undefined, callback = undefined}) {}

  /**
   * @returns {LinkedListNode}
   */
  deleteTail() {}

    /**
   * @returns {LinkedListNode}
   */
  deleteHead() {}

  /**
   * @param {*[]} values - Array of values that need to be converted to Linked
   * List.
   * @returns {LinkedList}
   */
  fromArray(values) {}

  /**
   * @param {function} [callback]
   * @returns string
   */
  toString(callback) {}

  /**
   * Reverses a linked list.
   * @returns {LinkedList}
   */
  reverse() {}
}
