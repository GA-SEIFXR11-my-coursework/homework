// [ -e script.js ] && rm script.js; tsc main.ts -outFile script.js; node ./script.js
// Some links for info
// https://preply.com/en/blog/simple-rules-for-the-formation-of-plural-nouns-in-english/
// https://www.grammarly.com/blog/plural-nouns/
// 
// I had to heavily modify the ruleset from that provided from the links above.
// This is because the rules weren't even consistent to begin with.
// Some rules additionally depend on preservation of syllables, 
// eg. 
//      syllabus -> syllabi, but bus -/> bi
//      loaf -> loaves, but chef -/> cheves
//
// but exceptions to the exceptions also arise, eg:
//      phenomenon -> phenomena, but onion -/> onia
//
// and more inconsistencies exist due to... verbs... eg:
//      belief -> beliefs, not "believes", because "believe" is a verb
// 
// English is convoluted. Proper coverage for this task seems absurdly difficult.
//
// In the list below, I had to remove some exceptions that would otherwise break my checks
// This is because I am allowing man -> men extend the pluralisation of compound words like caveman -> cavemen
// However, if i include lie -> lies, that would prevent jelly -> jellies from working, ie, jellies would singularise to jellie instead. 
//
// it is possible to fix this by first regex-ing the exact case prior to testing for a partial match. I am too tired for this now.
var irregularPlurals = {
    // Some exceptions from easily available lists
    foot: "feet",
    tooth: "teeth",
    goose: "geese",
    mouse: "mice",
    man: "men",
    woman: "women",
    sheep: "sheep",
    fish: "fish",
    child: "children",
    person: "people",
    // ox: "oxen",  // This kills the translation of fox, box, etc. Besides, "oxes" is still acceptable
    basis: "bases",
    radius: "radii",
    syllabus: "syllabi",
    means: "means",
    species: "species",
    series: "series",
    dice: "die",
    ice: "ice",
    deer: "deer",
    //  Exceptions:
    fez: "fezzes",
    gas: "gasses",
    bus: "busses",
    // (potato -> potatoes) exceptions
    photo: "photos",
    piano: "pianos",
    halo: "halos",
    // (loaf -> loaves) exceptions:
    roof: "roofs",
    belief: "beliefs",
    chef: "chefs",
    chief: "chiefs",
    reef: "reefs",
    // (bus -> busses) exceptions:
    //      to complicate the matter further, the plural of 'bus' can be either 'buses' or 'busses'. This of course isn't the only ambigous case out there.
    cactus: "cacti",
    focus: "foci",
    // -on to -a exception. Normally a -s is added eg. (onion -> onions)
    phenomenon: "phenomena",
    criterion: "criteria",
    // theres A LOT more missing but I'm not about to populate this list completely. Here are a few more...
    millennium: "millennia",
    youth: "youth",
    louse: "lice"
};
function toPlural(noun) {
    // takes a word and returns the pluralised form
    // eg toPlural("dog") -> "dogs"
    //
    // I've gone ahead and identified more rules missing from the link above as well
    // check empty string
    if (noun == "") {
        return "";
    }
    // check for irregular plurals
    for (var singular in irregularPlurals) {
        var plural = irregularPlurals[singular];
        // rather than directly checking the noun, this allows for irregulars such as cave(man) -> cave(men)
        // check the plurals first
        var regex = new RegExp(plural + "$", "i");
        if (regex.test(noun)) {
            return noun;
        }
        // check the singulars
        regex = RegExp(singular + "$", "i");
        if (regex.test(noun)) {
            return ("".concat(noun.slice(0, noun.length - singular.length)).concat(plural));
        }
    }
    // Just because it ends with -s does not mean it's plural.
    // If it ends in -ss, it's definitely singular.
    // Specific plural checks
    if ((/ses$/i.test(noun))) {
        return (noun);
    }
    if ((/ers$/i).test(noun)) {
        return (noun);
    }
    if ((/ees$/i).test(noun)) {
        return (noun);
    }
    // ====== Rules (from higher to lower priority): ======
    // Not all rules are given tests, but they're still mentioned for context.
    // === Modify to end in -i ===
    //  There isn't really a general rule here,
    //  so everything here falls under the list of exceptions
    //  Examples: 
    //      focus -> foci or focii
    //      cactus -> cacti or cactii (but cactuses and cactusses are acceptable too)
    // contra to -us, bus -> busses, not bi
    // SPECIAL -s singular nouns
    // === Modify -sis to -ses
    // -sis ending
    //      eg. basis, crisis, diagnosis -> crises, diagnoses, bases
    if ((/sis$/i).test(noun)) {
        return ("".concat(noun.slice(0, noun.length - 2), "es"));
    }
    // -ias ending
    //      eg. alias, bias ->  aliases, biases
    if ((/ias$/i).test(noun)) {
        return ("".concat(noun, "es"));
    }
    // === Modify to end in -ices ===
    // Ending in -ex,
    //      eg. index, vortex, vertex -> indices, vortices, vertices
    if ((/ex$/i).test(noun)) {
        return ("".concat(noun.slice(0, noun.length - 2), "ices"));
    }
    // === Modify to end in -ies ===
    // -rry, -ppy, -lly, -ffy, double-consonant-y endings 
    //      eg. cherry, puppy, jelly, fluffy -> cherries, puppies, jellies, fluffies
    //
    // single-consonant-y ending
    //      eg. rice-crispy -> rice-crispies
    // 
    // contra: -ey, -ay -oy, vowel-y endings
    //      eg. toy, ray, key -> toys, rays, keys
    if ((/[^aeiou]y$/i).test(noun)) {
        return ("".concat(noun.slice(0, noun.length - 1), "ies"));
    }
    // === Modify to end in -oes ===
    // eg. potato, tomato, hero -> potatoes, tomatoes, heroes
    // contra: repo, zippo, hippo -> repos, zippos, hippos
    if ((/[rt]o$/i).test(noun)) {
        return ("".concat(noun.slice(0, noun.length - 1), "oes"));
    }
    // === Modify to end in -ves ===
    // Ending in -ife,
    //      eg. life, wife, knife -> lives, wives, knives
    if ((/ife$/i).test(noun)) {
        return ("".concat(noun.slice(0, noun.length - 2), "ves"));
    }
    // Ending in -af:
    //      eg. loaf, leaf -> loaves, leaves
    // Ending in -f
    //      eg. wolf -> wolves
    // contra: roof -> roofs. These go into irregularPlurals above.
    // contra: -ff endings, 
    //      eg. puff, fluff -> puffs, fluffs
    if ((/[^f]f$/i).test(noun)) {
        return ("".concat(noun.slice(0, noun.length - 1), "ves"));
    }
    // === Adding -es === 
    // -ch or -sh ending, 
    //      eg. bench, dish -> benches, dishes
    if ((/[sc]h$/i).test(noun)) {
        return ("".concat(noun, "es"));
    }
    // -ss ending, 
    //      eg. dress, boss -> dresses, bosses
    if ((/ss$/i).test(noun)) {
        return ("".concat(noun, "es"));
    }
    // -x ending
    //      eg. fox, box, tax -> foxes, boxes, taxes
    if ((/x$/i).test(noun)) {
        return ("".concat(noun, "es"));
    }
    // === Adding -ses or -zes ===
    // endings with [aiou][sz]
    //      eg. fez, gas, bus -> fezzes, gasses, busses
    if ((/[^s]s$/i).test(noun)) {
        return ("".concat(noun, "ses"));
    }
    if ((/[^z]z$/i).test(noun)) {
        return ("".concat(noun, "zes"));
    }
    // === Adding -s ===
    // Rule 1s: adding an -s, 
    //      eg. orange, pen -> oranges, pens
    // 
    // Rule 2ys: -ey,-oy, vowel-y ending,
    //      eg. monkey, toy -> monkeys, toys
    //
    // Rule 3ees: just like "trees"!
    //      eg. bee, tree -> bees, trees
    //      This rule counters the "Ending in -es" rule. 
    //      eg, "trees" <-/- "tre" does not play well with "busses" <- "bus"
    // 
    // Rule 4ffs: -ff ending
    //      eg. puff, cliff, fluff -> puffs, cliffs, fluffs
    // all others
    return ("".concat(noun, "s"));
}
function toSingular(noun) {
    // This is an extension of the toPlural(str) method and should be treated as a child method for the purpose of avoiding inf-recursion-loop.
    // This is an attempted inverse-method of toPlural
    // Example usage: 
    //      toSingular("dogs") -> "dog"
    var ret = _toSingular(noun);
    // Consistency check
    if ((ret != noun) && (toPlural(ret) != noun)) {
        // noun was modified when converted to singular, BUT
        // converting back to plural gives a different result
        console.error("toSingular method is inconsistent");
        console.error("toSingular(\"".concat(noun, "\") gives \"").concat(ret, "\" but toPlural(\"").concat(ret, "\") gives \"").concat(toPlural(ret), "\""));
    }
    return ret;
    // defining internal function so that the outer function can check if it worked.
    function _toSingular(noun) {
        // check list of irregulars first
        for (var singular in irregularPlurals) {
            var plural = irregularPlurals[singular];
            // rather than directly checking the noun, this allows for irregulars such as cave(men) -> cave(man)
            // check if singulars found
            var regex = new RegExp(singular + "$", "i");
            if (regex.test(noun)) {
                return (noun);
            }
            //check the plurals
            regex = RegExp(plural + "$", "i");
            if (regex.test(noun)) {
                return ("".concat(noun.slice(0, noun.length - plural.length)).concat(singular));
            }
        }
        // Just because it ends in -s does not make it plural
        // If it ends in ss, it is definitely singular
        if ((/ss$/i).test(noun)) {
            return (noun);
        }
        // If it does not end with -s and its not an irregularPlural either, it's singular
        if ((/[^s]$/i).test(noun)) {
            return (noun);
        }
        // SPECIAL -s singular nouns
        // === Modify -sis to -ses
        // -sis ending
        //      eg. basis, crisis, diagnosis -> crises, diagnoses, bases
        if ((/[^s]ses$/i).test(noun)) {
            return ("".concat(noun.slice(0, noun.length - 2), "is"));
        }
        // -ias ending
        //      eg. alias, bias ->  aliases, biases
        if ((/iases$/i).test(noun)) {
            return ("".concat(noun.slice(0, noun.length - 2)));
        }
        // === Modify to remove -ices ending ===
        // Ending in -ex,
        //      eg. index, vortex, vertex -> indices, vortices, vertices
        if ((/ices$/i).test(noun)) {
            return ("".concat(noun.slice(0, noun.length - 4), "ex"));
        }
        // === Modify to remove -ies ending ===
        // -rry, -ppy, -lly, -ffy, double-consonant-y endings 
        //      eg. cherry, puppy, jelly, fluffy -> cherries, puppies, jellies, fluffies
        //
        // single-consonant-y ending
        //      eg. rice-crispy -> rice-crispies
        // 
        // contra: -ey, -ay -oy, vowel-y endings
        //      eg. toy, ray, key -> toys, rays, keys
        // contra: pies, lies (goes to exceptions)
        if ((/ies$/i).test(noun)) {
            return ("".concat(noun.slice(0, noun.length - 3), "y"));
        }
        // === Modify to remove -oes ending ===
        // eg. potato, tomato, hero -> potatoes, tomatoes, heroes
        // contra: repo, zippo, hippo -> repos, zippos, hippos
        if ((/oes$/i).test(noun)) {
            return ("".concat(noun.slice(0, noun.length - 2)));
        }
        // === Modify to remove -ves ending ===
        // Ending in -ife,
        //      eg. life, wife, knife -> lives, wives, knives
        if ((/ives$/i).test(noun)) {
            return ("".concat(noun.slice(0, noun.length - 3), "fe"));
        }
        // Ending in -af:
        //      eg. loaf, leaf -> loaves, leaves
        // Ending in -f
        //      eg. wolf -> wolves
        if ((/aves|lves$/i).test(noun)) {
            return ("".concat(noun.slice(0, noun.length - 3), "f"));
        }
        // contra: roof -> roofs. These go into irregularPlurals above.
        // contra: -ff endings, 
        //      eg. puff, fluff -> puffs, fluffs
        //  This contra is handled below in remove -s section ...
        // === Remove -es === 
        // -ch or -sh ending, 
        //      eg. bench, dish -> benches, dishes
        // -ss ending, 
        //      eg. dress, boss -> dresses, bosses
        // -x ending
        //      eg. fox, box, tax -> foxes, boxes, taxes
        if ((/xes|ches|shes$/i).test(noun)) {
            return ("".concat(noun.slice(0, noun.length - 2)));
        }
        // contra to /es$/i are lots of  plurals, eg. handles, bibles, etc.
        // === Remove -ses or -zes ===
        // endings with [aiou][sz]
        //      eg. loss, boss, glass -> losses, bosses, glasses
        // 
        // Contra (goes into irregulars):
        //      eg. fez, gas, bus -> fezzes, gasses, busses
        if ((/sses$/i).test(noun)) {
            return ("".concat(noun.slice(0, noun.length - 2)));
        }
        // === Remove -s ===
        // Rule 1s: adding an -s, 
        //      eg. orange, pen -> oranges, pens
        // 
        // Rule 2ys: -ey,-oy, vowel-y ending,
        //      eg. monkey, toy -> monkeys, toys
        //
        // Rule 3ees: just like "trees"!
        //      eg. bee, tree -> bees, trees
        //      This rule counters the "Ending in -es" rule. 
        //      eg, "trees" <-/- "tre" does not play well with "busses" <- "bus"
        // 
        // Rule 4ffs: -ff ending
        //      eg. puff, cliff, fluff -> puffs, cliffs, fluffs
        // all others
        return ("".concat(noun.slice(0, noun.length - 1)));
    }
    // end of definitions. return already declared.
}
function pluralise(noun, amount) {
    // takes a word and a number and returns the number and pluralised form
    // e.g. 
    //      pluralise('cat', 3) returns '3 cats'
    //      pluralise('dog', 1) returns '1 dog'. 
    // check empty string
    if (noun == "") {
        return "";
    }
    // YO this shit is broken, gonna leave it commented for now.
    // Fixing this improves the efficiency, but not the functionality.
    // check if (already plural or not) and whether (amount is single or multi)
    // this is XNOR (using the == operator against 2 comparators)
    // plural and multi -> return as is
    // plural and single -> 'singularise'
    // singular and multi -> 'pluralise'
    // singular and single -> return as is
    // JS allows == operator on strings without a strcmp method invoked
    // Check if (already plural) XNOR (multiple amount) 
    // let regex = new RegExp(`${toPlural(noun)}` + "$", "i");
    // if( (regex.test(noun)) == (amount != 1) ){
    //     // if either (PLURAL AND MULTI) or (SINGULAR AND SINGLE)
    //     // return as is
    //     return(`${amount} ${noun}`);
    // }
    if (amount == 1) {
        // singularise
        return ("".concat(amount, " ").concat(toSingular(noun)));
    }
    else {
        // plurarise:
        return ("".concat(amount, " ").concat(toPlural(noun)));
    }
}
function pluraliseTest() {
    var testsIrregularSingularToPlural = {
        0: { "noun": "mongoose",
            "amt": 2,
            "expected": "2 mongeese"
        },
        1: { "noun": "caveman",
            "amt": 2,
            "expected": "2 cavemen"
        },
        2: { "noun": "sheep",
            "amt": 2,
            "expected": "2 sheep"
        },
        3: { "noun": "syllabus",
            "amt": 2,
            "expected": "2 syllabi"
        },
        4: { "noun": "dice",
            "amt": 2,
            "expected": "2 die"
        },
        5: { "noun": "ice",
            "amt": 2,
            "expected": "2 ice"
        },
        6: { "noun": "rice",
            "amt": 2,
            "expected": "2 rice"
        }
    };
    var testsIrregularPluralToSingular = {
        0: { "noun": "mongeese",
            "amt": 1,
            "expected": "1 mongoose"
        },
        1: { "noun": "cavemen",
            "amt": 1,
            "expected": "1 caveman"
        },
        2: { "noun": "sheep",
            "amt": 1,
            "expected": "1 sheep"
        },
        3: { "noun": "syllabi",
            "amt": 1,
            "expected": "1 syllabus"
        },
        4: { "noun": "die",
            "amt": 1,
            "expected": "1 dice"
        },
        5: { "noun": "ice",
            "amt": 1,
            "expected": "1 ice"
        },
        6: { "noun": "rice",
            "amt": 2,
            "expected": "2 rice"
        }
    };
    var testsNormalSingularToPlural = {
        0: { "noun": "gorilla",
            "amt": 2,
            "expected": "2 gorillas"
        },
        1: { "noun": "fluffer",
            "amt": 2,
            "expected": "2 fluffers"
        },
        2: { "noun": "fluffy",
            "amt": 2,
            "expected": "2 fluffies"
        },
        3: { "noun": "mississipi",
            "amt": 2,
            "expected": "2 mississipis"
        },
        4: { "noun": "knife",
            "amt": 2,
            "expected": "2 knives"
        },
        5: { "noun": "wolf",
            "amt": 2,
            "expected": "2 wolves"
        },
        6: { "noun": "bench",
            "amt": 2,
            "expected": "2 benches"
        },
        7: { "noun": "touch",
            "amt": 2,
            "expected": "2 touches"
        },
        8: { "noun": "fox",
            "amt": 2,
            "expected": "2 foxes"
        },
        9: { "noun": "brother",
            "amt": 2,
            "expected": "2 brothers"
        },
        10: { "noun": "boss",
            "amt": 2,
            "expected": "2 bosses"
        },
        11: { "noun": "bus",
            "amt": 2,
            "expected": "2 busses"
        },
        12: { "noun": "crispy",
            "amt": 2,
            "expected": "2 crispies"
        },
        13: { "noun": "potato",
            "amt": 2,
            "expected": "2 potatoes"
        },
        14: { "noun": "toy",
            "amt": 2,
            "expected": "2 toys"
        }
    };
    var testsNormalPluralToSingular = {
        0: { "noun": "gorillas",
            "amt": 1,
            "expected": "1 gorilla"
        },
        1: { "noun": "fluffers",
            "amt": 1,
            "expected": "1 fluffer"
        },
        2: { "noun": "fluffies",
            "amt": 1,
            "expected": "1 fluffy"
        },
        3: { "noun": "mississipis",
            "amt": 1,
            "expected": "1 mississipi"
        },
        4: { "noun": "knives",
            "amt": 1,
            "expected": "1 knife"
        },
        5: { "noun": "wolves",
            "amt": 1,
            "expected": "1 wolf"
        },
        6: { "noun": "benches",
            "amt": 1,
            "expected": "1 bench"
        },
        7: { "noun": "touches",
            "amt": 1,
            "expected": "1 touch"
        },
        8: { "noun": "foxes",
            "amt": 1,
            "expected": "1 fox"
        },
        9: { "noun": "brothers",
            "amt": 1,
            "expected": "1 brother"
        },
        10: { "noun": "bosses",
            "amt": 1,
            "expected": "1 boss"
        },
        11: { "noun": "busses",
            "amt": 1,
            "expected": "1 bus"
        },
        12: { "noun": "crispies",
            "amt": 1,
            "expected": "1 crispy"
        },
        13: { "noun": "potatoes",
            "amt": 1,
            "expected": "1 potato"
        },
        14: { "noun": "toys",
            "amt": 1,
            "expected": "1 toy"
        }
    };
    var testsOddNumbers = {
        0: { "noun": "dalmation",
            "amt": 101,
            "expected": "101 dalmations"
        },
        1: { "noun": "dalmation",
            "amt": 0,
            "expected": "0 dalmations"
        },
        2: { "noun": "dalmation",
            "amt": -23,
            "expected": "-23 dalmations"
        },
        3: { "noun": "dalmation",
            "amt": 1,
            "expected": "1 dalmation"
        },
        4: { "noun": "dalmation",
            "amt": 837568251,
            "expected": "837568251 dalmations"
        }
    };
    var testsAlreadyPlural = {
        0: { "noun": "busses",
            "amt": 21,
            "expected": "21 busses"
        },
        1: { "noun": "buses",
            "amt": 21,
            "expected": "21 buses"
        },
        2: { "noun": "ranchers",
            "amt": 21,
            "expected": "21 ranchers"
        },
        3: { "noun": "players",
            "amt": 21,
            "expected": "21 players"
        },
        4: { "noun": "trees",
            "amt": 21,
            "expected": "21 trees"
        }
    };
    var testsAlreadySingular = {
        0: { "noun": "rose",
            "amt": 1,
            "expected": "1 rose"
        },
        1: { "noun": "bus",
            "amt": 1,
            "expected": "1 bus"
        },
        2: { "noun": "rancher",
            "amt": 1,
            "expected": "1 rancher"
        },
        3: { "noun": "player",
            "amt": 1,
            "expected": "1 player"
        },
        4: { "noun": "tree",
            "amt": 1,
            "expected": "1 tree"
        }
    };
    function _runTest(testParams, objName) {
        console.log("Running ".concat(Object.keys(testParams).length, " tests in ").concat(objName));
        var testsFailed = 0;
        for (var key in testParams) {
            var obj = testParams[key];
            var noun = obj["noun"];
            var amt = obj["amt"];
            var expected = obj["expected"];
            var result = pluralise(noun, amt);
            if (result != expected) {
                testsFailed++;
                console.log("FAIL - Key:".concat(key, "\t Expected: ").concat(expected, " \t Result: ").concat(result));
            }
        }
        if (testsFailed == 0) {
            console.log("OK - PASSED ALL TESTS");
        }
        else {
            console.log("FAILED ".concat(testsFailed, " of ").concat(Object.keys(testParams).length, " tests in ").concat(objName));
        }
        console.log("");
        return;
    }
    _runTest(testsIrregularSingularToPlural, "testsIrregularSingularToPlural");
    _runTest(testsIrregularPluralToSingular, "testsIrregularPluralToSingular");
    _runTest(testsNormalSingularToPlural, "testsNormalSingularToPlural");
    _runTest(testsNormalPluralToSingular, "testsNormalPluralToSingular");
    _runTest(testsAlreadySingular, "testsAlreadySingular");
    _runTest(testsAlreadyPlural, "testsAlreadyPlural");
    _runTest(testsOddNumbers, "testsOddNumbers");
    return;
}
pluraliseTest();
