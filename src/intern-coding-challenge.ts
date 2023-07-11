const firstNonRepeated = (s: string): string => {
    // create an object for all symbols in the input string, where for each non-repeated so far symbol its value represents its position in the input string. Repeated symbols have -1 as its value
    const allSymbols: Record<string, number> = {};

    // create a Map object for non-repeated symbols (symbols as keys, their positions as values) which remembers the original insertion order of the symbols
    const nonRepeatedSymbols = new Map();

    // fill allSymbols object and nonRepeatedSymbols object
    for (let i = 0; i < s.length; i++) {
        if (s[i] in allSymbols) {
            // if it is a repeated symbol, give it -1 value in allSymbols object
            allSymbols[s[i]] = -1;

            // delete this symbol from nonRepeatedSymbols obj if it has not been deleted yet
            if (nonRepeatedSymbols.has(s[i])) {
                nonRepeatedSymbols.delete(s[i]);
            }
        } else {
            // if it is non-repeated symbol, add it to allSymbols object and nonRepeatedSymbols object
            allSymbols[s[i]] = i;
            nonRepeatedSymbols.set(s[i], i);
        }
    }

    // if there are any elements in nonRepeatedSymbols object, return the first symbol in the nonRepeatedSymbols, otherwise, return an empty string

    return nonRepeatedSymbols.size === 0 ? '' : Array.from(nonRepeatedSymbols)[0][0];
};

export default firstNonRepeated;
