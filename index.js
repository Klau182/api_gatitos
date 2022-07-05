console.log("prueba de enlace js")

const URL = "https://api.thecatapi.com/v1/images/search"

fetch(URL)
    .then(res => res.json())//interpretando los datos para que los entienda javascript
    .then(data => {
        const img = document.querySelector("img")
        img.src = data[0].url
    })


