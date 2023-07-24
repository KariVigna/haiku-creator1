import { HaikuChecker } from './../src/haiku.js'

describe ("HaikuChecker", () => {
    
    let haikuChecker;
    beforeEach(() => {
        const haiku = `A cat
                       does not like
                       water very much`;
        haikuChecker = new HaikuChecker();
    });

    test('should have three lines', () => {
        const inputPhrase1 = (`A cat 
        can jump 
        very high`);

        // const inputPhrase2 = 'A cat likes to chase mice';
        
        expect(haikuChecker.isValidHaiku(inputPhrase1)).toBe(true);
        // expect(haikuChecker.isValidHaiku(inputPhrase2)).toBe(false);
    });
});