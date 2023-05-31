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
      console.log(response.data)
    })
}