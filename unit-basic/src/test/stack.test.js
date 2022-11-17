const Stack = require("../stack");

describe("stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("push", () => {
    expect(stack.push("apple")).toEqual({ value: "apple", next: undefined });
  });
});
