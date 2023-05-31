var listOfPokemon = [
  // eg. { title: 'something' }
];

var listOfTypes = [];

// retrieve list of pokemon
axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
  .then(function(response){
    let pokelist = response.data.results;
    for(let index in pokelist){
      let pokemon = pokelist[index]
      listOfPokemon.push({
        title: pokemon["name"],
        id: (Number(index)+1),
        apiurl: pokemon["url"]
      })
    }
    updatePokemonSearchBox()
  })

// retrieve list of types
axios.get('https://pokeapi.co/api/v2/type/')
  .then(function(response){
    let typelist = response.data.results;
    for(let index in typelist){
      let type = typelist[index]
      listOfTypes.push({
        name: type["name"],
        value: type["name"],
        id: (index+1),
        apiurl: type["url"]
      })
    }
    updatePokemonTypeDropdown()
  })

function updatePokemonSearchBox(){
  $('#pokeSearch')
    .search({
      source: listOfPokemon,
      onSelect: function(result,response){
        // result is the selected result
        // response is the filtered list of results
        getPokemonInfo(result)
        return true
      }
    })
  ;
  return true
}

function updatePokemonTypeDropdown(){
  console.log(listOfTypes)
  $('#s_types')
    .dropdown({
      maxSelections: 2,
      values: listOfTypes,
    })
    .on("change", function(){
      console.log($('#s_types').dropdown('get values'))
    })
  ;
}

function getPokemonInfo(result) {
    let url = result["apiurl"];
    axios.get(url)
      .then(function(response) {
        let data = response.data;
        let types = data['types'];
        let pokemonName = data['name'];
        let artWork = data['sprites']['other']['official-artwork']['front_default'];
        let abilities = data['abilities'];
        
        for (let item of types) {
          let type = item['type']['name'];
          document.getElementById('type').textContent = `Type: ${type}`;
        }
        let abilitiesContainer = document.createElement('div');
        let abilitiesTitle = document.createElement('p');
        abilitiesTitle.textContent = 'Abilities:';
        abilitiesContainer.appendChild(abilitiesTitle);

        let abilitiesList = document.createElement('ul');
        abilitiesList.style.listStyleType = 'none';
        
        for (let ability of abilities) {
          let abilityName = ability['ability']['name'];
          let abilityElement = document.createElement('li');
          abilityElement.textContent = `• ${abilityName}`;
          abilitiesList.appendChild(abilityElement);
        }
        abilitiesContainer.appendChild(abilitiesList);
        document.getElementById('abilities').appendChild(abilitiesContainer);
        document.getElementById('pokemonName').textContent = `Name: ${pokemonName}`;
        document.getElementById('artWork').src = artWork;
      });
  }


