var listOfPokemon = [
  // eg. { title: 'something' }
];

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
  })
  .then(function(){
    $('.ui.search')
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
  })

function getPokemonInfo(result){
  let url = result["apiurl"]
  axios.get(url)
    .then(function(response){
        let data = response.data
        let types = data['types']
        let pokemonName = data['name']
        let artwork = data['sprites']['other']['official-artwork']['front_default']
        for(let item of types) {
            let type = item['type']['name']
            console.log(type);
        }   
        console.log(pokemonName)
        console.log(artwork)
        console.log(response.data)
    })
}


