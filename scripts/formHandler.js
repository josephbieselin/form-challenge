function onSubmit() {
    // get inputted form values
    const inputs = document.getElementById("signup-form").elements;
    const firstName = inputs["firstName"].value;
    const email = inputs["email"].value;

    /* handle password here if there were backend component to challenge */
    
    // route to confirmation page
    const url = location.href + "confirmation.html?firstName=" + firstName + "&email=" + email;
    location.assign(url);
}
