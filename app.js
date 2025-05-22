const container = document.getElementById('container');
const resetButton = document.getElementById('reset');

// Function to create Div's of no more than 100
function createGrid () {
    // Ask user for grid size
    const num = prompt('Enter a number for size of grid (max 100):');
    const size = parseInt(num, 10);

    // Check if the input is a number and not less than 1
    if ( size > 0 && size < 100 ) {
        const squares = document.createElement('div');
        squares.setAttribute('class', 'squares');

        squares.style.width = `${size*40}px`;
        // Create grid squares
        for ( let row = 0; row < size**2; row++ ) {
            const square = document.createElement('div');
            square.setAttribute('class', 'square');
            squares.appendChild(square);
            container.appendChild(squares);

            // TODO: use different colours and opacity
            // Change color on hover
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = 'blue';

            } )
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