
const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman',
};

/* Not necessary, use destructuring instead
const name = person.name;
const age = person.age;
const key = person.key;
*/

const {  key, name: ironmanName, age } = person;

console.log( ironmanName, age, key);

interface Hero {
    name: string;
    age: number;
    key: string;
    rank? : string;
}

const useContext =  ({ key, name, age, rank}: Hero) => {
    return {
        keyName: key,
        user: {
            name, //pair - value with the same name can be simplified like this
            age,
        },
        rank: rank,
    };
}


//const context = useContext(person)

const { keyName, rank} = useContext(person)
console.log({ keyName, rank })

//destructuring of objects inside other objects
const {user: {name} } = useContext(person) 
console.log({ name })

//const { name } = user; More easy to read