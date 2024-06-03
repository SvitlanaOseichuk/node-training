import { jest } from "@jest/globals";


jest.unstable_mockModule("./generateNumber.js", () => {
    return {
        default: jest.fn().mockImplementation(() => 10)
    }
})


const lottery = (await import("./lottery.js")).default;

describe("lottery", () => {
    test("should win when expect 10", () => {
        const result = lottery(10);
        expect(result).toBe("$$$you win");
      });

      test("shoul lose when expect 5", () => {
        const result = lottery(5);
        expect(result).toBe("You are loser")
      })
})