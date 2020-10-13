import LinkedListNode from '../linked-list-node'

describe('LinkedListNode', () => {
  it('should create list node with value', () => {
    const listNode = new LinkedListNode(5)

    expect(listNode.value).toBe(5)
    expect(listNode.next).toBeNull()
  })

  it('should create list node with object as a value', () => {
    const nodeValue = {value: 1, key: 'test'}
    const listNode = new LinkedListNode(nodeValue)

    expect(listNode.value.value).toBe(1)
    expect(listNode.value.key).toBe('test')
    expect(listNode.next).toBeNull()
  })

  it('should link nodes together', () => {
    const node2 = new LinkedListNode(2)
    const node1 = new LinkedListNode(1, node2)

    expect(node1.next).toBe(node2)
    expect(node2.next).toBeNull()

    expect(node1.value).toBe(1)
    expect(node1.next.value).toBe(2)
  })

  it('should convert node to string', () => {
    const node = new LinkedListNode(1)
    expect(node.toString()).toBe('1')

    node.value = 'node value'
    expect(node.toString()).toBe('node value')
  })

  it('should convert node to string with custom stringifier', () => {
    const nodeValue = {value: 1, key: 'test'}
    const node = new LinkedListNode(nodeValue)

    const toStringCallback = value => `value: ${value.value}, key: ${value.key}`
    expect(node.toString(toStringCallback)).toBe('value: 1, key: test')
  })
})
