// Global variable to track selected person
let selectedP = 0;

// Event listener to open modal when DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    openModal();
});

// Function to open the modal
function openModal() {
    const modal = document.getElementById("modal");
    if (modal) {
        modal.style.display = "flex";
    }
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById("modal");
    if (modal) {
        modal.style.display = "none";
    }
}

// Function to select a person and close modal
function selectPerson(selected) {
    // Ensure the selected value is a number
    selectedP = Number(selected);
    closeModal();
}

// Function to generate a random score for a specific person
function randomGenerate(selectedPerson) {
    // Ensure the selected person matches the current selection
    if (selectedPerson === selectedP) {
        // Get the score element dynamically based on selected person
        const scoreElement = document.getElementById(`score${selectedPerson}`);
        
        if (scoreElement) {
            // Generate a random number between 1 and 12
            scoreElement.textContent = Math.floor(Math.random() * 12 + 1);
        }
    }
}