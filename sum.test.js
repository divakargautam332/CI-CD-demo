import sum from "./sum.js";

describe('test for sum fix', () => {
    test('adds 2+2 to equals 4', () => {
        expect(sum(2, 2)).toBe(4);
    });
    test('adds 2+2 to equals 4', () => {
        expect(sum(-5, -5)).toBe(-10);
    });
})