var elvenNames = ['celebrimbor', 'elendil', 'fëanor', 'galadriel', 'finrod', 'legolas', 'glorfindel'];

var hobbitNames = ['amaranth', 'bilbo', 'celandine', 'doderic', 'elanor', 'fortinbras', 'goldilocks'];

var dwarfNames = ['dwalin', 'balin', 'kili', 'fili', 'dori', 'nori', 'ori', 'oin', 'gloin', 'bifur', 'bofur', 'bombur', 'thorin'];

const syllableRegex = /[^aeiouy]*[aeiouy]+(?:[^aeiouy]*$|[^aeiouy](?=[^aeiouy]))?/gi;



var silabas = syllablesList(dwarfNames.map(syllabify));


var names = generateNameList(10, silabas);

console.log(names);


function syllablesList(syllables) {
    result = [];

    syllables.map(function (syllable) {
        result = result.concat(syllable);    
    });

    return result;
}

function syllabify(words) {
    return words.match(syllableRegex);
}


function generateName(syllables) {
    let number;
    let result = '';
    let max = 3;
    let min = 2;
    let numSyllables = Math.floor(Math.random() * (max - min + 1)) + min;

    for (let index = 0; index < numSyllables; index++) {
        number = Math.floor(Math.random() * (syllables.length));
        
        result = result + syllables[number];

        syllables.splice(number, 1);

    }

    return result
}


function generateNameList(qtd, syllables) {
    result = [];

    for (let index = 0; index < qtd; index++) {
        syllablesCopy = syllables.map((x) => x);

        result.push(generateName(syllablesCopy));
    }

    return result;
}





/* MIX
0: "borgado"
1: "rimerodbor"
2: "ladrafroa"
3: "efindofro"
4: "fëariela"
5: "rarim"
6: "rodfrorim"
7: "borgornroddil"
8: "gornefrorod"
9: "rodgorn"
*/


/* ELFO
0: "celebnordil"
1: "race"
2: "borfroa"
3: "ceraenor"
4: "lena"
5: "lebfina"
6: "frorielnor"
7: "cebor"
8: "celeblad"
9: "elad"
*/


/* HOBBIT
0: "locksla"
1: "dibilefor"
2: "diric"
3: "dila"
4: "delocks"
5: "fordo"
6: "tindi"
7: "ranthlan"
8: "nedidie"
9: "brasranthlabil"
*/


/* ANAO
0: "ribitho"
1: "furli"
2: "thorinki"
3: "bokibur"
4: "furli"
5: "kidwalin"
6: "noki"
7: "furlintho"
8: "lirin"
9: "burribom"
*/