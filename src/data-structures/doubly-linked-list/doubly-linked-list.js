import DoublyLinkedListNode from './doubly-linked-list-node'
import Comparator from '../../utils/comparator/comparator'

export default class DoublyLinkedList {
  /**
   * @constructor
   * @param {function} comparatorFunction
   */
  constructor(comparatorFunction) {
    /** @type {DoublyLinkedListNode} */
    this.head = null
    /** @type {DoublyLinkedListNode} */
    this.tail = null

    this.compare = new Comparator(comparatorFunction)
  }

  /**
   * Add node to the beginning of the list.
   * - Time: O(1).
   * - Space: O(1).
   *
   * @param {*} value
   * @returns {DoublyLinkedList}
   */
  prepend(value) {
    const newNode = new DoublyLinkedListNode(value, this.head)

    // If there is a head then it won't be head anymore.
    // Set its previous reference to the new node (new head).
    // Mark new node as head.
    if (this.head) {
      this.head.previous = newNode
    }
    this.head = newNode

    // If there is no tail yet let's make new node a tail.
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
   * @returns {DoublyLinkedList}
   */
  append(value) {
    const newNode = new DoublyLinkedListNode(value)

    // If there is no node in the list.
    if (!this.head) {
      this.head = newNode
      this.tail = newNode

      return this
    }

    // Attach node to the end of the list.
    this.tail.next = newNode

    // Set its previous reference to the current tail.
    newNode.previous = this.tail

    // Mark new node as tail.
    this.tail = newNode

    return this
  }

  /**
   * Remove first node in the list.
   * - Time: O(1).
   * - Space: O(1).
   *
   * @returns {DoublyLinkedListNode}
   */
  deleteHead() {
    if (!this.head) {
      return null
    }

    const deletedHead = this.head

    if (this.head.next) {
      this.head = this.head.next
      this.head.previous = null
    } else {
      this.head = null
      this.tail = null
    }

    return deletedHead
  }

  /**
   * Remove last node in the list.
   * - Time: O(1).
   * - Space: O(1).
   *
   * @returns {DoublyLinkedListNode}
   */
  deleteTail() {
    if (!this.tail) {
      return null
    }

    const deletedTail = this.tail

    if (this.head === this.tail) {
      this.head = null
      this.tail = null
      return deletedTail
    }

    this.tail = this.tail.previous
    this.tail.next = null

    return deletedTail
  }

  /**
   * Remove node from the list.
   * - Time: O(n).
   * - Space: O(1).
   *
   * @param {*} value
   * @returns {DoublyLinkedListNode}
   */
  delete(value) {
    if (!this.head) {
      return null
    }

    let deletedNode = null
    let currentNode = this.head

    while (currentNode) {
      if (this.compare.equal(currentNode.value, value)) {
        deletedNode = currentNode

        if (deletedNode === this.head) {
          // If HEAD is going to be deleted...

          // Make second node to be a new head.
          this.head = this.head.next

          // If there is head then change its previous reference to null.
          if (this.head) {
            this.head.previous = null
          }

          // If all the nodes in list has same value that is passed as argument
          // then all nodes will be deleted. Tail needs to be updated.
          if (deletedNode === this.tail) {
            this.tail = null
          }
        } else if (deletedNode === this.tail) {
          // If TAIL is going to be deleted...

          // Make the second last node to be a new tail.
          this.tail = this.tail.previous
          this.tail.next = null
        } else {
          // If MIDDLE is going to be deleted...
          const previousNode = deletedNode.previous
          const nextNode = deletedNode.next

          previousNode.next = nextNode
          nextNode.previous = previousNode
        }
      }
      currentNode = currentNode.next
    }

    return deletedNode
  }

  /**
   * Find node from linked list.
   * - Time: O(n).
   * - Space: O(1).
   *
   * @param {object} findParams
   * @param {*} value
   * @param {function} callback
   * @returns {DoublyLinkedListNode}
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
   *
   * @returns {DoublyLinkedList}
   */
  reverse() {
    let currentNode = this.head
    let previousNode = null
    let nextNode = null

    while (currentNode) {
      // Store next node.
      nextNode = currentNode.next
      previousNode = currentNode.previous

      // Change current node's next link to the previous node.
      currentNode.next = previousNode
      currentNode.previous = nextNode

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
   * - Space: O(n).
   *
   * @param {*[]} values
   * @returns {DoublyLinkedList}
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
   * @returns {DoublyLinkedListNode[]}
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
   * - Time: O(n).
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
