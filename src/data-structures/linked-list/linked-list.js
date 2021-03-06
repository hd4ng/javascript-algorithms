import LinkedListNode from './linked-list-node'
import Comparator from '../../utils/comparator/comparator'

export default class LinkedList {
  /**
   * @constructor
   * @param {function} comparatorFunction
   */
  constructor(comparatorFunction) {
    /** @type {LinkedListNode} */
    this.head = null
    /** @type {LinkedListNode} */
    this.tail = null

    this.compare = new Comparator(comparatorFunction)
  }

  /**
   * Add node to the beginning of the list.
   * - Time: O(1).
   * - Space: O(1).
   *
   * @param {*} value
   * @returns {LinkedList}
   */
  prepend(value) {
    const newNode = new LinkedListNode(value, this.head)
    this.head = newNode

    if (!this.tail) {
      this.tail = newNode
    }

    return this
  }

  /**
   * Add node to the end of the list.
   * - Time: O(1).
   * - Space: O(1).
   *
   * @param {*} value
   * @returns {LinkedList}
   */
  append(value) {
    const newNode = new LinkedListNode(value)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode

      return this
    }

    this.tail.next = newNode
    this.tail = newNode

    return this
  }

  /**
   * Remove first node from the list.
   * - Time: O(1).
   * - Space: O(1).
   *
   * @returns {LinkedListNode}
   */
  deleteHead() {
    if (!this.head) {
      return null
    }

    const deletedHead = this.head

    if (this.head.next) {
      this.head = this.head.next
    } else {
      this.head = null
      this.tail = null
    }

    return deletedHead
  }

  /**
   * Remove last node from the list.
   * - Time: O(n).
   * - Space: O(1).
   *
   * @returns {LinkedListNode}
   */
  deleteTail() {
    if (!this.tail) {
      // There is node tail.
      return null
    }

    let deletedTail = this.tail

    // If there is only one node in the list.
    if (this.head === this.tail) {
      this.head = null
      this.tail = null

      return deletedTail
    }

    // If there are many nodes in the list...
    // Rewind to the last node and delete the next link of second last node.
    let currentNode = this.head
    while (currentNode.next) {
      if (currentNode.next.next === null) {
        currentNode.next = null
        this.tail = currentNode
      } else {
        currentNode = currentNode.next
      }
    }

    return deletedTail
  }

  /**
   * Remove node from the list.
   * - Time: O(n).
   * - Space: O(1).
   *
   * @param {*} value
   * @returns {LinkedListNode}
   */
  delete(value) {
    if (!this.head) {
      return null
    }

    let deletedNode = null

    // If head must be deleted then make next node that is differ from the head
    // to be a new head.
    while (this.head && this.compare.equal(this.head.value, value)) {
      deletedNode = this.head
      this.head = this.head.next
    }

    let currentNode = this.head

    if (currentNode !== null) {
      // If next node must be deleted then make next node to be the next next
      // one.
      while (currentNode.next) {
        if (this.compare.equal(currentNode.next.value, value)) {
          deletedNode = currentNode.next
          currentNode.next = currentNode.next.next
        } else {
          currentNode = currentNode.next
        }
      }
    }

    // Check if the tail must be deleted
    if (deletedNode === this.tail) {
      this.tail = currentNode
    }

    return deletedNode
  }

  /**
   * Find node from linked list.
   * - Time: O(n).
   * - Space: O(1).
   *
   * @param {object} findParams
   * @param {*} findParams.value
   * @param {function} findParams.callback
   * @returns {LinkedListNode}
   */
  find({value = undefined, callback = undefined}) {
    if (!this.head) {
      return null
    }

    let currentNode = this.head
    while (currentNode) {
      // If callback is specified then find node by callback.
      if (callback && callback(currentNode.value)) {
        return currentNode
      }

      // If value is specified then compare node by value.
      if (value !== undefined && this.compare.equal(currentNode.value, value)) {
        return currentNode
      }

      currentNode = currentNode.next
    }

    return null
  }

  /**
   * Reverse linked list.
   * - Time: O(n).
   * - Space: O(1).
   *
   * @returns {LinkedList}
   */
  reverse() {
    let currentNode = this.head
    let previousNode = null
    let nextNode = null

    while (currentNode) {
      // Store next node.
      nextNode = currentNode.next

      // Change next link of the current node to the previous node.
      currentNode.next = previousNode

      // Move previous and current nodes one step forward.
      previousNode = currentNode
      currentNode = nextNode
    }

    // Reset head and tail.
    this.tail = this.head
    this.head = previousNode

    return this
  }

  /**
   * Create linked list from array.
   * - Time: O(n).
   * - Space: O(1).
   *
   * @param {*[]} values
   * @returns {LinkedList}
   */
  fromArray(values) {
    values.forEach(value => this.append(value))
    return this
  }

  /**
   * Create array from linked list.
   * - Time: O(n).
   * - Space: O(n).
   *
   * @returns {LinkedListNode[]}
   */
  toArray() {
    const nodes = []
    let currentNode = this.head

    while (currentNode) {
      nodes.push(currentNode)
      currentNode = currentNode.next
    }

    return nodes
  }

  /**
   * Print linked list.
   * - Time: 0(n).
   * - Space: O(1).
   *
   * @param {function} callback
   * @returns {string}
   */
  toString(callback) {
    return this.toArray()
      .map(node => node.toString(callback))
      .toString()
  }
}
