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
  delete(value) {}

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
