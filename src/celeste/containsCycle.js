// Contains Cycle - (easy-medium)(easy only if you've done a linked list before)

// Write a function using the below Singly Linked List node definition that
// takes the first node in our Linked List and returns a boolean for if the
// Linked List is cyclical. You can assume our linked list has no duplicate
// node values.
//
// A cyclical Linked List means a node points at a previous node in the list

function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}
// -----------------------------------------------------------------------------

function containsCycle(head) {
  let values = new Set()
  let current = head
  while (current) {
    if (values.has(current.value)) return true
    values.add(current.value)
    current = current.next
  }
  return false
}


const nonCyclicalList = new LinkedListNode(1)
nonCyclicalList.next = new LinkedListNode(2)
nonCyclicalList.next.next = new LinkedListNode(3)
nonCyclicalList.next.next.next = new LinkedListNode(4)

const cyclicalList = new LinkedListNode('o')
cyclicalList.next = new LinkedListNode('n')
cyclicalList.next.next = new LinkedListNode('i')
cyclicalList.next.next.next = new LinkedListNode('o')
cyclicalList.next.next.next.next = new LinkedListNode('n')
cyclicalList.next.next.next.next.next = cyclicalList.next.next

console.log(containsCycle(nonCyclicalList))
console.log(containsCycle(cyclicalList))
