function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


        // Function to color each letter of an element
        function colorEachLetter(elementId) {
            const element = document.getElementById(elementId);
            const text = element.textContent;
            const colors = ['rgb(66,133,244)', 'rgb(219,68,55)', ' orange', 'rgb(66,133,244)', 'rgb(15,157,88)','rgb(219,68,55)']; // Define colors for each letter

            let coloredText = '';
            for (let i = 0; i < text.length; i++) {
                const letter = text[i];
                const color = colors[i % colors.length]; // Cycle through the colors
                coloredText += `<span style="color: ${color}">${letter}</span>`;
            }

            element.innerHTML = coloredText; // Update the element with colored text
        }

        // Call the function to color the letters of the element with the specified ID
        colorEachLetter('textToColor');
        colorEachLetter('TextToColor');
        colorEachLetter('textTOColor');