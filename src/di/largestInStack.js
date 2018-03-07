// Largest In Stack - ()

// Use the defined Stack below and add a new method called largestInStack()
// that returns the largest item in the stack. This method should not remove
// the item from the Stack. The Stack will only contain integers so the largest
// refers to the largest integer value. Create your method on a new Stack object
// called maxStack which is created for you. i.e. maxStack has the method
// largestInStack but the original Stack class does not.

function Stack() {
  // initialize an empty array
  this.items = [];
}

// push a new item to the last index
Stack.prototype.push = function(item) {
  this.items.push(item);
};

// remove the last item
Stack.prototype.pop = function() {

  // if the stack is empty, return null
  // (it would also be reasonable to throw an exception)
  if (!this.items.length) {
      return null;
  }
  return this.items.pop();
};

// see what the last item is
Stack.prototype.peek = function() {
  if (!this.items.length) {
      return null;
  }
  return this.items[this.items.length -1];
};

var maxStack = new Stack();
// -----------------------------------------------------------------------------

maxStack.largestInStack = function() {
  let largest = this.items[0];
  for(let i=1; i<this.items.length; i++){
    this.items[i] > largest
      ? largest = this.items[i]
      : null
  }
  return largest;
};

maxStack.push(1)
maxStack.push(34)
maxStack.push(-23)
maxStack.push(0)
maxStack.push(6)
console.log( "Should be 34: ", maxStack.largestInStack() ); // should be 34
