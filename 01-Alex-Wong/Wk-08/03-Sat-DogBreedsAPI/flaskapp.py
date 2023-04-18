import requests
import random

from flask import Flask, render_template, request as req

def getBreeds() -> list[str]:
    # https://dog.ceo/dog-api/documentation/
    response = requests.get("https://dog.ceo/api/breeds/list/all")
    breeds: list[str] = []
    content_type = response.headers['Content-Type']
    if ( content_type == "application/json" ):
        breedsJSON = response.json()
    else:
        raise Exception(f"Invalid content type - Content must be JSON but {content_type} found instead.")
    for base, prefix_list in breedsJSON["message"].items():
        if len(prefix_list) == 0:
            breeds.append(base)
            continue
        for prefix in prefix_list:
            breeds.append(f"{prefix} {base}")
    return breeds

def html_dogs(breed, amount: int):
    # https://dog.ceo/dog-api/documentation/sub-breed
    capitalised = ' '.join([x.capitalize() for x in breed.split()])
    parts = breed.split()
    if len(parts) == 1:
        search_key = f"{parts[0]}"
    else:
        # reversed because "afghan hound" becomes https://dog.ceo/api/breed/hound/afghan/images/random
        search_key = f"{parts[1]}/{parts[0]}"
    url = f"https://dog.ceo/api/breed/{search_key}/images/random/{amount}"
    response = requests.get(url).json()
    if(response["status"]=="success"):
        image_urls = response["message"]
    else:
        return render_template("bad.html")
    return render_template("dogs.html", breed=capitalised, image_urls=image_urls)

app = Flask(__name__)
breeds = getBreeds()

@app.route("/")
def html_main():
    breeds_capitalised = []
    for breed in breeds:
        capitalised = ' '.join([x.capitalize() for x in breed.split()])
        breeds_capitalised.append(capitalised)
    return render_template("home.html", breeds=breeds, breeds_capitalised=breeds_capitalised, N=len(breeds))

@app.route("/breed")
def html_breed():
    breed = req.args.get("breed")
    amount = req.args.get("amount")
    return html_dogs(breed, amount)

@app.route("/random_doggo")
def html_random_doggo():
    breed = random.choice(breeds)
    return html_dogs(breed, 1)

if __name__ == "__main__":
    # print(getBreeds())
    app.run(debug=True)