

/*const myArray:number[] = [1,2,3,'4',5,6];

myArray.push(11);
myArray.push('11');

//example of TS use for detecting type errors.
*/

const myArray: (number|string)[] = [1,2,3,'4',5,6]; //multiple types can also be addedN


/*const myArray2 = myArray;

myArray2.push(15); //this would be added to myArray and myArray2, sincer we are copying the memory space.
*/

/*
const myArray2 = [...myArray]; //spread operator to push a value only to the second array, but this can only be done to the first level of the array.

myArray2.push(15);
*/

const myArray2 = structuredClone(myArray) //this should be it

myArray2.push(15);
