export default class Comparator {
  /**
   * @param {function(a: *, b: *)} [compareFunction] - It maybe custom compare
   * function that - let's say may compare custom object together.
   */
  constructor(compareFunction) {
    this.compare = compareFunction || Comparator.defaultCompareFunction
  }

  /**
   * Default comparison function. It just assumes that "a" and "b" are strings
   * or numbers.
   *
   * @param {(number|string)} a
   * @param {(number|string)} b
   * @returns {number}
   */
  static defaultCompareFunction(a, b) {
    if (a === b) return 0
    return a < b ? -1 : 1
  }

  /**
   * Check if two variables are equal.
   *
   * @param {(number|string)} a
   * @param {(number|string)} b
   * @returns boolean
   */
  equal(a, b) {
    return this.compare(a, b) === 0
  }

  /**
   * Check if variable "a" is less than "b".
   * @param {(number|string)} a
   * @param {(number|string)} b
   */
  lessThan(a, b) {
    return this.compare(a, b) === -1
  }

  /**
   * Check if variable "a" is greater than "b".
   * @param {(number|string)} a
   * @param {(number|string)} b
   */
  greaterThan(a, b) {
    return this.compare(a, b) === 1
  }

  /**
   * Check if variable "a" is less than or equal to "b".
   * @param {(number|string)} a
   * @param {(number|string)} b
   */
  lessThanOrEqual(a, b) {
    return this.equal(a, b) || this.lessThan(a, b)
  }

  /**
   * Check if variable "a" is greater than or equal to "b".
   * @param {(number|string)} a
   * @param {(number|string)} b
   */
  greaterThanOrEqual(a, b) {
    return this.equal(a, b) || this.greaterThan(a, b)
  }

  /**
   * Reverses the comparison order.
   */
  reverse() {
    const originCompareFunction = this.compare
    this.compare = (a, b) => {
      return originCompareFunction(b, a)
    }
  }
}
