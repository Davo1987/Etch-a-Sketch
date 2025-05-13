const container = document.getElementById('container');

// Function to create grid max of 100
function createGrid () {
    // Ask user for grid size
    const numberOfDivs = prompt('Enter a number for size of grid');
    if ( numberOfDivs < 100 ) {
        // For loop to create the divs and display on the webpage
        for (let i = 0; i < numberOfDivs; i++) {    
            const newDiv = document.createElement('div');
            newDiv.textContent = `Div ${ i + 1}`;
            container.appendChild(newDiv);
        }
    } else {
        alert('Grid is too big. Please tpe in less than 100');
    }
}

createGrid();