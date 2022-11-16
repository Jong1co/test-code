const ProductService = require("../product_service_no_di.js");
const ProductClient = require("../product_client.js");
/**
 * jest.mock을 사용하면 해당 그룹을 한 번에 mocking 해줄 수 있음
 * ProductClient 안에 여러 개의 함수가 존재한다면 ! 불편하기 때문에 사용하는 것임
 * 하지만 지금은 한 개의 함수만을 사용하기 때문에 fn()을 사용해도 될듯,,?
 * */
jest.mock("../product_client");

describe("ProductService", () => {
  const fetchItems = jest.fn(async () => [
    { item: "🥛", available: true },
    { item: "🍌", available: false },
  ]);
  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    };
  });
  let productService;

  beforeEach(() => {
    productService = new ProductService();
  });

  it("should filter out only available items", async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: "🥛", available: true }]);
  });

  it("test", async () => {
    await productService.fetchAvailableItems();
    expect(fetchItems).toHaveBeenCalledTimes(1);
  });
});
