// Show and hide the registration popup
document.getElementById('registerButton').addEventListener('click', function() {
    document.getElementById('registerPopup').style.display = 'block'; // Show the registration popup
});

document.getElementById('closeRegisterPopup').addEventListener('click', function() {
    document.getElementById('registerPopup').style.display = 'none'; // Hide the popup
});

// Handle form submission
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;

    // Here you can handle the registration logic, e.g., send data to a server
    alert(`Thank you for registering, ${name}!`); // Display a success message
    document.getElementById('registerPopup').style.display = 'none'; // Hide the popup after submission

    // Optionally, you can clear the form fields
    document.getElementById('registerForm').reset();
});

// Filter destinations based on user input
document.getElementById('filterInput').addEventListener('keyup', function() {
    const filter = this.value.toLowerCase();
    const destinations = document.querySelectorAll('.destination');

    destinations.forEach(function(destination) {
        const name = destination.getAttribute('data-name').toLowerCase();
        if (name.includes(filter)) {
            destination.style.display = ''; // Show the destination
        } else {
            destination.style.display = 'none'; // Hide the destination
        }
    });
});

// Optional: Close the popup when clicking outside of it
window.addEventListener('click', function(event) {
    const popup = document.getElementById('registerPopup');
    if (event.target === popup) {
        popup.style.display = 'none'; // Hide the popup if clicked outside
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const travelButton = document.getElementById('travelButton');
    const travelPopup = document.getElementById('travelPopup');
    const closeTravelPopup = document.getElementById('closeTravelPopup');

    // Show the travel popup when the button is clicked
    travelButton.addEventListener('click', () => {
        travelPopup.style.display = 'block'; // Show the popup
    });

    // Close the popup when the close button is clicked
    closeTravelPopup.addEventListener('click', () => {
        travelPopup.style.display = 'none'; // Hide the popup
    });

    // Optional: Close the popup when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === travelPopup) {
            travelPopup.style.display = 'none'; // Hide the popup if clicked outside
        }
    });
});
    document.addEventListener('DOMContentLoaded', () => {
        // Get the current date
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0'); // Day
        const mm = String(today.getMonth() + 1).padStart(2, '0'); // Month (January is 0)
        const yyyy = today.getFullYear(); // Year
    
        // Format the date as YYYY-MM-DD
        const currentDate = `${yyyy}-${mm}-${dd}`;
    
        // Set the min attribute of the date input
        document.getElementById('travelDate').setAttribute('min', currentDate);
    });
