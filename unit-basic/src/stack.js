class Stack {
  constructor() {
    this.head = { value: undefined, next: undefined };
  }

  push(value) {
    if (this.head.value === undefined) {
      this.head.value = value;
      return;
    }
    const node = { value, next: this.head };
    this.head = node;
  }
}

module.exports = Stack;
