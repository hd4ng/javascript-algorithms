import LinkedListNode from './linked-list-node'
import Comparator from '../../utils/comparator/comparator'

export default class LinkedList {
  /**
   * @constructor
   * @param {*} comparatorFunction
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
   *
   * @param {*} value
   * @returns {LinkedList}
   */
  prepend(value) {
    const newNode = new LinkedListNode(value, this.head)
    this.head = newNode

    // If there is no tail let's make new node a tail.
    if (!this.tail) {
      this.tail = newNode
    }

    return this
  }

  /**
   * Add node to the end of the list.
   *
   * @param {*} value
   * @returns {LinkedList}
   */
  append(value) {
    const newNode = new LinkedListNode(value)

    // If there is node head let make new node a head
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      return this
    }

    // Attach node to the end of the list.
    this.tail.next = newNode
    this.tail = newNode

    return this
  }

  /**
   * Remove node from the list.
   *
   * @param {*} value
   * @returns {LinkedListNode}
   */
  delete(value) {
    if (!this.head) {
      return null
    }

    let deletedNode = null

    // If the head must be deleted then make next node that is differ than the
    // head to be a new head.
    while (this.head && this.compare.equal(this.head.value, value)) {
      deletedNode = this.head
      this.head = this.head.next
    }

    let currentNode = this.head

    if (currentNode !== null) {
      // If next node must be deleted than make next node to be the next next
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

    // Check if the tail must be deleted.
    if (this.compare.equal(this.tail.value, value)) {
      this.tail = currentNode
    }

    return deletedNode
  }

  /**
   * Remove the first node from the list.
   *
   * @return {LinkedListNode}
   */
  deleteHead() {
    if (!this.head) {
      return null
    }

    const deletedHead = this.head

    // If there is one node in the list.
    if (this.head === this.tail) {
      this.head = null
      this.tail = null
      return deletedHead
    }

    // If there are many nodes in the list...
    this.head = this.head.next

    return deletedHead
  }

  /**
   * Remove the last node from the list.
   *
   * @return {LinkedListNode}
   */
  deleteTail() {
    if (!this.head) {
      return null
    }

    const deletedTail = this.tail

    // If there is one node in the list.
    if (this.head === this.tail) {
      this.head = null
      this.tail = null
      return deletedTail
    }

    // If there are many nodes in the list...
    // Rewind to the last node and remove the "next" link for the node before
    // the tail.
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
   * Find a node from the list.
   *
   * @param {object} params
   * @param {*} params.value
   * @param {function} params.callback
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
      if (value && this.compare.equal(currentNode.value, value)) {
        return currentNode
      }

      currentNode = currentNode.next
    }

    return null
  }

  /**
   * Reverse linked list.
   *
   * @returns {LinkedList}
   */
  reverse() {
    let currentNode = this.head
    let previousNode = null
    let nextNode = null

    while (currentNode) {
      // Store the next node.
      nextNode = currentNode.next

      // Change the next link of the current node to the previous node.
      currentNode.next = previousNode

      // Move previous node and current node one step forward.
      previousNode = currentNode
      currentNode = nextNode
    }

    // Reset head and tail
    this.tail = this.head
    this.head = previousNode

    return this
  }

  /**
   * Create linked list from array.
   *
   * @param {*[]} values
   * @returns {LinkedList}
   */
  fromArray(values) {
    values.forEach(value => this.append(value))
    return this
  }

  /**
   * Create array of nodes from the list.
   *
   * @return {LinkedListNode[]}
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
