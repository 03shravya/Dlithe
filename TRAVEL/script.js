function openPopup(popupId) {
    let popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = "flex";
    } else {
        console.error("Popup not found:", popupId);
    }
}

function closePopup(popupId) {
    let popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = "none";
    }
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

function bestTravelSeason(destination) {
    let message = destination === "paris" ? "Spring (April - June) is the best time to visit Paris."
                : destination === "bali" ? "Dry season (May - October) is ideal for visiting Bali."
                : "Autumn (September - November) is great for New York.";
    
    document.getElementById("popup-message").innerText = message;
    document.getElementById("visitPopup").style.display = "flex";
}

function closePopup() {
    document.getElementById("visitPopup").style.display = "none";
}

function openTravelPopup(popupId) {
    document.getElementById(popupId).style.display = "flex";
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
}

