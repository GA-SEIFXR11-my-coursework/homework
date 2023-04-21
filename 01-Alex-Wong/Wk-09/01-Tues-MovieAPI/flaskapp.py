from flask import Flask, render_template, request as req
from enum import Enum

import requests

class Movie_Search_Options(Enum):
    BY_SEARCH = "by_search"
    BY_TITLE = "by_title"

app = Flask(__name__)

def read_apikey() -> str:
    filename = ".apikey"
    fp = open(filename, "r")
    apikey = fp.readline()
    fp.close()
    return apikey

def search_movies(option: Movie_Search_Options, apikey:str, title:str):
    url_base = "https://www.omdbapi.com/"
    url_api = f"?apikey={apikey}"
    title_formatted = "+".join(title.split())
    match option:
        case Movie_Search_Options.BY_SEARCH:
            url_search = f"s={title_formatted}"
        case Movie_Search_Options.BY_TITLE:
            url_search = f"t={title_formatted}"
        case _:
            raise ValueError(f"Invalid option: {option}")
    url = f"{url_base}{url_api}&{url_search}"
    response = requests.get(url).json()
    return response

@app.route("/")
def html_root():
    return render_template("base.html")
    
@app.route("/movie")
def html_root():
    return render_template("movie.html")

if __name__ == "__main__":
    app.run(debug=True)
    