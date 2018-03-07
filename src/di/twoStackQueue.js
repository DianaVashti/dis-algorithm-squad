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

const Queue = {
  // is this optimized for time?

  enqueue: function(data){
    // until we move whole first stack to second keep re-stacking
    while(firstStack.stack.length !== 0){
      secondStack.pushIt(firstStack.popIt());
    }
    // add new item to second stack
    secondStack.pushIt(data);
    //re-stack from second to first until second is empty
    while(secondStack.stack.length !== 0){
      firstStack.pushIt(secondStack.popIt())
    }
  },
  // second stack must always be empty for this
  // is that best?
  // this works for now
  dequeue: function(){
    return firstStack.popIt()
  }
}

Queue.enqueue(1)
Queue.enqueue(2)
Queue.enqueue(3)
Queue.enqueue(4)
Queue.enqueue(5)
console.log(Queue.dequeue());
