// Largest In Stack - (easy)

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
Stack.prototype.push = function (item) {
  this.items.push(item);
};

// remove the last item
Stack.prototype.pop = function () {

  // if the stack is empty, return null
  // (it would also be reasonable to throw an exception)
  if (!this.items.length) {
    return null;
  }

  return this.items.pop();
};

// see what the last item is
Stack.prototype.peek = function () {
  if (!this.items.length) {
    return null;
  }

  return this.items[this.items.length - 1];
};

Stack.prototype.largestInStack = function () {
  if (!this.items.length) {
    return null;
  } else if (this.items.length === 1) {
    return this.items.length[0];
  } else {
    return Math.max(...this.items);
  }
};

/* Alternate method

Stack.prototype.largestInStack = function () {
  if (!this.items.length) {
    return null;
  } else if (this.items.length === 1) {
    return this.items.length[0];
  } else {
      let highest = 0;
      this.items.forEach(item => {
        if (item > highest) {
          highest = item;
      }
    });
    return highest;
  }
}
*/

var maxStack = new Stack();
maxStack.push(1);
maxStack.push(10);
maxStack.push(23);
maxStack.push(44);
maxStack.push(2);
maxStack.push(55);
maxStack.push(46);
maxStack.push(87);
maxStack.push(420);
maxStack.push(5);

console.log(maxStack.largestInStack()); // Should return 420 🔥🔥🔥🔥🔥
maxStack.largestInStack();

// The time complexity of this algorithm is O(n), because worst case scenario the
// function would have to traverse the entire stack to find the largest item
