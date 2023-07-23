export class HaikuChecker {
    constructor(haiku) {
        this.haiku = "";
    }

    isValidHaiku() {
        const lines = this.haiku.split('\n').map(line =>line.trim());

        if (lines.length !== 3); {
            return false;
        }
        return true;
    }
}
