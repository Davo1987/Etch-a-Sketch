const container = document.querySelector('container');

// Default number of divs to display
const numberOfDivs = 16;

// For loop to access all the divs and display on the webpage
for (let i = 0; i < numberOfDivs; i++) {
    const newDiv = documentt.createElement('div');
    newDiv.textContent = `Div ${ i + 1}`;
    container.appendChild(newDiv);
}