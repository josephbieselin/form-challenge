const urlParams = new URLSearchParams(location.search);
// assuming url has below parameters since form input is required
document.getElementById("firstName").innerText = urlParams.get("firstName");
document.getElementById("email").innerText = urlParams.get("email");