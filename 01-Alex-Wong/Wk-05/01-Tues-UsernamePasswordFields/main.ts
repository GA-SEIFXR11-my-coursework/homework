const badPasswords: string[] = [
    "123456",
    "123456789",
    "qwerty",
    "password",
    "12345",
    "12345678",
    "111111",
    "1234567",
    "123123",
    "qwerty123",
    "1q2w3e",
    "1234567890",
    "DEFAULT",
    "000000",
    "abc123",
    "654321",
    "123321",
    "qwertyuiop",
    "Iloveyou",
    "666666",    
];

const usernames: string[] = [
    "stargazer87",
    "musiclover22",
    "gamergal",
    "fitnessjunkie",
    "foodieforever",
    "adventureseeker",
    "artisticsoul",
    "techwizard",
    "bookworm123",
    "travelbug99",
    "naturelover55",
    "fashionista101",
    "sportsfanatic",
    "mindfulmeditator",
    "creativegenius",
    "moviebuff77",
    "petlover365",
    "beachbum42",
    "entrepreneurmindset",
    "fitnessfreak88",
];

const passwords: string[] = [
    "Gingham72Pine",
    "MellowJazz44%",
    "FuzzyKitten23",
    "RusticCharm98#",
    "FluffyPancake19",
    "OceanBreeze77$",
    "LuckyClover12",
    "VintageRose22%",
    "Thunderstorm87",
    "PurpleHaze69#",
    "CosmicDancer01",
    "StarryNight55$",
    "VanillaCupcake11",
    "MidnightOwl33%",
    "SilverLining90",
    "LavenderFields08#",
    "CherryBlossom76",
    "MountainMeadows32%",
    "AutumnLeaves45",
    "CozySweater63#",
];

function pageLoad(){
    dropdownsSetup();
    passwordEyeEventSetup();
    formQuestionFocusEventSetup();
    warnUsernameEventSetup();
    warnPasswordEventSetup();
    return;
}


function warnPasswordEventSetup(){
    /** Handles password warnings, returns pw strength as a number
     * 0 - bad
     * 1 - weak
     * 2 - good
     * 3 - strong
     */
    function _warnPassword(): number{
        let inputElem = document.getElementById("i_password") as HTMLInputElement;
        let warnElem = document.getElementById("warn-password") as HTMLParagraphElement;
        let warnListElem = document.getElementById("warning-list") as HTMLUListElement;
        let strengthVal:number = 0; // 0-bad; 1-weak; 2-good; 3-strong

        let flag_taken: boolean = false;
        let flag_badPassword: boolean = false;
        let flag_hasSpaces: boolean = false;
        let flag_lessThan10Chars: boolean = false;
        let flag_noLowerCase: boolean = false;
        let flag_noUpperCase: boolean = false;
        let flag_noNumbers: boolean = false;
        let flag_noSymbols: boolean = false;
        let flag_lessThan14Chars: boolean = false;

        let password = inputElem.value;

        flag_taken = (passwords.indexOf(password) != -1);
        flag_badPassword = (badPasswords.indexOf(password) != -1);
        flag_hasSpaces = (/\s/).test(password);
        flag_lessThan10Chars = (/^.{0,9}$/).test(password);
        flag_noLowerCase = (/^[^a-z]*$/).test(password);
        flag_noUpperCase = (/^[^A-Z]*$/).test(password);
        flag_noNumbers = (/^[^0-9]*$/).test(password);
        flag_noSymbols = (/^[a-zA-Z0-9]*$/).test(password);
        flag_lessThan14Chars = (/^.{0,14}$/).test(password);

        // Checks if password is bad
        if(flag_taken){
            warnElem.textContent = "Password has been taken.";
            return 0;
        }
        if(flag_badPassword){
            warnElem.textContent = "Bad password used. Eg. 'password', 'qwerty' & '123456' are bad passwords.";
            return 0;
        }

        // If password is not bad but has some following errors, set to weak
        if(    flag_hasSpaces
            || flag_lessThan10Chars
            || flag_noLowerCase
            || flag_noUpperCase
            || flag_noNumbers
        ){
            warnElem.textContent = "The following needs to be fixed:";
            warnListElem.innerHTML = "";
            if(flag_hasSpaces){
                _addWarning("Mustn't contain white-spaces");
            }
            if(flag_lessThan10Chars){
                _addWarning("Too Short! Password must contain at least 10 characters");
            }
            if(flag_noLowerCase || flag_noUpperCase){
                _addWarning("Must contain a mix of upper and lower case alphabets.");
            }
            if(flag_noNumbers){
                _addWarning("Must contain numbers.");
            }
            return 1;
        }

        if(    flag_noSymbols
            || flag_lessThan14Chars
        ){  
            warnElem.textContent = "The following is recommended for a Strong password:";
            warnListElem.innerHTML = "";
            if(flag_noSymbols){
                _addWarning("A strong password should contain symbols.");
            }
            if(flag_lessThan14Chars){
                _addWarning("A strong password should have at least 14 characters.");
            }
            return 2;
        }

        warnListElem.innerHTML = "";
        warnElem.textContent = "";
        return 3;
    }

    function _addWarning(warning: string){
        let warnListElem = document.getElementById("warning-list") as HTMLUListElement;
        let newWarnElem = document.createElement("li");
        newWarnElem.appendChild( document.createTextNode(warning) );
        warnListElem.appendChild(newWarnElem);
        return;
    }

    function _displayStrength(strengthVal: number){
        let strengthElem = document.querySelector(".form_question > .password_strength > p") as HTMLElement;
        let strengthValueElem = document.querySelector(".form_question > .password_strength > .strength") as HTMLElement;
        switch(strengthVal){
            case 0:
                strengthElem.style.color = "maroon";
                strengthValueElem.style.color = "maroon";
                strengthValueElem.textContent = "Bad";
                break;
            case 1:
                strengthElem.style.color = "orangered";
                strengthValueElem.style.color = "orangered";
                strengthValueElem.textContent = "Weak";
                break;
            case 2:
                strengthElem.style.color = "goldenrod";
                strengthValueElem.style.color = "goldenrod";
                strengthValueElem.textContent = "Good";
                break;
            case 3:
                strengthElem.style.color = "green";
                strengthValueElem.style.color = "green";
                strengthValueElem.textContent = "Strong";
                break;
            default:
                console.error(`Invalid strengthVal (${strengthVal}) reached.`);
                break;
        }

        return;
    }

    let passwordInputElem = document.getElementById("i_password") as HTMLInputElement;
    passwordInputElem.onkeyup = () => _displayStrength(_warnPassword());
    return;
}

