import { capitalize, formatDate } from ".";

describe("capitalize", () => {
  it("capitalizes the first letter of a word", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  it("does not change already capitalized word", () => {
    expect(capitalize("Hello")).toBe("Hello");
  });

  it("capitalizes a single character", () => {
    expect(capitalize("a")).toBe("A");
  });

  it("does not change the rest of the string", () => {
    expect(capitalize("hello world")).toBe("Hello world");
  });

  it("handles empty string", () => {
    expect(capitalize("")).toBe("");
  });
});

describe("formatDate", () => {
  it("formats dates correctly", () => {
    expect(formatDate("2023-06-01")).toBe("1st June 2023");
    expect(formatDate("2023-06-02")).toBe("2nd June 2023");
    expect(formatDate("2023-06-03")).toBe("3rd June 2023");
    expect(formatDate("2023-06-04")).toBe("4th June 2023");
    expect(formatDate("2023-06-11")).toBe("11th June 2023");
    expect(formatDate("2023-06-21")).toBe("21st June 2023");
    expect(formatDate("2023-06-22")).toBe("22nd June 2023");
    expect(formatDate("2023-06-23")).toBe("23rd June 2023");
    expect(formatDate("2023-06-24")).toBe("24th June 2023");
  });

  it("formats a leap year date correctly", () => {
    expect(formatDate("2020-02-29")).toBe("29th February 2020");
  });

  it("handles invalid date string", () => {
    expect(formatDate("invalid-date")).toBe("");
  });
});
