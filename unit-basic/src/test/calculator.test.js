const Calculator = require("../calculator");
const calculator = new Calculator();

test("계산기", () => {
  expect(calculator.set(3)).toBe(3);
});
