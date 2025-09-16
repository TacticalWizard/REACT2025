import '../style.css'
import './02-template-string'

const firstName: string  = "Ezequiel";
const lastName = "Orsingher";

const containsLetterH = lastName.includes("h");

/* example of type error
let number = 5
number = '2'
*/

console.log({ containsLetterH, /*number*/ }); //between brackets it prints variables with the value next to it
console.log(firstName, lastName);