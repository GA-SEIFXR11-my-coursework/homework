## Pet Adoption Agency

You're running an animal rescue center!
Make a site which lists a set of animals that are available for adoption, on hold to be adopted, or recently adopted!

Here's the set of animals you can start with (add your own images, descriptions, or leave out the images for now if you want).
```js
const animals = [
    {name: 'Truffle', picture: 'https://media.wired.com/photos/593261cab8eb31692072f129/master/w_2560%2Cc_limit/85120553.jpg', status: 'available'},
    {name: 'Mittens', picture: 'http://www.zooborns.com/.a/6a010535647bf3970b0112790d78ef28a4-pi', status: 'hold'},
    {name: 'Shadow', picture: 'https://static.israel21c.org/www/uploads/2020/07/main-pic-4-1520x855.jpg', status: 'adopted'},
    { name: 'Tiger', picture: 'https://media.4-paws.org/2/8/c/d/28cd835ed917bc427bddaeb2795e9c8b2c9bfc77/VIER%20PFOTEN_2020-05-12_020-3425x1792-1200x628.jpg', status: 'available'},
    { name: 'Marmalade', picture: 'https://varmentguard.com/uploads/permanent/963dbe2472d23882bf65f6fc5748ffbe.jpg', status: 'adopted'},
    {name: 'Fluffy', picture: 'https://www.kids-world-travel-guide.com/images/kangaroo_with_joey_claudiobertoloni.jpg', status: 'available'},
  ]
```

Each status should be one of `adopted`, `hold`, or `available`.
- `available` means the pet is available to be adopted
- `hold` means that someone has reserved this animal but hasn't formally adopted it yet
- `adopted` means the animal has now gone to their new owner

### Part 1: List the animals

Starting with mostly empty HTML (feel free to add a title and/or a container element), write code to generate the list of animals and their adoption info.

For each animal, it should show the name and current adoption status (in your own words). You can add images or descriptions if you want.

### Part 2: Styling and layout

- Style the list of animals such that each animal is in its own box (a rectangle with either a border or background colour)
- Use Flex or CSSGrid to arrange the animals in columns, there should be three columns if the screen is wide enough to fit them (how it shrinks for a smaller window is up to you).
- Use CSS classes to style each animal's box differently depending on the adoption status. E.g. A green box for available animals

Feel free to make the site look great!

**Do not apply any styles directly to the elements** Instead define some classes in your CSS and add or remove classes to change the styling.

### Part 3: Change status

Depending on the status of each animal - add buttons to their box.

* If the animal has status `available` - there should be a button to claim the animal for adoption (change to `hold`)
* If the animal has status `hold` - there should be a button to cancel the adoption (back to `available`), or finalise the adoption (change to `adopted`).
* If the animal is adopted, then there should be no buttons.

When you change the status, the way the box looks should update to reflect that change.

### Extension 1

Make it possible to add a new animal to the list. New animals should always start with status `available`.

### Extension 2

Add a button to the top of the page which hides all the other animals and only shows the available ones, and also lets you un-hide them again.

You do not need to regenerate the whole list, you can add a CSS class or other styling to hide some elements. (You may want to use `document.querySelectorAll()`)

Add a `species` property to each animal, e.g. `species: 'cat'` or `species: 'dog'`. Also allow the user to filter based on this e.g. they are only interested in adopting a cat.

### Extra extensions

- Add a button to sort the list of animals by name or status (you are allowed to regenerate the list for this one)
- Add a search box to filter the list of animals. Make it so that as you type into the search box, the list updates to only show you animals that match the search. (You don't need a separate search button)