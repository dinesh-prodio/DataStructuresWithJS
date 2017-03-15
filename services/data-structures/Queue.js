const Node = require('./node');

class Queue {
  constructor() {
    this.top = null;
    this.last = null;
    this.length = 0;
  }

  deQueue() {
    let toBePopped = null,
      currentNode = null;
    if (this.top != null) {
      toBePopped = top;
      top = toBePopped.next;
      this.length--;
      return toBePopped;
    }
    return toBePopped;
  }

  enQueue(data) {
    var toBePushed = new Node(data);
    if (this.top == null) {
      this.top = toBePushed;
      this.last = toBePushed;
      this.length++;
      return toBePushed;
    }
    this.last.next = toBePushed;
    this.length++;
    return toBePushed;
  }
}