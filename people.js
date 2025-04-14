// Importo le funzioni
const fullnameFunction = require(`./names.js`);
const hobbiesFunction = require(`./hobbies.js`);

// Functions
const createPerson = () => {
    const fullname = fullnameFunction(firstName, lastName);
    const hobbies = hobbiesFunction(hobbyOne, hobbyTwo, hobbyThree);
    return ({ fullname, hobbies });
}

// Corpo del programma

// Dichiarazione variabili
const firstName = `Francesco`;
const lastName = `Palazzo`;
const hobbyOne = `Film`;
const hobbyTwo = `Videogiochi`;
const hobbyThree = `Palestra`;

// Richiamo funzione
let person = createPerson();

// Stampo il risultato
console.log(person);