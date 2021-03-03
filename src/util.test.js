import { isNumber } from "./util";

describe("isNumber", () => {
  it("returns true when given a number", () => {
    const result = isNumber(123456789);

    expect(result).toBe(true);
  });

  it("returns false when given a string", () => {
    const result = isNumber("This is a string");

    expect(result).toBe(false);
  });

  it("returns false when given a boolean", () => {
    const result = isNumber(true);

    expect(result).toBe(false);
  });
});
