import { HaikuChecker } from '../src/haiku.js'

describe ("Haiku Checker", () => {
    
    let haikuChecker;
    beforeEach(() => {
        const haiku = `A cat
                       does not like
                       water very much`;
        haikuChecker = new HaikuChecker(haiku);
    });

    test('should have three lines', () => {
        const inputPhrase1 = (`A cat 
        can jump 
        very high`);
        expect(haikuChecker.isValidHaiku(inputPhrase1)).toBe(true);
    });
});