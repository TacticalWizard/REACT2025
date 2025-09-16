

function greet ( name:string): string{
    return `Hola ${name}`;
}

//arrow function. 
// Does not change the "This" object | creates an anonimous function and assigns to variable greet2 | 
// Cannot reasign the variable/function
const greet2 = (name: string ): string =>  {
    return `Hola ${name}`
}

const message = greet('Norberto');
const message2 = greet2('Pablo');


console.log(message, message2)

/******************************************** */
//methods: Functions that are inside an object.
/******************************************** */

function getUser() {
    return {
        uid: 'ABC-123',
        username: 'Pepe_505'
    }
}

const user = getUser();

console.log(user)

//in arrow mode
const getUser2 = () => {
    return {
        uid: 'ABC-123',
        username: 'Pepe_505'
    }
} 


const user2 = getUser2();

console.log(user2);




//interface
interface User {
    uid: string;
    username: string;
}

//arroy function wich only returns one thing can be simplified in the following way
const getUser2simplified = ():User => ({
        uid: 'ABC-123',
        username: 'Pepe_505'
})

const userSimplified = getUser2simplified();
console.log(userSimplified);

//////////Example with "callback functions" (A function that is passed as an argument to another function, executed later) 
const myNumbers = [1, 2, 3, 4, 5];

/*myNumbers.forEach(function(value) {
    console.log(value);
})*/

//Into arroy function
myNumbers.forEach((value) => {
    console.log(value);
})

///If a function only passes the same variable to another function, can be simplified doing the following 
myNumbers.forEach(console.log)


