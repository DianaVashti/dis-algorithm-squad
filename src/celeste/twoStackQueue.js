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
  constructor(){
    this.stack = []
  }

  pushIt(item){
    this.stack.push(item)
  }

  popIt(){
    return this.stack.pop()
  }

}

const firstStack = new Stack()
const secondStack = new Stack()
// -----------------------------------------------------------------------------

function enqueue (item) {
  if (secondStack.stack.length > 0) {
    let current = secondStack.popIt()
    while (current) {
      firstStack.pushIt(current)
      current = secondStack.popIt()
    }
  }
  firstStack.pushIt(item)
}

function dequeue () {
  if (secondStack.stack.length === 0) {
    let current = firstStack.popIt()
    while (current) {
      secondStack.pushIt(current)
      current = firstStack.popIt()
    }
  }
  return secondStack.popIt()
}

enqueue(1)
enqueue(2)
enqueue(3)
console.log(dequeue())
enqueue(4)
console.log(dequeue())
enqueue(5)
console.log(dequeue())
console.log(dequeue())
console.log(dequeue())
