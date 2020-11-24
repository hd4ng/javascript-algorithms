import LinkedList from '../linked-list/linked-list'

export default class Queue {
  constructor() {
    // We're going to implement Queue base on LinkedList since the two
    // structures are quite similar. Namely, they both operate mostly on
    // the elements at the beginning and the end. Compare enqueue/dequeue
    // operations of Queue with append/deleteHead operations of LinkedList.
    this.linkedList = new LinkedList()
  }

  /**
   * @returns {boolean}
   */
  isEmpty() {
    return !this.linkedList.head
  }

  /**
   * Read the element of the front of the queue without removing it.
   *
   * @return {*}
   */
  peek() {
    if (this.isEmpty()) {
      return null
    }

    return this.linkedList.head.value
  }

  /**
   * Add a new element to the end of the queue.
   *
   * @param {*} value
   */
  enqueue(value) {
    this.linkedList.append(value)
  }

  /**
   * Remove the element at the front of the queue.
   * If the queue is empty, return null.
   *
   * @returns {*}
   */
  dequeue() {
    const removedHead = this.linkedList.deleteHead()
    return removedHead ? removedHead.value : null
  }

  /**
   * @param {function} [callbak]
   * @returns {string}
   */
  toString(callback) {
    // Return the string that representation the queue's linked list.
    return this.linkedList.toString(callback)
  }
}
