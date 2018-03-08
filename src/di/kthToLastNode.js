// kth To Last Node - (medium)(easier if you have done a linked list)

// Write a function that returns the kth the last node in a linked list
// Use the LinkedListNode definition below

// example:
// input: (2, a)
// output: LinkedListNode d (whose value is "Devils Cake")

function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

var a = new LinkedListNode("Angel Food");
var b = new LinkedListNode("Bundt");
var c = new LinkedListNode("Cheese");
var d = new LinkedListNode("Devils Food");
var e = new LinkedListNode("Eccles");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// -----------------------------------------------------------------------------

const kthToLastNode = (k, headNode) => {
  let length = 0;
  let currentNode = headNode;
  // determine the length of the list
  while(currentNode){
    length++;
    currentNode = currentNode.next;
  }
  // target index is how many steps from the head our kth to last is
  let targetNodeIndex = length - k;
  // so we take that many steps forward in our list
  for(let i=0; i<targetNodeIndex; i++){
    headNode = headNode.next;
  }
  return headNode
}

console.log(kthToLastNode(2, a));
