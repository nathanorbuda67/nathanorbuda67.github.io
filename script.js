function validateForm() {

    // list of error span ids
    const spanIds = [
        "nameErr", "dobErr", "sexErr", "emailErr",
        "userErr", "passErr", "confirmErr",
        "stumpErr", "treesErr", "opinionErr"
    ];

    // clear all previous error messages
    for (let i = 0; i < spanIds.length; i++) {
        document.getElementById(spanIds[i]).innerHTML = "";
    }

    // hide success message
    document.getElementById("successMsg").style.display = "none";

    // flag to track validity
    let isValid = true;


    // get and trim full name
    const fullname = document.getElementById("fullname").value.trim();

    // check if name is empty
    if (fullname.length === 0) {
        document.getElementById("nameErr").innerHTML = "Full name is required.";
        isValid = false;

    // check minimum name length
    } else if (fullname.length < 2) {
        document.getElementById("nameErr").innerHTML = "Full name must be at least 2 characters.";
        isValid = false;
    }


    // get date of birth value
    const dobValue = document.getElementById("dob").value;

    // check if dob is empty
    if (dobValue === "") {
        document.getElementById("dobErr").innerHTML = "Date of birth is required.";
        isValid = false;

    } else {

        // get current date
        const today   = new Date();

        // convert dob to date
        const birth   = new Date(dobValue);

        // calculate initial age
        let age = today.getFullYear() - birth.getFullYear();

        // calculate month difference
        const monthDiff = today.getMonth() - birth.getMonth();

        // adjust age if birthday passed
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age--;
        }

        // check minimum age requirement
        if (age < 13) {
            document.getElementById("dobErr").innerHTML =
                "You must be at least 13 years old to sign up.";
            isValid = false;
        }
    }


    // get all sex radio buttons
    const sexButtons = document.getElementsByName("sex");

    // track if one is selected
    let sexSelected = false;

    // loop through sex options
    for (let i = 0; i < sexButtons.length; i++) {

        // check if selected
        if (sexButtons[i].checked) {
            sexSelected = true;
        }
    }

    // show error if none selected
    if (!sexSelected) {
        document.getElementById("sexErr").innerHTML = "Please select a sex option.";
        isValid = false;
    }


    // get and trim email
    const email = document.getElementById("email").value.trim();

    // check if email empty
    if (email.length === 0) {
        document.getElementById("emailErr").innerHTML = "Email address is required.";
        isValid = false;

    // check for @ symbol
    } else if (!email.includes("@")) {
        document.getElementById("emailErr").innerHTML =
            "Email must contain the @ symbol.";
        isValid = false;

    // check for dot after @
    } else if (email.indexOf(".", email.indexOf("@")) === -1) {
        document.getElementById("emailErr").innerHTML =
            "Email must contain a dot after the @ symbol.";
        isValid = false;
    }


    // get and trim username
    const username = document.getElementById("username").value.trim();

    // regex for letters and numbers
    const lettersAndNumbers = /^[a-zA-Z0-9]+$/;

    // check if username empty
    if (username.length === 0) {
        document.getElementById("userErr").innerHTML = "Username is required.";
        isValid = false;

    // check username length range
    } else if (username.length < 8 || username.length > 20) {
        document.getElementById("userErr").innerHTML =
            "Username must be 8–20 characters long.";
        isValid = false;

    // check allowed characters only
    } else if (!lettersAndNumbers.test(username)) {
        document.getElementById("userErr").innerHTML =
            "Username may only contain letters and numbers — no spaces or symbols.";
        isValid = false;
    }


    // get password value
    const password = document.getElementById("password").value;

    // store password error
    let passError = "";

    // check if password empty
    if (password.length === 0) {
        passError = "Password is required.";

    // check minimum password length
    } else if (password.length < 10) {
        passError = "Password must be at least 10 characters long.";

    // check for uppercase letter
    } else if (!/[A-Z]/.test(password)) {
        passError = "Password must include at least one uppercase letter.";

    // check for lowercase letter
    } else if (!/[a-z]/.test(password)) {
        passError = "Password must include at least one lowercase letter.";

    // check for digit number
    } else if (!/[0-9]/.test(password)) {
        passError = "Password must include at least one digit.";
    }

    // display password error if exists
    if (passError !== "") {
        document.getElementById("passErr").innerHTML = passError;
        isValid = false;
    }


    // get confirm password value
    const confirm = document.getElementById("confirm").value;

    // check if confirm empty
    if (confirm.length === 0) {
        document.getElementById("confirmErr").innerHTML =
            "Please confirm your password.";
        isValid = false;

    // check if passwords match
    } else if (confirm !== password) {
        document.getElementById("confirmErr").innerHTML =
            "Passwords do not match. Please re-enter your password.";
        isValid = false;
    }


    // get stump frequency value
    const stumpFreq = document.getElementById("stumpFreq").value;

    // check if stump option selected
    if (stumpFreq === "") {
        document.getElementById("stumpErr").innerHTML =
            "Please select how often you observe stumps or cut-down trees.";
        isValid = false;
    }


    // get all tree checkboxes
    const treeBoxes = document.getElementsByName("trees");

    // track if any checked
    let treeChecked = false;

    // loop through tree options
    for (let i = 0; i < treeBoxes.length; i++) {

        // check if checked
        if (treeBoxes[i].checked) {
            treeChecked = true;
        }
    }

    // show error if none checked
    if (!treeChecked) {
        document.getElementById("treesErr").innerHTML =
            "Please select at least one type of tree you have seen in person.";
        isValid = false;
    }


    // get and trim opinion text
    const treeOpinion = document.getElementById("treeOpinion").value.trim();

    // check if opinion empty
    if (treeOpinion.length === 0) {
        document.getElementById("opinionErr").innerHTML =
            "Please share your thoughts on whether there are enough trees in the world.";
        isValid = false;
    }


    // show success if all valid
    if (isValid) {
        document.getElementById("successMsg").style.display = "block";
    }

    // return final validation result
    return isValid;
}