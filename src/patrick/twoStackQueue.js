// Two Stack Queue (medium)

// Implement a Queue using two stacks as defined below. You can assume that
// the stacks implement push and pop in O(1).
//
// Your queue only needs enqueue and a dequeue methods and you should optimize
// for the time cost of x calls on your queue.
//
// Your queue cannot be a class (it should hold no values, only the two stacks
// should hold your data).
// -----------------------------------------------------------------------------

class Stack {
  constructor() {
    this.stack = [];
  }

  pushIt(item) {
    this.stack.push(item);
  }

  popIt() {
    return this.stack.pop();
  }
}

const firstStack = new Stack();
const secondStack = new Stack();


// function enqueue just needs to take a value and push it onto stack 1
function enqueue(value) {
  firstStack.pushIt(value);
}

// When we want to dequeue, we have to preserve the order. We can do this by
// pushing everything in stack1 into stack2, and then removing the element that
// is now on the top of stack2. In order to preserve the order of the queue, we
// first have to check if there is anything already in stack2, and if there is,
// we only need to remove the item on top.
function dequeue() {
  if (secondStack.stack.length > 0) {
    return secondStack.popIt();
  }

  while (firstStack.stack.length > 0) {
    secondStack.pushIt(firstStack.popIt());
  }

  return secondStack.popIt();
}

enqueue(1);
enqueue(2);
enqueue(3);
enqueue(4);
enqueue(5);
console.log(dequeue()); // Should return 1
console.log(dequeue()); // Should return 2
enqueue(6);
console.log(dequeue()); // Should return 3

// The time complexity of this queue is O(n). At worst, when you have to dequeue
// and there are no items in stack2, dequeue will have to traverse the entire length
// of stack1 and push all elements into stack2; the time this will take is dependent
// on the size of stack1, so the time complexity is O(n).
