//exercise 10 using Async-Await

import type { GiphyRandomResponse, Gif } from '../data/giphy.response' //imported interface for strict typing

const API_KEY = 'L3CDx3S4YGlKaGgIIqYwOEMwwo261c0t'; 

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

const createImageInsideDom = (url: string) => {
    const imgElement = document.createElement('img')
    imgElement.src = url;

    document.body.append(imgElement)
}

const getRandomGifUrl = async (): Promise<string> => {

    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`) //await only works inside asynchronous function

    const { data }: GiphyRandomResponse = await response.json();

    return data.images.original.url;
}


/*myRequest
.then((response) => response.json())
.then(({ data }: GiphyRandomResponse) => {  //chained promises and use of strict typing. destructuring of data to avoid data.data
    const imageUrl = data.images.original.url;
    //console.log(imageUrl)
    createImageInsideDom(imageUrl);
}) 
.catch((err) => {
    console.log(err)
}) */

getRandomGifUrl().then(
    /*url => createImageInsideDom(url)*/ createImageInsideDom //if an argument is sent as parameter of the same function, it can be simplified this way. 
)