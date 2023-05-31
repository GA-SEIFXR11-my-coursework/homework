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
        name: pokemon["name"],
        value: pokemon["name"],
        apiurl: pokemon["url"]
      })
    }
    updatePokemonSearchBox(listOfPokemon)
    updateFilteredPokemonSearchBox([])
  })

// retrieve list of types
axios.get('https://pokeapi.co/api/v2/type/')
  .then(function(response){
    let typelist = response.data.results;
    for(let index in typelist){
      let type = typelist[index]
      listOfTypes.push({
        name: type["name"],
        title: type["name"],
        value: type["name"],
        apiurl: type["url"]
      })
    }
    updatePokemonTypeDropdown()
  })

function updatePokemonSearchBox(pokeList){
  $('#pokeSearch')
    .search({
      source: pokeList,
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

function updateFilteredPokemonSearchBox(pokeList){
  $('#filteredPokeSearch')
    .dropdown('destroy')
    .dropdown({
      values: pokeList,
      placeholder: "Filtered by type...",
      allowReselection: true,
      onChange: function(value,text,e){
        let selected_pokemon = listOfPokemon
          .filter(function(val){
            return(val["name"] == value)
          })[0]
        getPokemonInfo(selected_pokemon)
        return true
      }
    })
  ;
  return true
}

function updatePokemonTypeDropdown(){
  $('#s_types')
    .dropdown({
      maxSelections: 2,
      values: listOfTypes,
      placeholder: "Types"
    })
    .on("change", filterPokemonByType)
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
function filterPokemonByType(){
  let selected_types = $('#s_types').dropdown('get values')
  var pokelist = []
  var promise = null
  switch(selected_types.length){
    case 1:
      let type_url = listOfTypes
        .filter(function(obj){
          return obj["name"] == selected_types[0]
        })[0]["apiurl"]
      promise = axios.get(type_url)
        .then(function(response){
          let results = response.data.pokemon
          for(let item of results){
            pokelist.push(item["pokemon"])
          }
        })
      break;
    case 2:
      let type_1_url = listOfTypes
        .filter(function(obj){
          return obj["name"] == selected_types[0]
        })[0]["apiurl"]
      let type_2_url = listOfTypes
        .filter(function(obj){
          return obj["name"] == selected_types[1]
        })[0]["apiurl"]
      promise = axios.all([
          axios.get(type_1_url),
          axios.get(type_2_url),
        ])
        .then(axios.spread(function(response1,response2){
          let list_1 = response1.data.pokemon
          let list_2 = response2.data.pokemon
          for(let item_1 of list_1){
            for(let item_2 of list_2){
              if(item_1["pokemon"]["name"] === item_2["pokemon"]["name"]){
                pokelist.push(item_1["pokemon"])
              }
            }
          }
        }))
      break;
    default:
      console.log("no type selected")
  }
  if(promise == null){
    updateFilteredPokemonSearchBox([])
    return
  }
  promise.then(()=>{
    let fitered_pokelist = []
    for(let pokemon of pokelist){
      fitered_pokelist.push({
        name: pokemon["name"],
        title: pokemon["name"],
        value: pokemon["name"],
        apiurl: pokemon["url"]
      })
    }
    updateFilteredPokemonSearchBox(fitered_pokelist)
  })
  return
}


