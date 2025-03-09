function openPopup(id) {
    document.getElementById(id).style.display = "flex";
}

function closePopup(id) {
    document.getElementById(id).style.display = "none";
}

function openRegisterPopup() {
    document.getElementById("registerPopup").style.display = "flex";
}

function closeRegisterPopup() {
    document.getElementById("registerPopup").style.display = "none";
}

function registerUser(event) {
    event.preventDefault();
    localStorage.setItem("registered", "true");
    document.getElementById("registerBtn").style.display = "none";
    closeRegisterPopup();
}

function resetRegistration() {
    localStorage.removeItem("registered");
    document.getElementById("registerBtn").style.display = "block";
}

window.onload = function() {
    if (localStorage.getItem("registered") === "true") {
        document.getElementById("registerBtn").style.display = "none";
    }
};
