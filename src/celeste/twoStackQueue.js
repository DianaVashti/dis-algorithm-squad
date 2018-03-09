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

function enqueue(item) {
  firstStack.pushIt(item)
}

function dequeue() {
  let current = firstStack.popIt()
  while (current) {
    secondStack.pushIt(current)
    current = firstStack.popIt()
  }
  let result = secondStack.popIt()
  let backToFirst = secondStack.popIt()
  while (backToFirst) {
    firstStack.pushIt(backToFirst)
    backToFirst = secondStack.popIt()
  }
  return result
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
