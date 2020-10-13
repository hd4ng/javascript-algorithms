import LinkedList from '../linked-list'

describe('LinkedList', () => {
  it.only('should create empty linked list', () => {
    const linkedList = new LinkedList()

    expect(linkedList.head).toBeNull()
    expect(linkedList.tail).toBeNull()

    expect(linkedList.toString()).toBe('')
  })

  it('should append node to linked list', () => {
    const linkedList = new LinkedList()

    linkedList.append(1)
    linkedList.append(2)

    expect(linkedList.toString()).toBe('1,2')
    expect(linkedList.tail.next).toBeNull()
  })

  it.only('should prepend node to linked list', () => {
    const linkedList = new LinkedList()

    linkedList.prepend(2)

    expect(linkedList.head.toString()).toBe('2')
    expect(linkedList.tail.toString()).toBe('2')

    linkedList.prepend(3)
    linkedList.append(1)

    expect(linkedList.toString()).toBe('3,2,1')
  })

  it('should delete node by value from linked list', () => {})

  it('should delete linked list tail', () => {})

  it('should delete linked list head', () => {})

  it('should be possible to store objects in the list and to print them out', () => {})

  it('should find node by value', () => {})

  it('should find node by callback', () => {})

  it('should create linked list from array', () => {})

  it('should find node by means of custom compare function', () => {})

  it('should reverse linked list', () => {})
})
