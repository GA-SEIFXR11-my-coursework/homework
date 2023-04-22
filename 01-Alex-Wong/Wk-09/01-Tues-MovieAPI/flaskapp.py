from flask import Flask, render_template, redirect, request as req
from enum import Enum

import requests


app = Flask(__name__)
class Movie_Searcher():
    # https://www.omdbapi.com/
    class Options(Enum):
        BY_SEARCH = "by_search"
        BY_TITLE = "by_title"

    url_base = "https://www.omdbapi.com/"
    apikey = ""
    search_title = ""
    response: any
    
    def read_apikey(self) -> str:
        filename = ".apikey"
        fp = open(filename, "r")
        apikey = fp.readline()
        fp.close()
        self.apikey = apikey
        return apikey

    def _search_movies(self, option: Options):
        title_formatted = "+".join(self.search_title.split())
        match option:
            case self.Options.BY_SEARCH:
                url = f"{self.url_base}?apikey={self.apikey}&s={title_formatted}"
            case self.Options.BY_TITLE:
                url = f"{self.url_base}?apikey={self.apikey}&t={title_formatted}"
            case _:
                raise ValueError(f"Invalid option: {option}")
        response = requests.get(url).json()
        self.response = response
        return response
    
    # BY_TITLE seems useless ...
    def search_all_movies(self):
        return self._search_movies(self.Options.BY_SEARCH)
    
    #  Need to implement a "by ID" search to get specifc movie
    def search_movie_by_id(self, search_id):
        url = f"{self.url_base}?apikey={self.apikey}&i={search_id}"
        response = requests.get(url).json()
        self.response = response
        return response
    
    def set_search_title(self, title):
        self.search_title = title
        return
        
movie_searcher = Movie_Searcher()
movie_searcher.read_apikey()

@app.route("/")
def html_home():
    return render_template("home.html")
    
@app.route("/movie_not_found")
def html_not_found():
    return render_template("movie_not_found.html")

@app.route("/movie")
def html_movie():
    movie_id = req.args.get("imdbID")
    if movie_id == None:
        try:
            movie_id = movie_searcher.response["Search"][0]["imdbID"]
        except:
            return render_template("movie_not_found.html")
            # raise ValueError("Invalid movie_searcher.response")
    movie = movie_searcher.search_movie_by_id(movie_id)
    return render_template("movie.html", movie=movie)

@app.route("/movies")
def html_movies():
    movies = movie_searcher.response["Search"]
    return render_template("movies.html", movies = movies)

@app.route("/get_title")
def get_title():
    title = req.args.get("title")
    movie_searcher.set_search_title(title)
    response = movie_searcher.search_all_movies()
    if response["Response"] == "False":
        return redirect("/movie_not_found")
    if response["totalResults"] == "1":
        return redirect("/movie")
    return redirect("/movies")
 
if __name__ == "__main__":
    app.run(debug=True)
    