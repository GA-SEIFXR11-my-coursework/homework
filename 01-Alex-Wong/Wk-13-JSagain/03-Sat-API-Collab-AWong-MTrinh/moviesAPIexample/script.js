const movieSection = document.querySelector(".movie");
const searchButton = document.getElementById("search-btn");
const loadingMsg = document.querySelector(".loading")

searchButton.addEventListener("click", (event) => {
    const movieName = document.getElementById("movie-name").value;
    // getMovie(movieName);
    getMovies(movieName);
});

function getMovie(movieName) {
  axios
    .get("http://omdbapi.com?apikey=8bb69ea0&t=" + movieName)
    .then((response) => {
        const movie = response.data;
        const heading = document.createElement("h2");
        heading.textContent = movie.Title;
        movieSection.appendChild(heading);
        const plot = document.createElement("p");
        plot.textContent = movie.Plot;
        movieSection.appendChild(plot);
    });
}

function getMovieById(imdbID){
    loadingMsg.classList.toggle("hidden", false)
    movieSection.innerHTML = ""
    axios
    .get(`http://omdbapi.com?apikey=8bb69ea0&i=${imdbID}`)
    .then((response) => {
        if(response.data["Response"] != "True"){
            let msg = document.createElement("p")
            msg.textContent = "invalid search"
            movieSection.appendChild(msg)
            return true
        }
        let {Title, Released, Poster, Plot, Director, Language, Actors, Country, Genre, Metascore} = response.data
        movieSection.innerHTML = `
        <div class="moviePoster">
            <h2>${Title}</h2>
            <img src="${Poster}"></img>
            <p>Released: ${Released}</p>
            <p>Director: ${Director}</p>
            <p>Actors: ${Actors}</p>
            <p>Country: ${Country}</p>
            <p>Language: ${Language}</p>
            <p>Genre: ${Genre}</p>
            <p>Metascore: ${Metascore}</p>
            <p>Plot: ${Plot}</p>
        </div>
        `
    })
    .then((response)=>{
        loadingMsg.classList.toggle("hidden", true)
    })
}

function getMovies(search){
    loadingMsg.classList.toggle("hidden", false)
    movieSection.innerHTML = ""
    axios
    .get(`http://omdbapi.com?apikey=8bb69ea0&s=${search}`)
    .then((response) => {
        if(response.data["Response"] != "True"){
            let msg = document.createElement("p")
            msg.textContent = "invalid search"
            movieSection.appendChild(msg)
            return true
        }
        response.data["Search"]
            .forEach(function(result){
                let {Poster, Title, Year, Type, imdbID} = result
                let card_elem = document.createElement("div")
                let title_elem = document.createElement("h2")
                let image_elem = document.createElement("img")
                let year_elem = document.createElement("p")
                title_elem.textContent = Title
                image_elem.src = Poster
                year_elem.textContent = `Year: ${Year}`
                card_elem.classList.add("movieCard")
                card_elem.appendChild(title_elem)
                card_elem.appendChild(year_elem)
                card_elem.appendChild(image_elem)
                card_elem.addEventListener("click",function(e){
                    getMovieById(imdbID)
                })
                movieSection.appendChild(card_elem)
            })
        })
    .then((response)=>{
        loadingMsg.classList.toggle("hidden", true)
    })
}