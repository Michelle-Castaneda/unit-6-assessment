const shuffle = require("../src/shuffle");

describe("shuffle function", () => {
  const array = [1,2,3,4,5];
  test('should return an array', () => {
        const result = shuffle(array);
    expect(Array.isArray(result)).toBe(true);
  })

  test('should return an array of the same length as the argument sent in', () => {
    const result = shuffle(array);
    expect(result).toHaveLength(array.length);
  })
});
