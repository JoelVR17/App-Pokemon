// # Get data from PokeApi
const url = "https://pokeapi.co/api/v2/pokemon/";

// # Function for get Pokemon of the API
const getPokemon = async (pokemon) => {
  try {
    const response = await fetch(`${url}${pokemon}`);
    if (!response.ok) {
      alert("No registrado en la PokeDex");
      return;
    }

    const sought = await response.json();

    return sought;
  } catch (e) {
    console.log(e);
  }
};

// # Function for get Pokemons of the API
const getAllPokemons = async () => {
  try {
    const response = await fetch(`${url}?offset=20&limit=500"`);
    if (!response.ok) {
      alert("Error");
      return;
    }

    const sought = await response.json();
    return sought;
  } catch (e) {
    console.log(e);
  }
};

// # Get name of the input
const getValueInput = () => {
  let namePoke = document.getElementById("namePoke").value;
  return namePoke;
};

// # Show the pokemon that has been searched
const showPokemon = () => {
  let namePoke = getValueInput();
  let pokemon = getPokemon(namePoke);
  var div = document.getElementById("divContainer");
  var divGroup = document.getElementById("group");

  console.table(pokemon);

  if (!namePoke == "") {
    div.innerHTML = `
    <div class="w-100 row">
      <div class="col" id="img">
        <img src="./img/logo.webp" class="w-50">
      </div>
    <div class="col" id="info">
      <div class="element">
        <h3>Nombre: </h3>
        <p class="m-0">Pikachu</p>
      </div>
      <div class="element">
        <h3>Tipo: </h3>
        <p class="m-0">Fuego</p>
      </div>
    </div>`;
  } else {
    divGroup.innerHTML = `
    <div class="element">
      <p class="p-danger">Escriba un Nombre</p>
    </div>`;
  }
};

// # Get the canvas
const chart = document.getElementById("myChart");

// # Create the chart
new Chart(chart, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