function warnUsernameEventSetup(){
    function _warnUsername(){
        let inputElem = document.getElementById("i_username") as HTMLInputElement;
        let warnElem = document.getElementById("warn-username") as HTMLParagraphElement;

        let username = inputElem.value;

        // Check if username has been taken
        if(usernames.indexOf(username) != -1){
            warnElem.textContent = "Username has been taken.";
            return null;
        }

        // check that it is only lowercase
        if( ! (/^[a-z0-9]+$/).test(username) ){
            warnElem.textContent = "Input must consist of only lower-case alphabets and/or numbers";
            return null;
        }
        
        warnElem.textContent = "";
        return null;
    }

    let userInputElem = document.getElementById("i_username") as HTMLInputElement;
    userInputElem.onkeyup = () => _warnUsername();
    return;
}

function formQuestionFocusEventSetup(){
    let formQuestionElems = document.getElementsByClassName("form_question");
    for(let key in formQuestionElems){
        if( ! (/\d/).test(key) ){ break; }
        let elem = formQuestionElems.item(Number(key)) as HTMLDivElement;
        elem.addEventListener("focusin", (e) =>{
            let elem = e.target as Element;
            if(elem.tagName == "DIV"){
                // focus is on the div element
                let target_divFocus = elem.getElementsByClassName("info").item(0) as HTMLParagraphElement;
                target_divFocus.style.display = "block";
            }else{
                // focus is on the div inner elements
                let target_innerFocus = elem.parentElement?.getElementsByClassName("info").item(0) as HTMLParagraphElement;
                target_innerFocus.style.display = "block";
            }
            return null;
        });
        elem.addEventListener("focusout", (e) =>{
            let elem = e.target as Element;
            if(elem.tagName == "DIV"){
                // focus is on the div element
                let target_divFocus = elem.getElementsByClassName("info").item(0) as HTMLParagraphElement;
                target_divFocus.style.display = "none";
            }else{
                // focus is on the div inner elements
                let target_innerFocus = elem.parentElement?.getElementsByClassName("info").item(0) as HTMLParagraphElement;
                target_innerFocus.style.display = "none";
            }
            return null;
        });
    }
    return;
}

function passwordEyeEventSetup(){
    function _notClicked(){
        let eyeElem =  document.getElementById("d_passwordEye") as HTMLDivElement;
        eyeElem.style.backgroundImage = "url('images/eye-slash.png')";
        eyeElem.onmouseleave = ()=>{};
        eyeElem.onmouseup = ()=>{};
        let pwElem = document.querySelector(".form_question > #i_password") as HTMLInputElement;
        pwElem.type = "password";
        return null;
    }
    
    let eyeElem = document.getElementById("d_passwordEye") as HTMLImageElement;
    eyeElem.onmousedown = function(){
        let eyeElem =  document.getElementById("d_passwordEye") as HTMLDivElement;
        eyeElem.style.backgroundImage = "url('images/eye-open.png')";
        eyeElem.onmouseleave = () => _notClicked();
        eyeElem.onmouseup = () => _notClicked();
        let pwElem = document.querySelector(".form_question > #i_password") as HTMLInputElement;
        pwElem.type = "text";
    }
    return;
}

function dropdownsSetup(){
    function _fillWithSelected(event){
        let elem = event.target as HTMLSelectElement;
        let inputElem = elem.parentElement?.querySelector("input") as HTMLInputElement;
        inputElem.value = elem.value;
        inputElem.dispatchEvent(new Event("keyup"));
        return;
    }

    let username_dd_elem = document.getElementById("s_existingUsernames") as HTMLSelectElement;
    for(let name of usernames){
        let newOption = document.createElement("option");
        newOption.value = name;
        newOption.textContent = name;
        username_dd_elem?.appendChild(newOption);
    }
    username_dd_elem.onchange = (event) => _fillWithSelected(event);

    let password_dd_elem = document.getElementById("s_existingPasswords") as HTMLSelectElement;
    for(let name of passwords){
        let newOption = document.createElement("option");
        newOption.value = name;
        newOption.textContent = name;
        password_dd_elem?.appendChild(newOption);
    }
    password_dd_elem.onchange = (event) => _fillWithSelected(event);

    let badPasswords_dd_elem = document.getElementById("s_badPasswords") as HTMLSelectElement;
    for(let name of badPasswords){
        let newOption = document.createElement("option");
        newOption.value = name;
        newOption.textContent = name;
        badPasswords_dd_elem?.appendChild(newOption);
    }
    badPasswords_dd_elem.onchange = (event) => _fillWithSelected(event);

    return;
}