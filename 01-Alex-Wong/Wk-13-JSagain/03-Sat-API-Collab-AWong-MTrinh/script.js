var listOfPokemon = [
  // eg. { title: 'something' }
];

axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
  .then(function(response){
    let pokelist = response.data.results;
    for(let pokemon of pokelist){
      listOfPokemon.push({
        title: pokemon["name"],
        url: pokemon["url"]
      })
    }
  })
  .then(function(){
    $('.ui.search')
      .search({
        source: listOfPokemon
      })
    ;
  })

