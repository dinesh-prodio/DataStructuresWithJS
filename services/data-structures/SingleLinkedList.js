class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this._length = 0;
    this.head = null;
  }

  add(value) {
    let node = new Node(value),
      currentNode = this.head;

    // 1st use-case: an empty list
    if (!currentNode) {
      this.head = node;
      this._length++;

      return node;
    }

    // 2nd use-case: a non-empty list
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;

    this._length++;

    return node;
  };

  delete(node) {
    let currentNode = this.head,
      prevNode = null;

    if (currentNode === node) {
      this.head = currentNode.next;
      this._length--;
      let deletedNode = currentNode;
      currentNode = null;
      return deletedNode;
    }
    while (currentNode.next) {
      prevNode = currentNode;
      if (currentNode.next === node) {
        let nextNode = currentNode.next,
          deletedNode = currentNode;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        currentNode = null;
        return deletedNode;
      }
      currentNode = currentNode.next;
    }
  }

  insertAt(position, value) {


    //1st use-case: empty list
    if (!this.head && position !== 0) {
      throw new Exception("List not created");
    }

    //2nd use-case: Invalid position
    if ((this.head && position < 0) || (this.head && position >= this.length)) {
      throw new Exception("Invalid position");
    }

    //3rd use-case: Empty list and adding at beginning of list empty
    if (!this.head && position === 0) {
      return add(value);
    }

    //4th use-case: Adding at beginning of non empty list
    if (this.head && position === 0) {
      let node = new Node(value),
        head = this.head;
      node.next = head;
      this.head = node;
      this._length++;
      return node;
    }

    //5th use-case: adding middle
    if (this.head && position > 0) {
      let node = new Node(value);

      let nodeToAppend = this.searchNodeAt(position - 1);
      let nextNode = nodeToAppend.next;
      nodeToAppend.next = node;
      node.next = nextNode;
      this._length++;
      return node;
    }

    throw new Exception("Invalid Operation");
  }

  removeAt(position) {
    var currentNode = this.head,
      length = this._length,
      count = 1,
      message = {
        failure: 'Failure: non-existent node in this list.'
      },
      beforeNodeToDelete = null,
      nodeToDelete = null,
      deletedNode = null;

    // 1st use-case: an invalid position
    if (position < 0 || position > length) {
      throw new Error(message.failure);
    }

    // 2nd use-case: the first node is removed
    if (position === 0) {
      this.head = currentNode.next;
      deletedNode = currentNode;
      currentNode = null;
      this._length--;

      return deletedNode;
    }

    // 3rd use-case: any other node is removed
    while (count < position) {
      beforeNodeToDelete = currentNode;
      nodeToDelete = currentNode.next;
      count++;
    }

    beforeNodeToDelete.next = nodeToDelete.next;
    deletedNode = nodeToDelete;
    nodeToDelete = null;
    this._length--;

    return deletedNode;
  };

  searchNodeAt(position) {
    var currentNode = this.head,
      length = this._length,
      count = 1,
      message = {
        failure: 'Failure: non-existent node in this list.'
      };

    // 1st use-case: an invalid position
    if (length === 0 || position < 1 || position > length) {
      throw new Error(message.failure);
    }

    // 2nd use-case: a valid position
    while (count < position) {
      currentNode = currentNode.next;
      count++;
    }

    return currentNode;
  };

  reverse() {
    if (this.head) {
      let current = this.head;
      let prev = null;
      let next = null;
      while (current != null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next
      }
      return prev;
    }
    return this;
  };
}