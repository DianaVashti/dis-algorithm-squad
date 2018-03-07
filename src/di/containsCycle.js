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

const a = new LinkedListNode("a")
const b = new LinkedListNode("b")
const c = new LinkedListNode("c")

a.next = b;
b.next = c;
c.next = a;

const one = new LinkedListNode("one")
const two = new LinkedListNode("two")
const three = new LinkedListNode("three")

one.next = two;
two.next = three;


const containsCycle = (firstNode) => {
  // since we only have unique node values, use a Set
  const visitedNodes = new Set();
  let currentNode = firstNode;
  // keep looking at nodes until we reach the end of a linear linked list
  while(currentNode.next){
    // add the value of each node we have visited to our Set
    visitedNodes.add(currentNode.value);
    // if we ever see a current node point at one already in our set it is
    // cyclical so return true
    if(visitedNodes.has(currentNode.next.value)){
      return true
    } else {
      currentNode = currentNode.next
    }
  }
  // if we made it to the end, it is linear so return false
  return false
}

console.log("Should return true: ", containsCycle(a));
console.log("Should return false: ", containsCycle(one));
// -----------------------------------------------------------------------------

// Solution from Interview Cake which is the same runtime but O(1) space
// instead of O(n) space as is in my solution above

const anotherContainsCycle = (firstNode) => {

    // start both runners at the beginning
    var slowRunner = firstNode;
    var fastRunner = firstNode;

    // until we hit the end of the list
    while (fastRunner && fastRunner.next) {
        slowRunner = slowRunner.next;
        fastRunner = fastRunner.next.next;

        // case: fastRunner is about to "lap" slowRunner
        if (fastRunner === slowRunner) {
            return true;
        }
    }

    // case: fastRunner hit the end of the list
    return false;
}

console.log("Should return true: ", anotherContainsCycle(a));
console.log("Should return false: ", anotherContainsCycle(one));
