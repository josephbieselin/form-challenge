function onSubmit() {
    // get inputted form values
    const inputs = document.getElementById("signup-form").elements;
    const firstName = inputs["firstName"].value;
    const email = inputs["email"].value;

    // route to confirmation page
    const url = "../confirmation.html?" + "firstName=" + firstName + "&email=" + email;
    location.assign(url);
}