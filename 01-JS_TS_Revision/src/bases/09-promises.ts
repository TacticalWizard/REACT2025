
const myPromise = new Promise(( resolve, reject ) => { //<> generic

    setTimeout(() => {
        //resolve('Success');
        reject("Error")
    }, 2000); //2 seconds
})

myPromise.then((promisedReturn) => {
    console.log(`myPromiseReturnedSomething: ${promisedReturn}`)
})
.catch( reason => {
    console.warn(reason)
})
.finally(() => {
    console.log('Follow regarding the result')
})

