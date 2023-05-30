
// DO NOT CHANGE index.html

// Step 1: Fill the drop-down selector box to have these options:
// NYC, SF, LA, SYD, ATX
var cityOptionsList = [
    {
        "short" : "default",
        "name" : "Select a City",
        "img_relpath": "images/citipix_skyline.jpg",
    },
    {
        "short" : "NYC",
        "name" : "New York City",
        "img_relpath": "images/nyc.jpg",
    },
    {
        "short" : "SF",
        "name" : "San Francisco",
        "img_relpath": "images/sf.jpg",
    },
    {
        "short" : "LA",
        "name" : "Los Angeles",
        "img_relpath": "images/la.jpg",
    },
    {
        "short" : "SYD",
        "name" : "Sydney",
        "img_relpath": "images/sydney.jpg",
    },
    {
        "short" : "ATX",
        "name" : "Austin",
        "img_relpath": "images/austin.jpg",
    },
]
document.querySelector('#city-type').innerHTML = ""

for(city of cityOptionsList){
    let new_option = document.createElement("option")
    new_option.textContent = city["name"]
    new_option.setAttribute("data-short", city["short"])
    let target = document.querySelector('#city-type')
    target.appendChild(new_option)
}

// Step 2: When one of the cities is selected, change the background to a picture of the selected city.
// Hint: Use the CSS classes provided
document.querySelector('#city-type').addEventListener("change", function(e){
    let short_name = e.target.selectedOptions[0].getAttribute('data-short')
    for(city of cityOptionsList){
        if(short_name != city["short"]){
            continue
        }
        document.body.style.background = `url(${city["img_relpath"]})`
    }
})

// Check the README file for extensions!

