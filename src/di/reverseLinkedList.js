// Reverse Linked List (medium)(easier if you have done a linked list before)
//
// Write a function called reverseLinkedList() that takes the head node of a
// singly linked list and reverses it in place, returning the new head node.
//
// Use this LinkedListNode definition below:

function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}
// -----------------------------------------------------------------------------

const reverseLinkedList = (currentNode) => {
  // to store original previous node as we move through list
  let previous = null;

  // navigate the list to the original end
  while(currentNode){
    // save the next node or we will lose its original pointer
    var nextNode = currentNode.next;
    // set the next value of the current node to the previous node
    // which starts as null since the original head will be the new tail
    currentNode.next = previous;
    // set previous to be the current node so we can move the pointer forward
    previous = currentNode;
    // move the pointer to the next node
    currentNode = nextNode;
  }
  // the last time we set previous it will point at the original tail which is
  // our new head
  return previous
}

const a = new LinkedListNode("a")
const b = new LinkedListNode("b")
const c = new LinkedListNode("c")

a.next = b;
b.next = c;

console.log(reverseLinkedList(a))
