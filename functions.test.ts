const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test("returns an array", () => {
        let arrOutput = shuffleArray()
        expect(arrOutput).toBe('array');
    });
    test("returns an array of the same length as the argument sent in", () => {
        let arrCopy = []
        expect(shuffleArray()).toEqual(arrCopy);
        expect(arrCopy).toHaveLength(5)
    })
});
