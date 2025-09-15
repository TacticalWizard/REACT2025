import type { GiphyRandomResponse, Gif } from '../data/giphy.response' //imported interface for strict typing

const API_KEY = 'L3CDx3S4YGlKaGgIIqYwOEMwwo261c0t'; 

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)

const createImageInsideDom = (url: string) => {
    const imgElement = document.createElement('img')
    imgElement.src = url;

    document.body.append(imgElement)
}

myRequest
.then((response) => response.json())
.then(({ data }: GiphyRandomResponse) => {  //chained promises and use of strict typing. destructuring of data to avoid data.data
    const imageUrl = data.images.original.url
    //console.log(imageUrl)
    createImageInsideDom(imageUrl)
}) 
.catch((err) => {
    console.log(err)
})