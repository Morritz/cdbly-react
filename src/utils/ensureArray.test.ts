import { describe, expect, test } from "vitest";
import { ensureArray } from "./ensureArray";

describe("Testing ensureArray utility", () => {
  test("it should return array including only the number that is passed as value", () => {
    expect(ensureArray(4)).toStrictEqual([4]);
  });
  test("it should return the same array of numbers as passed", () => {
    const array = [3, 4, 5];
    expect(ensureArray(array)).toStrictEqual(array);
  });
});
