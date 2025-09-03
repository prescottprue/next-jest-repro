import { faker } from "@faker-js/faker";

describe("main", () => {
    it("should pass", () => {
      const string = faker.string.uuid();
      expect(string).toBe(string);
    });
});