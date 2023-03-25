var badPasswords = [
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
var usernames = [
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
var passwords = [
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
function pageLoad() {
    dropdownsSetup();
    passwordEyeEventSetup();
    formQuestionFocusEventSetup();
    warnUsernameEventSetup();
    warnPasswordEventSetup();
    return;
}
function warnPasswordEventSetup() {
    /** Handles password warnings, returns pw strength as a number
     * 0 - bad
     * 1 - weak
     * 2 - good
     * 3 - strong
     */
    function _warnPassword() {
        var inputElem = document.getElementById("i_password");
        var warnElem = document.getElementById("warn-password");
        var warnListElem = document.getElementById("warning-list");
        var strengthVal = 0; // 0-bad; 1-weak; 2-good; 3-strong
        var flag_taken = false;
        var flag_badPassword = false;
        var flag_hasSpaces = false;
        var flag_lessThan10Chars = false;
        var flag_noLowerCase = false;
        var flag_noUpperCase = false;
        var flag_noNumbers = false;
        var flag_noSymbols = false;
        var flag_lessThan14Chars = false;
        var password = inputElem.value;
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
        if (flag_taken) {
            warnElem.textContent = "Password has been taken.";
            return 0;
        }
        if (flag_badPassword) {
            warnElem.textContent = "Bad password used. Eg. 'password', 'qwerty' & '123456' are bad passwords.";
            return 0;
        }
        // If password is not bad but has some following errors, set to weak
        if (flag_hasSpaces
            || flag_lessThan10Chars
            || flag_noLowerCase
            || flag_noUpperCase
            || flag_noNumbers) {
            warnElem.textContent = "The following needs to be fixed:";
            warnListElem.innerHTML = "";
            if (flag_hasSpaces) {
                _addWarning("Mustn't contain white-spaces");
            }
            if (flag_lessThan10Chars) {
                _addWarning("Too Short! Password must contain at least 10 characters");
            }
            if (flag_noLowerCase || flag_noUpperCase) {
                _addWarning("Must contain a mix of upper and lower case alphabets.");
            }
            if (flag_noNumbers) {
                _addWarning("Must contain numbers.");
            }
            return 1;
        }
        if (flag_noSymbols
            || flag_lessThan14Chars) {
            warnElem.textContent = "The following is recommended for a Strong password:";
            warnListElem.innerHTML = "";
            if (flag_noSymbols) {
                _addWarning("A strong password should contain symbols.");
            }
            if (flag_lessThan14Chars) {
                _addWarning("A strong password should have at least 14 characters.");
            }
            return 2;
        }
        warnListElem.innerHTML = "";
        warnElem.textContent = "";
        return 3;
    }
    function _addWarning(warning) {
        var warnListElem = document.getElementById("warning-list");
        var newWarnElem = document.createElement("li");
        newWarnElem.appendChild(document.createTextNode(warning));
        warnListElem.appendChild(newWarnElem);
        return;
    }
    function _displayStrength(strengthVal) {
        var strengthElem = document.querySelector(".form_question > .password_strength > p");
        var strengthValueElem = document.querySelector(".form_question > .password_strength > .strength");
        switch (strengthVal) {
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
                console.error("Invalid strengthVal (".concat(strengthVal, ") reached."));
                break;
        }
        return;
    }
    var passwordInputElem = document.getElementById("i_password");
    passwordInputElem.onkeyup = function () { return _displayStrength(_warnPassword()); };
    return;
}
function warnUsernameEventSetup() {
    function _warnUsername() {
        var inputElem = document.getElementById("i_username");
        var warnElem = document.getElementById("warn-username");
        var username = inputElem.value;
        // Check if username has been taken
        if (usernames.indexOf(username) != -1) {
            warnElem.textContent = "Username has been taken.";
            return null;
        }
        // check that it is only lowercase
        if (!(/^[a-z0-9]+$/).test(username)) {
            warnElem.textContent = "Input must consist of only lower-case alphabets and/or numbers";
            return null;
        }
        warnElem.textContent = "";
        return null;
    }
    var userInputElem = document.getElementById("i_username");
    userInputElem.onkeyup = function () { return _warnUsername(); };
    return;
}
function formQuestionFocusEventSetup() {
    var formQuestionElems = document.getElementsByClassName("form_question");
    for (var key in formQuestionElems) {
        if (!(/\d/).test(key)) {
            break;
        }
        var elem = formQuestionElems.item(Number(key));
        elem.addEventListener("focusin", function (e) {
            var _a;
            var elem = e.target;
            if (elem.tagName == "DIV") {
                // focus is on the div element
                var target_divFocus = elem.getElementsByClassName("info").item(0);
                target_divFocus.style.display = "block";
            }
            else {
                // focus is on the div inner elements
                var target_innerFocus = (_a = elem.parentElement) === null || _a === void 0 ? void 0 : _a.getElementsByClassName("info").item(0);
                target_innerFocus.style.display = "block";
            }
            return null;
        });
        elem.addEventListener("focusout", function (e) {
            var _a;
            var elem = e.target;
            if (elem.tagName == "DIV") {
                // focus is on the div element
                var target_divFocus = elem.getElementsByClassName("info").item(0);
                target_divFocus.style.display = "none";
            }
            else {
                // focus is on the div inner elements
                var target_innerFocus = (_a = elem.parentElement) === null || _a === void 0 ? void 0 : _a.getElementsByClassName("info").item(0);
                target_innerFocus.style.display = "none";
            }
            return null;
        });
    }
    return;
}
function passwordEyeEventSetup() {
    function _notClicked() {
        var eyeElem = document.getElementById("d_passwordEye");
        eyeElem.style.backgroundImage = "url('images/eye-slash.png')";
        eyeElem.onmouseleave = function () { };
        eyeElem.onmouseup = function () { };
        var pwElem = document.querySelector(".form_question > #i_password");
        pwElem.type = "password";
        return null;
    }
    var eyeElem = document.getElementById("d_passwordEye");
    eyeElem.onmousedown = function () {
        var eyeElem = document.getElementById("d_passwordEye");
        eyeElem.style.backgroundImage = "url('images/eye-open.png')";
        eyeElem.onmouseleave = function () { return _notClicked(); };
        eyeElem.onmouseup = function () { return _notClicked(); };
        var pwElem = document.querySelector(".form_question > #i_password");
        pwElem.type = "text";
    };
    return;
}
function dropdownsSetup() {
    function _fillWithSelected(event) {
        var _a;
        var elem = event.target;
        var inputElem = (_a = elem.parentElement) === null || _a === void 0 ? void 0 : _a.querySelector("input");
        inputElem.value = elem.value;
        inputElem.dispatchEvent(new Event("keyup"));
        return;
    }
    var username_dd_elem = document.getElementById("s_existingUsernames");
    for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
        var name_1 = usernames_1[_i];
        var newOption = document.createElement("option");
        newOption.value = name_1;
        newOption.textContent = name_1;
        username_dd_elem === null || username_dd_elem === void 0 ? void 0 : username_dd_elem.appendChild(newOption);
    }
    username_dd_elem.onchange = function (event) { return _fillWithSelected(event); };
    var password_dd_elem = document.getElementById("s_existingPasswords");
    for (var _a = 0, passwords_1 = passwords; _a < passwords_1.length; _a++) {
        var name_2 = passwords_1[_a];
        var newOption = document.createElement("option");
        newOption.value = name_2;
        newOption.textContent = name_2;
        password_dd_elem === null || password_dd_elem === void 0 ? void 0 : password_dd_elem.appendChild(newOption);
    }
    password_dd_elem.onchange = function (event) { return _fillWithSelected(event); };
    var badPasswords_dd_elem = document.getElementById("s_badPasswords");
    for (var _b = 0, badPasswords_1 = badPasswords; _b < badPasswords_1.length; _b++) {
        var name_3 = badPasswords_1[_b];
        var newOption = document.createElement("option");
        newOption.value = name_3;
        newOption.textContent = name_3;
        badPasswords_dd_elem === null || badPasswords_dd_elem === void 0 ? void 0 : badPasswords_dd_elem.appendChild(newOption);
    }
    badPasswords_dd_elem.onchange = function (event) { return _fillWithSelected(event); };
    return;
}
