console.log("js is working");
//"https://pokeapi.co/api/v2/pokemon/"

fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((response) => response.json())
    .then((data) => {
        printData(data)
        fetch(data.results[0].url)
            .then(response => response.json())
            .then(pokemonData => {
                const elementImg = document.createElement('img');
                elementImg.setAttribute("src", pokemonData.sprites.front_default)
                const li = document.getElementById(pokemonData.sprites.front_default);
                li.appendChild(elementImg);


                console.log(pokemonData.sprites.back_default);

            })
    })
    .catch((error) => { console.log(error); })
function printData(data) {

    const ulElement = document.querySelector("#list");
    data.results.forEach(element => {
        fetch(element.url)
            .then((response) => {
                return response.json()
            })
            .then((pokemonData) => {
                const imageURL = pokemonData.sprites.front_default
            })
        const liElement = document.createElement("li");
        liElement.id = element.name
        liElement.innerHTML = `<h2>${element.name} <img src=${imageURL}</h2>`
        ulElement.appendChild(liElement);
        console.log(element);
    });
}

