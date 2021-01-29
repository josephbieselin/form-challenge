function onSubmit() {
    // get inputted form values
    const inputs = document.getElementById("signup-form").elements;
    const firstName = inputs["firstName"].value;
    const email = inputs["email"].value;

    /* handle password here if there were backend component to challenge */

    // included to be able to open index.html in browser directly from filesystem and still route correctly
    let currentUrl = location.href;
    currentUrl = currentUrl.replace("/index.html", "/");

    // route to confirmation page
    const routeUrl = currentUrl + "confirmation.html?firstName=" + firstName + "&email=" + email;
    location.assign(routeUrl);
}