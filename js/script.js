// # Get data from PokeApi
const url = "https://pokeapi.co/api/v2/pokemon/";

// # Function for get Pokemon of the API
const getPokemon = async (pokemon) => {
  // ?  Set the contents
  var typesPoke = [];
  var typesStats = [];

  // ? Fetch the data of the pokemon
  await fetch(`${url}${pokemon}`)
    .then((response) => response.json())
    .then((data) => {
      // ? Get the elements of the DOM
      var div = document.getElementById("divContainer");
      var divGroup = document.getElementById("group");

      // ? For each type it fill the array
      data.types.forEach((type) => {
        typesPoke.push(type);
      });

      // ? For each type of stat
      data.stats.forEach((type) => {
        typesStats.push(type);
      });

      // ? Verify if the name is empty
      if (!pokemon == "") {
        // ? Set the HTML with information of the Pokemon has been searched
        div.innerHTML = `
      <div class="row" id="img">
          <img src="${data.sprites.front_default}" class="w-md-50">
        </div>
      <div class="w-100 row container__stats">

        <div class="col" id="info">
          <div class="element">
            <h3>Nombre: </h3>
            <p class="m-0">${data.name}</p>
          </div>
          <div class="element">
            <h3>Tipo: </h3>
            <p class="m-0">${typesPoke[0].type.name}</p>
          </div>
        </div>

        <div class="col" id="info">
          <div class="element">
            <h3>Vida: </h3>
            <p class="m-0">${typesStats[0].base_stat}</p>
          </div>
          <div class="element">
            <h3>Ataque: </h3>
            <p class="m-0">${typesStats[1].base_stat}</p>
          </div>
          <div class="element">
            <h3>Defensa: </h3>
            <p class="m-0">${typesStats[2].base_stat}</p>
          </div>
        </div>

        <div class="col" id="info">
          <div class="element">
            <h3>Ataque Especial: </h3>
            <p class="m-0">${typesStats[3].base_stat}</p>
          </div>
          <div class="element">
            <h3>Defensa Especial: </h3>
            <p class="m-0">${typesStats[4].base_stat}</p>
          </div>
          <div class="element">
            <h3>Velocidad: </h3>
            <p class="m-0">${typesStats[5].base_stat}</p>
          </div>
        </div>

      </div>`;

        // ? If the name is empty show this error message
      } else {
        divGroup.innerHTML = `
      <div class="element">
        <p class="p-danger">Escriba un Nombre</p>
      </div>`;
      }
    })

    // ? Error during fetch
    .catch((err) => console.log(err));
};

// # Function for get Pokemons of the API
const getAllPokemons = async () => {
  // ? Set globals variables
  var i = 0;

  // ? Get elements of the DOM with id
  var table = document.getElementById("tbody");

  // ? Fetch the data of the pokemon
  await fetch(`${url}?offset=20&limit=5000"`)
    .then((response) => response.json())
    .then((data) => {
      table.innerHTML = "";
      var tbody = "<tbody>";

      for (x of data.results) {
        i++;
        tbody += `<tr><td>${i}</td><td>${x.name}</td></tr>`;
      }

      tbody += "</tbody>";

      table.innerHTML = tbody;
    });

  return (
    data

      // ? Error during fetch
      .catch((err) => console.log(err))
  );
};

// # Call the function
getAllPokemons();

// # Get name of the input
const getValueInput = () => {
  let namePoke = document.getElementById("namePoke").value;
  let lowerName = namePoke.toLowerCase();
  return lowerName;
};

// # Show the pokemon that has been searched
const showPokemon = () => {
  let namePoke = getValueInput();
  getPokemon(namePoke);
};