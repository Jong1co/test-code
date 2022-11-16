const fetchProduct = require("../async");

describe("비동기 테스트", () => {
  describe("Promise", () => {
    it("reject", () => {
      return fetchProduct("error").catch((error) => {
        expect(error).toBe("network error");
      });
    });

    it("resolve", () => {
      return fetchProduct().then((product) => {
        expect(product).toEqual({ item: "Milk", price: 200 });
      });
    });

    it("resolve2", (done) => {
      fetchProduct().then((product) => {
        expect(product).toEqual({ item: "Milk", price: 200 });
        done();
        //done을 사용하면 5초정도 느려짐
      });
    });
  });

  describe("async-test", () => {
    it("async", async () => {
      const product = await fetchProduct();
      expect(product).toEqual({ item: "Milk", price: 200 });
    });

    it("async-resolves", async () => {
      return expect(fetchProduct()).resolves.toEqual({ item: "Milk", price: 200 });
    });

    it("async-reject", async () => {
      return expect(fetchProduct("error")).rejects.toBe("network error");
    });
  });
});
