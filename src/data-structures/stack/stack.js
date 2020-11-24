import LinkedList from '../linked-list/linked-list'

export default class Stack {
  constructor() {
    // We're going to implement Stack based on LinkedList since the two
    // structures are quite similar. Compare push/pop operations of Stack with
    // prepend/deleteHead operations of LinkedList.
    this.linkedList = new LinkedList()
  }

  /**
   * @returns {boolean}
   */
  isEmpty() {
    return !this.linkedList.head
  }

  /**
   * Read the top element of the stack.
   *
   * @returns {*}
   */
  peek() {
    if (this.isEmpty()) {
      return null
    }

    return this.linkedList.head.value
  }

  /**
   * Add a new element to the top of the stack.
   *
   * @param {*} value
   */
  push(value) {
    this.linkedList.prepend(value)
  }

  /**
   * Remove the element of the top of the stack.
   *
   * @returns {*}
   */
  pop() {
    const removedHead = this.linkedList.deleteHead()
    return removedHead ? removedHead.value : null
  }

  /**
   * Transform stack to an array.
   *
   * @returns {*[]}
   */
  toArray() {
    return this.linkedList.toArray().map(node => node.value)
  }

  /**
   *
   * @param {function} [callback]
   * @returns {string}
   */
  toString(callback) {
    return this.linkedList.toString(callback)
  }
}
