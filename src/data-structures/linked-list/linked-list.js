import LinkedListNode from './linked-list-node'
import Comparator from '../../utils/comparator/comparator'

export default class LinkedList {
  /**
   *
   * @param {(a:*, b:*) => boolean} comparatorFunction
   */
  constructor(comparatorFunction) {
    /** @var LinkedListNode */
    this.head = null

    /** @var LinkedListNode */
    this.tail = null

    this.compare = new Comparator(comparatorFunction)
  }

  /**
   * @param {*} value
   * @returns {LinkedList}
   */
  prepend(value) {
    // Make new node to be a head.
    const newNode = new LinkedListNode(value, this.head)
    this.head = newNode

    // If there is no tail yet let's make new node to be a tail.
    if (!this.tail) {
      this.tail = newNode
    }

    return this
  }

  /**
   * @param {*} value
   * @returns {LinkedList}
   */
  append(value) {
    const newNode = new LinkedListNode(value)

    // If there is no head yet let's make new node a head
    if (!this.head && !this.tail) {
      this.head = newNode
      this.tail = newNode
      return this
    }

    // Attach newNode to the end of linked list
    this.tail.next = newNode
    this.tail = newNode

    return this
  }

  /**
   * @param {*} value
   * @return {LinkedListNode}
   */
  delete(value) {
    if (!this.head) {
      return null
    }

    let deletedNode = null

    // If the head must be deleted then make the next node that is differ from
    // the head to be a new head.
    while (this.head && this.compare.equal(this.head.value, value)) {
      deletedNode = this.head
      this.head = this.head.next
    }

    let currentNode = this.head

    if (currentNode !== null) {
      // If next node must be deleted then make next node to be a next next one.
      while (currentNode.next) {
        if (this.compare.equal(currentNode.next.value, value)) {
          deletedNode = currentNode.next
          currentNode.next = currentNode.next.next
        } else {
          currentNode = currentNode.next
        }
      }
    }

    // Check whether the tail must be deleted
    if (this.compare.equal(this.tail.value, value)) {
      this.tail = currentNode
    }

    return deletedNode
  }

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
  deleteTail() {
    const deletedTail = this.tail

    // If there is only one node in linked list.
    if (this.head === this.tail) {
      this.head = null
      this.tail = null
      return deletedTail
    }

    // If there are many nodes in linked list...

    // Rewind to the last node and delete "next" link for the node before last
    // node.
    let currentNode = this.head
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null
      } else {
        currentNode = currentNode.next
      }
    }

    this.tail = currentNode

    return deletedTail
  }

  /**
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
   * @param {*[]} values - Array of values that need to be converted to Linked
   * List.
   * @returns {LinkedList}
   */
  fromArray(values) {}

  /**
   * @returns LinkedListNode[]
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
   * @param {function} [callback]
   * @returns string
   */
  toString(callback) {
    return this.toArray()
      .map(node => node.toString(callback))
      .toString()
  }

  /**
   * Reverses a linked list.
   * @returns {LinkedList}
   */
  reverse() {}
}
