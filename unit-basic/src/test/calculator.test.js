const Calculator = require("../calculator");

describe("Calculator", () => {
  /**
   * 각각의 테스트는 독립적이여야 함
   * 하지만 모든 테스트에서 cal을 선언해 주는 것은 코드 중복이 많이 됨
   * 그래서 사용하는 api가 beforeEach(() => {})
   */
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  });

  it("inits with 0", () => {
    expect(cal.value).toBe(0);
  });

  it("set value", () => {
    cal.set(3);
    expect(cal.value).toBe(3);
  });

  it("clear value", () => {
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it("add number", () => {
    cal.add(11);
    expect(cal.value).toBe(11);
  });

  it("subtract", () => {
    cal.subtract(3);
    expect(cal.value).toBe(-3);
  });

  it("multiply", () => {
    cal.multiply(1000000);
    expect(cal.value).toBe(0);
  });

  it("divide", () => {
    cal.divide(100000000000);
    expect(cal.value).toBe(0);
  });

  it("Value can not be greater than 100", () => {
    expect(() => cal.add(101)).toThrow();
  });
});
