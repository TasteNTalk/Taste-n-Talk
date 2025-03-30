// JavaScript for the Language Selection Page

// Select all language tiles and the "Continue" button
const languageTiles = document.querySelectorAll('.tile');
const continueButton = document.querySelector('.continue-button');

// Variable to store the selected language
let selectedLanguage = null;

// Function to handle tile selection
languageTiles.forEach((tile, index) => {
    tile.addEventListener('click', () => {
        // Remove highlight from previously selected tile
        languageTiles.forEach((t) => {
            t.style.outline = 'none';
            t.style.transform = 'scale(1)';
        });

        // Highlight the selected tile
        tile.style.outline = '3px solid #00BFFF'; // Change to desired highlight color
        tile.style.transform = 'scale(1.2)'; // Slightly enlarge the tile
        selectedLanguage = index; // Save the selected tile index
    });
});

// Handle the "Continue" button click
continueButton.addEventListener('click', () => {
    if (selectedLanguage !== null) {
        const selectedTile = languageTiles[selectedLanguage];
        const languageText = selectedTile.querySelector('.display').textContent;
        console.log(`Selected Language: ${languageText}`);
        
        languageTiles.forEach(t => {
            t.style.outline = 'none';
            t.style.transform = 'scale(1)';
        })
        
        // Redirect or perform an action based on the selected language
        alert(`You selected ${languageText}. Proceeding to the next step...`);
        // Example: window.location.href = `next-page.html?language=${languageText}`;
        
    } else {
        alert('Please select a language before continuing.');
    }
});
