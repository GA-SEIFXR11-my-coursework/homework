// [ -e script.js ] && rm script.js; tsc main.ts; mv main.js script.js  

// Didn't give myself enough time to figure out how to nicely seperate the data to a seperate file. I gave up. 
var gb_pets = [
   {
      name: "Truffle",
      picture:
         "https://media.wired.com/photos/593261cab8eb31692072f129/master/w_2560%2Cc_limit/85120553.jpg",
      status: "available",
   },
   {
      name: "Mittens",
      picture:
         "http://www.zooborns.com/.a/6a010535647bf3970b0112790d78ef28a4-pi",
      status: "hold",
   },
   {
      name: "Shadow",
      picture:
         "https://static.israel21c.org/www/uploads/2020/07/main-pic-4-1520x855.jpg",
      status: "adopted",
   },
   {
      name: "Tiger",
      picture:
         "https://media.4-paws.org/2/8/c/d/28cd835ed917bc427bddaeb2795e9c8b2c9bfc77/VIER%20PFOTEN_2020-05-12_020-3425x1792-1200x628.jpg",
      status: "available",
   },
   {
      name: "Marmalade",
      picture:
         "https://varmentguard.com/uploads/permanent/963dbe2472d23882bf65f6fc5748ffbe.jpg",
      status: "adopted",
   },
   {
      name: "Fluffy",
      picture:
         "https://www.kids-world-travel-guide.com/images/kangaroo_with_joey_claudiobertoloni.jpg",
      status: "available",
   },
];

var gb_displayedPets = [{}].pop();

function pageLoad(){
    gb_displayedPets = sortByAvailability(gb_pets);
    reloadPetListSection(gb_displayedPets);
    return;
}

function sortByAvailability(pets){
    // This is a very poorly implemented sort. It is very bad.
    // just trying to make it work asap now
    var sortedPets = [{}];
    //available
    sortedPets.pop();
    for(let pet of pets){
        if(pet.status == "available"){
            sortedPets.push(pet);
        }
    }
    //hold
    for(let pet of pets){
        if(pet.status == "hold"){
            sortedPets.push(pet);
        }
    }
    //adopted
    for(let pet of pets){
        if(pet.status == "adopted"){
            sortedPets.push(pet);
        }
    }
    return sortedPets;
}

function buttonShowHideAvailable(){
    var buttonElem = document.getElementById("b_showHideAvailable") as HTMLElement;
    if(buttonElem.textContent == "Show Available Only"){
        _showHideUnavailable("hide");
        buttonElem.textContent = "Show All";
        return;
    }
    if(buttonElem.textContent == "Show All"){
        _showHideUnavailable("show");
        buttonElem.textContent = "Show Available Only";
        return;
    }
    function _showHideUnavailable(option: string){
        let elemsPetInfo = document.getElementsByClassName("petInfo") as HTMLCollection;
        let elemsPetButtons = document.getElementsByClassName("petButtons") as HTMLCollection;
        for(let key in elemsPetInfo){
            let thisPetInfoElem = elemsPetInfo.item(Number(key)) as HTMLElement;
            let thisPetButtonsElem = elemsPetButtons.item(Number(key)) as HTMLElement;
            let statusElem = thisPetInfoElem.getElementsByClassName("p_petStatus")[0];
            if(statusElem.textContent != "available"){
                switch(option){
                    case "show":
                        thisPetInfoElem.style.display = "";
                        thisPetButtonsElem.style.display = "";
                        break;
                    case "hide":
                        thisPetInfoElem.style.display = "none";
                        thisPetButtonsElem.style.display = "none";
                        break;
                    default:
                        break;
                }
            }
        }
        return;
    }
}

function reloadPetListSection(pets){
    var secElem = document.getElementById("s_pet_list") as HTMLElement;
    
    // clear section
    secElem.innerHTML = "";

    for(let pet of pets){
        // pet info
        var div_petCard = document.createElement("div");
        div_petCard.className = "petCard";

        var div_petInfo = document.createElement("div");
        div_petInfo.className = "petInfo";

        var p_petName = document.createElement("p");
        var img_petImg = document.createElement("img");
        var p_petStatus = document.createElement("p");
        p_petName.textContent = pet.name;
        p_petName.className = "p_petName";
        img_petImg.src = pet.picture;
        img_petImg.className = "img_petImg";
        p_petStatus.textContent = pet.status;
        p_petStatus.className = "p_petStatus";
        div_petInfo.appendChild(p_petName);
        div_petInfo.appendChild(img_petImg);
        div_petInfo.appendChild(p_petStatus);
        
        // border colours
        switch(pet.status){
            case "available":
                div_petInfo.style.color = "greenyellow";
                div_petInfo.style.border = "solid 10px greenyellow";
                break;
            case "hold":
                div_petInfo.style.color = "skyblue";
                div_petInfo.style.border = "solid 10px skyblue";
                break;
            case "adopted":
                div_petInfo.style.color = "salmon";
                div_petInfo.style.border = "solid 10px salmon";
                break;
            default:
                break;
        }
        div_petCard.appendChild(div_petInfo);

        // pet buttons
        var div_petButtons = document.createElement("div");
        div_petButtons.className = "petButtons";

        var newButtonAdopt = document.createElement("button");
        newButtonAdopt.textContent = "Adopt";

        var newButtonCancel = document.createElement("button");
        newButtonCancel.textContent = "Cancel Hold";

        var newButtonConfirm = document.createElement("button");
        newButtonConfirm.textContent = "Confirm Adoption";
        
        switch(pet.status){
            case "available":
                newButtonAdopt.disabled = false;
                newButtonCancel.disabled = true;
                newButtonConfirm.disabled = true;
                break;
            case "hold":
                newButtonAdopt.disabled = true;
                newButtonCancel.disabled = false;
                newButtonConfirm.disabled = false;
                break;
            case "adopted":
                newButtonAdopt.disabled = true;
                newButtonCancel.disabled = true;
                newButtonConfirm.disabled = true;
                break;
            default:
                break;
        }
        div_petButtons.appendChild(newButtonAdopt);
        div_petButtons.appendChild(newButtonCancel);
        div_petButtons.appendChild(newButtonConfirm);

        div_petCard.appendChild(div_petButtons);
        secElem.appendChild(div_petCard);
    }

    return;
}

