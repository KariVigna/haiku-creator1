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
    
    test('should not have less than three lines', () => {
        const inputPhrase2 = (`A cat
                            is fat`);
        const inputPhrase3 = (`The cat is fluffy`);
        expect(haikuChecker.isValidHaiku(inputPhrase2)).toBe(true);
        expect(haikuChecker.isValidHaiku(inputPhrase3)).toBe(true);
    });

    test('should not have more than three lines', () => {
        const inputPhrase2 = (`A cat
                             is fat 
                             and sleeping soundly
                             on in a sun beam`);
        const inputPhrase3 = (`The cat is fluffy
                             grumpy and old
                             please give him pets
                             to help the old`);
        expect(haikuChecker.isValidHaiku(inputPhrase2)).toBe(true);
        expect(haikuChecker.isValidHaiku(inputPhrase3)).toBe(true);
    });
});