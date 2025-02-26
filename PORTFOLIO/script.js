function openModal(id) {
    document.getElementById(id).style.display = 'block';
}
function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

const hour = new Date().getHours();
let greeting;

if (hour < 12) {
    greeting = "Good Morning!";
} else if (hour < 18) {
    greeting = "Good Afternoon!";
} else {
    greeting = "Good Evening!";
}

document.getElementById("greeting-message").textContent = greeting;

const skills = [
    { name: "Python", level: "Advanced" },
    { name: "Machine Learning", level: "Intermediate" },
    { name: "Web Development", level: "Advanced" },
    { name: "Data Visualization", level: "Intermediate" }
];

function displaySkills() {
    let skillsContainer = document.getElementById("skills-list");
    skillsContainer.innerHTML = "<h3>Skill Levels:</h3>";
    skills.forEach(skill => {
        skillsContainer.innerHTML += `<p>${skill.name}: ${skill.level}</p>`;
    });
}

function calculateAge() {
    let birthYear = prompt("Enter your birth year:");
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    alert(`You are approximately ${age} years old!`);
}

document.addEventListener("DOMContentLoaded", displaySkills);
