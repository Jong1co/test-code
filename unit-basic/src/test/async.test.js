const fetchProduct = require("../async");

describe("async", () => {
  it("reject", () => {
    return fetchProduct("error").catch((error) => {
      expect(error).toBe("network error");
    });
  });

  it("resolve", () => {});
});
