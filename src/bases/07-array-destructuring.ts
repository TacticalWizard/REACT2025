const namesList = [ 'Norbert','Rudolph', 'john']

//const [name1, name2, name3] = namesList //in destructuring of arrays, the order matters. (Unlike obj destructuring)
//console.log({ name1, name2, name3 })

const [, , name3] = namesList; //in destructuring of arrays, the order matters. (Unlike obj destructuring)
console.log({ name3 })

const returnsArrayFn = () => {
    return ['ABC', 123] as const; //always read only and always strings in the first array value, and numbers in the second 
}

const [letters, numbers] = returnsArrayFn();
console.log({ letters, numbers })