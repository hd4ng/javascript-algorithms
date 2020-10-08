import Comparator from '../comparator'

describe('Comparator', () => {
  it('should compare with default comparator function', () => {
    const comparator = new Comparator()
    expect(comparator.equal(0, 0)).toBeTruthy()
    expect(comparator.equal(0, 1)).toBeFalsy()
    expect(comparator.equal('a', 'a')).toBeTruthy()
    expect(comparator.equal('a', 'b')).toBeFalsy()
    expect(comparator.lessThan(1, 2)).toBeTruthy()
    expect(comparator.lessThan(-1, 0)).toBeTruthy()
    expect(comparator.lessThan('a', 'ab')).toBeTruthy()
    expect(comparator.lessThan('ab', 'a')).toBeFalsy()
    expect(comparator.lessThanOrEqual(0, 1)).toBeTruthy()
    expect(comparator.lessThanOrEqual(0, 0)).toBeTruthy()
    expect(comparator.lessThanOrEqual('a', 'a')).toBeTruthy()
    expect(comparator.greaterThan(2, 1)).toBeTruthy()
    expect(comparator.greaterThan(0, -1)).toBeTruthy()
    expect(comparator.greaterThan('ab', 'a')).toBeTruthy()
    expect(comparator.greaterThan('ab', 'abc')).toBeFalsy()
    expect(comparator.greaterThanOrEqual(1, 0)).toBeTruthy()
    expect(comparator.greaterThanOrEqual(0, 0)).toBeTruthy()
    expect(comparator.greaterThanOrEqual('b', 'a')).toBeTruthy()
  })

  it('should compare with custom comparator function', () => {
    const comparator = new Comparator((a, b) => {
      if (a.length === b.length) return 0
      return a.length < b.length ? -1 : 1
    })

    expect(comparator.equal('a', 'b')).toBe(true)
    expect(comparator.equal('a', '')).toBe(false)
    expect(comparator.lessThan('b', 'aa')).toBe(true)
    expect(comparator.greaterThanOrEqual('a', 'aa')).toBe(false)
    expect(comparator.greaterThanOrEqual('aa', 'a')).toBe(true)
    expect(comparator.greaterThanOrEqual('a', 'a')).toBe(true)

    comparator.reverse()

    expect(comparator.equal('a', 'b')).toBe(true)
    expect(comparator.equal('a', '')).toBe(false)
    expect(comparator.lessThan('b', 'aa')).toBe(false)
    expect(comparator.greaterThanOrEqual('a', 'aa')).toBe(true)
    expect(comparator.greaterThanOrEqual('aa', 'a')).toBe(false)
    expect(comparator.greaterThanOrEqual('a', 'a')).toBe(true)
  })
})
