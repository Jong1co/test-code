const Stack = require("../stack");

describe("stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("push", () => {
    stack.push("apple");

    expect(stack.head).toEqual({ value: "apple", next: undefined });
  });

  it("push 2 datas", () => {
    stack.push("apple");
    stack.push("banana");

    expect(stack.size).toBe(2);
    expect(stack.head).toEqual({ value: "banana", next: { value: "apple", next: undefined } });
  });

  it("pop", () => {
    expect(() => stack.pop()).toThrow();
  });

  it("push and pop", () => {
    stack.push("apple");
    stack.pop();

    expect(stack.value).toBe(undefined);
  });

  it("push and pop", () => {
    stack.push("apple");
    stack.pop();

    expect(stack.size).toBe(0);
  });
});
