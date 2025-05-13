const container = document.getElementById('container');
const resetButton = document.getElementById('reset');

// TODO: When creating new Div's make them number of columns and rows not just a total amount of Div's

// Function to create Div's of no more than 100
function createGrid () {
    // Ask user for grid size
    const numberOfDivs = prompt('Enter a number for size of grid');
    if ( numberOfDivs < 100 ) {
        // For loop to create the divs and display on the webpage
        for (let i = 0; i < numberOfDivs; i++) {    
            const newDiv = document.createElement('div');
            // Test to see if the divs are created
            newDiv.textContent = `Div ${ i + 1}`;
            container.appendChild(newDiv);
        }
    } else {
        alert('Grid is too big. Please type in less than 100');
    }
}

// Function to reset the grid
resetButton.addEventListener('click', function(e) {
    // Clear the container
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    // Call createGrid function again
    createGrid();
})

createGrid();