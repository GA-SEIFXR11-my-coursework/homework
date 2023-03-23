// [ -e script.js ] && rm script.js; tsc main.ts; mv main.js script.js  
var gb_pets = [
    {
        id: "0x0000",
        name: "Truffle",
        picture: "https://media.wired.com/photos/593261cab8eb31692072f129/master/w_2560%2Cc_limit/85120553.jpg",
        status: "available",
    },
    {
        id: "0x0001",
        name: "Mittens",
        picture: "http://www.zooborns.com/.a/6a010535647bf3970b0112790d78ef28a4-pi",
        status: "hold",
    },
    {
        id: "0x0002",
        name: "Shadow",
        picture: "https://static.israel21c.org/www/uploads/2020/07/main-pic-4-1520x855.jpg",
        status: "adopted",
    },
    {
        id: "0x0003",
        name: "Tiger",
        picture: "https://media.4-paws.org/2/8/c/d/28cd835ed917bc427bddaeb2795e9c8b2c9bfc77/VIER%20PFOTEN_2020-05-12_020-3425x1792-1200x628.jpg",
        status: "available",
    },
    {
        id: "0x0004",
        name: "Marmalade",
        picture: "https://varmentguard.com/uploads/permanent/963dbe2472d23882bf65f6fc5748ffbe.jpg",
        status: "adopted",
    },
    {
        id: "0x0005",
        name: "Fluffy",
        picture: "https://www.kids-world-travel-guide.com/images/kangaroo_with_joey_claudiobertoloni.jpg",
        status: "available",
    },
];
var gb_displayedPets = [];
function pageLoad() {
    gb_displayedPets = sortPetsByAvailability(gb_pets);
    reloadPetListSection(gb_displayedPets);
    // dispPetCardIds();
    return;
}
function sortPetsByAvailability(pets) {
    // This is a very poorly implemented sort. It is very bad.
    // just trying to make it work asap now
    var sortedPets = [];
    //available
    for (var _i = 0, pets_1 = pets; _i < pets_1.length; _i++) {
        var pet = pets_1[_i];
        if (pet.status == "available") {
            sortedPets.push(pet);
        }
    }
    //hold
    for (var _a = 0, pets_2 = pets; _a < pets_2.length; _a++) {
        var pet = pets_2[_a];
        if (pet.status == "hold") {
            sortedPets.push(pet);
        }
    }
    //adopted
    for (var _b = 0, pets_3 = pets; _b < pets_3.length; _b++) {
        var pet = pets_3[_b];
        if (pet.status == "adopted") {
            sortedPets.push(pet);
        }
    }
    return sortedPets;
}
// for testing
function dispPetCardIds() {
    var _a, _b, _c;
    var cards = document.getElementsByClassName("petCard");
    for (var key in cards) {
        if (!(/[0-9]$/).test(key)) {
            break;
        }
        var petCard = cards.item(Number(key));
        var name_1 = (_b = (_a = petCard.querySelector(".petInfo")) === null || _a === void 0 ? void 0 : _a.querySelector(".p_petName")) === null || _b === void 0 ? void 0 : _b.textContent;
        var meta = (_c = petCard.querySelector('meta')) === null || _c === void 0 ? void 0 : _c.getAttribute("pet_id");
        console.log("".concat(name_1, " ").concat(meta));
    }
    return;
}
function buttonShowHideAvailable() {
    var buttonElem = document.getElementById("b_showHideAvailable");
    if (buttonElem.textContent == "Show Available Only") {
        _showHideUnavailable("hide");
        buttonElem.textContent = "Show All";
        return;
    }
    if (buttonElem.textContent == "Show All") {
        _showHideUnavailable("show");
        buttonElem.textContent = "Show Available Only";
        return;
    }
    function _showHideUnavailable(option) {
        var elemsPetInfo = document.getElementsByClassName("petInfo");
        var elemsPetButtons = document.getElementsByClassName("petButtons");
        for (var key in elemsPetInfo) {
            // more black magic. I don't know why the .item() method is needed but it is.
            if (!(/[0-9]$/).test(key)) {
                break;
            }
            var thisPetInfoElem = elemsPetInfo.item(Number(key));
            var thisPetButtonsElem = elemsPetButtons.item(Number(key));
            var statusElem = thisPetInfoElem.getElementsByClassName("p_petStatus")[0];
            if (statusElem.textContent != "available") {
                switch (option) {
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
function reloadPetListSection(pets) {
    var secElem = document.getElementById("s_pet_list");
    // clear section
    secElem.innerHTML = "";
    var _loop_1 = function (pet) {
        // pet info
        // DO NOT USE "var" as it creates a variable pointer. "let" creates a seperate pointer each loop
        var div_petCard = document.createElement("div");
        div_petCard.className = "petCard";
        new_meta = document.createElement("meta");
        new_meta.setAttribute("pet_id", pet.id);
        div_petCard.appendChild(new_meta);
        div_petInfo = document.createElement("div");
        div_petInfo.className = "petInfo";
        p_petName = document.createElement("p");
        img_petImg = document.createElement("img");
        p_petStatus = document.createElement("p");
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
        switch (pet.status) {
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
        div_petButtons = document.createElement("div");
        div_petButtons.className = "petButtons";
        newButtonAdopt = document.createElement("button");
        newButtonAdopt.textContent = "Adopt";
        newButtonAdopt.className = "buttonAdopt";
        newButtonCancel = document.createElement("button");
        newButtonCancel.textContent = "Cancel Hold";
        newButtonCancel.className = "buttonCancel";
        newButtonConfirm = document.createElement("button");
        newButtonConfirm.textContent = "Confirm Adoption";
        newButtonConfirm.className = "buttonConfirm";
        switch (pet.status) {
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
        newButtonAdopt.addEventListener("click", function () {
            var _a, _b, _c;
            var thisAdoptButton = (_a = div_petCard.querySelector(".petButtons")) === null || _a === void 0 ? void 0 : _a.querySelector(".buttonAdopt");
            thisAdoptButton.disabled = true;
            var thisCancelButton = (_b = div_petCard.querySelector(".petButtons")) === null || _b === void 0 ? void 0 : _b.querySelector(".buttonCancel");
            thisCancelButton.disabled = false;
            var thisConfirmButton = (_c = div_petCard.querySelector(".petButtons")) === null || _c === void 0 ? void 0 : _c.querySelector(".buttonConfirm");
            thisConfirmButton.disabled = false;
            pet.status = "hold";
            reloadPetListSection(gb_displayedPets);
            gb_pets = gb_displayedPets;
        }.bind(this_1, div_petCard), false);
        newButtonCancel.addEventListener("click", function () {
            var _a, _b, _c;
            var thisAdoptButton = (_a = div_petCard.querySelector(".petButtons")) === null || _a === void 0 ? void 0 : _a.querySelector(".buttonAdopt");
            thisAdoptButton.disabled = false;
            var thisCancelButton = (_b = div_petCard.querySelector(".petButtons")) === null || _b === void 0 ? void 0 : _b.querySelector(".buttonCancel");
            thisCancelButton.disabled = true;
            var thisConfirmButton = (_c = div_petCard.querySelector(".petButtons")) === null || _c === void 0 ? void 0 : _c.querySelector(".buttonConfirm");
            thisConfirmButton.disabled = true;
            pet.status = "available";
            reloadPetListSection(gb_displayedPets);
            gb_pets = gb_displayedPets;
        }.bind(this_1, div_petCard), false);
        newButtonConfirm.addEventListener("click", function () {
            var _a, _b, _c;
            var thisAdoptButton = (_a = div_petCard.querySelector(".petButtons")) === null || _a === void 0 ? void 0 : _a.querySelector(".buttonAdopt");
            thisAdoptButton.disabled = true;
            var thisCancelButton = (_b = div_petCard.querySelector(".petButtons")) === null || _b === void 0 ? void 0 : _b.querySelector(".buttonCancel");
            thisCancelButton.disabled = true;
            var thisConfirmButton = (_c = div_petCard.querySelector(".petButtons")) === null || _c === void 0 ? void 0 : _c.querySelector(".buttonConfirm");
            thisConfirmButton.disabled = true;
            pet.status = "adopted";
            reloadPetListSection(gb_displayedPets);
            gb_pets = gb_displayedPets;
        }.bind(this_1, div_petCard), false);
        div_petButtons.appendChild(newButtonAdopt);
        div_petButtons.appendChild(newButtonCancel);
        div_petButtons.appendChild(newButtonConfirm);
        div_petCard.appendChild(div_petButtons);
        secElem.appendChild(div_petCard);
    };
    var this_1 = this, new_meta, div_petInfo, p_petName, img_petImg, p_petStatus, div_petButtons, newButtonAdopt, newButtonCancel, newButtonConfirm;
    for (var _i = 0, pets_4 = pets; _i < pets_4.length; _i++) {
        var pet = pets_4[_i];
        _loop_1(pet);
    }
    return;
}
// Currently unused. Cooked this up to manipulate IDs for making new pets.
/**
 * This function aims to replicate the functionality of the String.padStart() method
 * Eg. padStart("asdf", 15, "123") ->  "12312312312asdf"
 * @param targetStr
 * @param targetLen
 * @param padStr
 * @returns
 */
function padStart(targetStr, targetLen, padStr) {
    var initLen = targetStr.length;
    var padLen = padStr.length;
    var lenDiff = targetLen - initLen;
    var N;
    var pad = "";
    var ret = targetStr;
    if (lenDiff <= 0) {
        return ret;
    }
    N = Math.floor(lenDiff / padLen);
    for (var i = 0; i < N; i++) {
        pad += padStr;
    }
    N = lenDiff % padLen;
    for (var i = 0; i < N; i++) {
        pad += padStr[i];
    }
    ret = pad + ret;
    return ret;
}
/**
 * Takes in a hexStr, adds the decimal value provided, and returns the new hexStr.
 * hexDigits ensures length of hexstring.
 * Eg. addToHexStr("0x0019", 3, 4) -> "0x001D"
 * @param hexStr
 * @param addDec
 * @param hexDigits
 * @returns
 */
function addToHexStr(hexStr, addDec, hexDigits) {
    var retval;
    var val;
    var regex = new RegExp("^0x[0-9|A-F]{".concat(hexDigits, "}$")); // case sensitive
    if (!regex.test(hexStr)) {
        console.error("Invalid hexStr input value.");
        return "";
    }
    val = Number(hexStr);
    val += addDec;
    // padStart() not defined prior to ES2017. 
    // retval = "0x" + val.toString(16).padStart(hexDigits,"0").toUpperCase();
    retval = "0x" + padStart(val.toString(16), 4, "0").toUpperCase();
    if (!regex.test(retval)) {
        console.error("Invalid hexStr output. Ensure correct hexDigits. Ensure no overflow occured.");
        return "";
    }
    return retval;
}
