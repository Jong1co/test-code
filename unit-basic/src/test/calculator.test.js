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

  describe("divides", () => {
    it("0 / 0 === NaN", () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });
    it("1 / 0 === Infinity", () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });
    it("20 / 5 === 4", () => {
      cal.set(20);
      cal.divide(5);
      expect(cal.value).toBe(4);
    });
  });

  it("Value can not be greater than 100", () => {
    expect(() => cal.add(101)).toThrow();
  });
});
