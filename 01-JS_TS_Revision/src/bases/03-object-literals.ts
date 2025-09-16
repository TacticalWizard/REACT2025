
//Defines object templates. Does not get transpiled into JS
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    adress: Adress;
}

interface Adress {
    place: string;
    postalCode: number;
}

const ironman: Person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    adress: {
        place: 'Avenger tower',
        postalCode: 1686
    }
}

console.log(ironman);



//const spiderman = ironman; //this would duplicate the memory space but it is not the 'cloning' of the object

//const spiderman = { ...ironman} //spread operator to break references in first level

const spiderman = structuredClone(ironman) //this is a JS method. check out MDN docu reference but this would be the correct way of 'cloning' an object

spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';
spiderman.age = 22;
spiderman.adress.place = 'Avenger tower basement'

console.log(ironman);
console.log(spiderman);