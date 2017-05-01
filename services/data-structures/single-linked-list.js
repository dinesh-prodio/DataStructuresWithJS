"use strict";

const Node = require('./node');

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
  }

  deleteNode(value) {
    let currentNode = this.head,
      prevNode = null;

    if (currentNode.data === value) {
      this.head = currentNode.next;
      this._length--;
      let deletedNode = currentNode;
      currentNode = null;
      return deletedNode;
    }
    while (currentNode.next) {
      prevNode = currentNode;
      if (currentNode.next.data === value) {
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
        headNode = this.head;
      node.next = headNode;
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
    let currentNode = this.head,
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
  }

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
  }

  reverse() {
    var list = JSON.parse(JSON.stringify(this));
    if (list.head) {
      let current = list.head;
      let prev = null;
      let next = null;
      while (current != null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next
      }
      list.head = prev;
      return list;
    }
    return this;
  }

  checkIfCircular() {
    if (this.head && this._length > 1) {
      //Floyd's algorithm is the way to check if it is circular
      //Keep two pointer. Move 1st pointer by 1 and 2nd Pointer by 2.
      //If they meet then it is circular.
      let fastPtr = this.head;
      let slowPtr = this.head;
      while (slowPtr != null && fastPtr.next != null) {
        fastPtr = fastPtr.next.next;
        slowPtr = slowPtr.next;
        if (fastPtr === slowPtr) {
          return true;
        }
      }
      return false;
    }
  }

  checkCircularAndFindBeginningOfLoop() {
    let loopExist = false;
    if (this.head && this._length > 1) {
      //Floyd's algorithm is the way to check if it is circular
      //Keep two pointer. Move 1st pointer by 1 and 2nd Pointer by 2.
      //If they meet then it is circular.
      let fastPtr = this.head;
      let slowPtr = this.head;
      while (slowPtr != null && fastPtr.next != null) {
        fastPtr = fastPtr.next.next;
        slowPtr = slowPtr.next;
        if (fastPtr === slowPtr) {
          loopExist = true;
          break;
        }
      }
      if (loopExist) {
        slowPtr = this.head;
        while (slowPtr != fastPtr) {
          slowPtr = slowPtr.next;
          fastPtr = fastPtr.next;
        }
        return fastPtr;
      }
    }
  }

  getTail() {
    let current = this.head;
    let tail = null;
    while (current.next != null) {
      tail = current;
      current = current.next;
    }
    return tail;
  }

  printCircularList() {

  }

  findFromTail(position) {
    let node = this.head,
      i = 1,
      kthNode;
    //handle, 0 or negative value of k
    if (position <= 0) return;

    while (node) {
      if (i == position) kthNode = this.head;
      else if (i - position > 0) {
        kthNode = kthNode.next;
      }
      i++;
      node = node.next;
    }
    return kthNode;
  }

  getMidPoint() {
    let singleMove = head, doubleMove = head, i = 0;
    while (doubleMove.next) {
      if (i == 0) {
        doubleMove = doubleMove.next;
        i = 1;
      }
      else {
        doubleMove = doubleMove.next;
        singleMove = singleMove.next;
        i = 0;
      }
    }
    return singleMove;
  }

  static CreateList() {
    let list = new SingleLinkedList();
    for (let i = 0; i < 5; i++) {
      list.add(i);
    }
    return list;
  }

  static CircularList() {
    let list = SingleLinkedList.CreateList();
    list.getTail().next = this.head;
    return this.head;
  }


  reversePrint(head) {
    let arr = [];
    let current = head;
    if (current) {
      arr.push(current.data)
      while (current.next) {
        arr.push(head.next.data)
        current = current.next;
      }
      for (let i = 0; i < arr.length; i++) {
        console.log(arr.push());
      }
    }


  }

}

module.exports = SingleLinkedList;