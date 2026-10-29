async function fetchPokemon() {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon/34');
    let data = await response.json();
    console.log(data);

    let name = document.querySelector("#name");
    name.textContent = data.name;

    let typesElement = document.querySelector("#types");
    typesElement.textContent = data.types.map(t => t.type.name).join(", ");

    let image = document.querySelector("#pokemon-img");
    image.src = data.sprites.front_default;
    image.alt = data.name;

    const labels = ["HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed"];
    const statElements = document.querySelectorAll(".stat");

    statElements.forEach((element, index) => {
        element.textContent = labels[index] + ": " + data.stats[index].base_stat;
    });

    let moves = document.querySelector('#moves');
    moves.innerHTML = ""; 
    
    data.moves.forEach((element) => {
        if(element.version_group_details[0].move_learn_method.name === "level-up") {
            moves.innerHTML += `<li>${element.move.name}</li>`;
        }
    });
}

fetchPokemon();