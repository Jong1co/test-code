class Stack {
  constructor() {
    this.head = { value: undefined, next: undefined };
    this.size = 0;
  }

  push(value) {
    if (this.head.value === undefined) {
      this.head.value = value;
      this.size++;
      return;
    }
    const node = { value, next: this.head };
    this.head = node;
    this.size++;
  }

  pop() {
    const node = this.head;
    if (this.size === 0) {
      throw new Error("next value is not existed");
    }
    this.head = node.next;
    this.size--;
    return node.value;
  }
}

module.exports = Stack;
