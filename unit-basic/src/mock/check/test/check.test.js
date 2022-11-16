const check = require("../check");

describe("mock", () => {
  let onSuccess;
  let onFail;

  beforeEach(() => {
    onSuccess = jest.fn();
    onFail = jest.fn();
  });

  it("should call onSuccess when predicate is true", () => {
    check(() => true, onSuccess, onFail);

    /** onSuccess가 한 번 호출 되어야 한다는 뜻 */
    expect(onSuccess.mock.calls.length).toBe(1);
    expect(onSuccess).toHaveBeenCalledTimes(1);

    // calls에 첫 번째로 호출된 함수의 첫번째 인자는 yes가 되어야 한다는 뜻
    expect(onSuccess.mock.calls[0][0]).toBe("yes");
    expect(onSuccess).toHaveBeenCalledWith("yes");

    // expect(onSuccess.mock.calls.length).toBe(2); => 에러 발생
    expect(onFail.mock.calls.length).toBe(0);
    expect(onFail).toHaveBeenCalledTimes(0);
  });

  it("should call onFail when predicate is false", () => {
    check(() => false, onSuccess, onFail);

    /** onSuccess가 한 번 호출 되어야 한다는 뜻 */
    expect(onSuccess.mock.calls.length).toBe(0);
    expect(onSuccess).toHaveBeenCalledTimes(0);

    // calls에 첫 번째로 호출된 함수의 첫번째 인자는 yes가 되어야 한다는 뜻
    expect(onFail.mock.calls[0][0]).toBe("no");
    expect(onFail).toHaveBeenCalledWith("no");

    // expect(onSuccess.mock.calls.length).toBe(2); => 에러 발생
    expect(onFail.mock.calls.length).toBe(1);
    expect(onFail).toHaveBeenCalledTimes(1);
  });
});
