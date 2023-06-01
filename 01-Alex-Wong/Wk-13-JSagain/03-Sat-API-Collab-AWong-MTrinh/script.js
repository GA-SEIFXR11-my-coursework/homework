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
      placeholder: "Pokemon by type...",
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
      // console.log("no type selected")
  }
  if(promise == null){
    updateFilteredPokemonSearchBox([]);
    $('#pokeSearch').toggleClass("hide", false);
    $('#filteredPokeSearch-container').toggleClass("hide", true);
  }else{
    $('#pokeSearch').toggleClass("hide", true);
    $('#filteredPokeSearch-container').toggleClass("hide", false);
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
      $('#pokeSearch').search('set value', "")
      updateFilteredPokemonSearchBox(fitered_pokelist)
    })
  }
  return
}

function getPokemonInfo(result) {
  $('#info-container').toggleClass("invis", false)

  let e_abilities = document.getElementById('abilities')
  let e_type = document.getElementById('type')
  let e_artWork = document.getElementById('artWork')
  let e_pokemonName = document.getElementById('pokemonName')
  
  let url = result["apiurl"];
  axios.get(url)
    .then(function(response){
      let data = response.data;
      let types = data['types'];
      let pokemonName = data['name'];
      let artWork = data['sprites']['other']['official-artwork']['front_default'];
      let abilities = data['abilities'];

      // wipe/reset content
      e_abilities.innerHTML = ""
      e_type.innerHTML = ""
      e_artWork.innerHTML = ""
      e_pokemonName.innerHTML = ""

      e_pokemonName.textContent = pokemonName;
      e_artWork.src = artWork;

      let type_text = "Type: "
      for (let type of types) {
        type_text += `${type['type']['name']}, `;
      }
      type_text = type_text.slice(0, type_text.length-2) // remove ending comma
      e_type.textContent = type_text

      let abilitiesTitle = document.createElement('p');
      abilitiesTitle.textContent = 'Abilities:';
      e_abilities.appendChild(abilitiesTitle);

      let abilitiesList = document.createElement('ul');
      abilitiesList.style.listStyleType = 'none';
      for (let ability of abilities) {
        let abilityName = ability['ability']['name'];
        let abilityElement = document.createElement('li');
        abilityElement.textContent = `• ${abilityName}`;
        abilitiesList.appendChild(abilityElement);
      }
      e_abilities.appendChild(abilitiesList);
    });
}
