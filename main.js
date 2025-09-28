

const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('.heading');

function hamburgerClick() {
        var x = document.querySelector(".heading");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }

    hamburger.addEventListener('click', hamburgerClick);
  
   
// click links
const logo = document.querySelector('.logo');


const body = document.querySelector('body');

// Check if dark mode is enabled
const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Apply dark mode styles if enabled
if (isDarkMode) {
  body.classList.add('dark-mode');
}
logo.addEventListener('click', () => {
    window.location.href = 'index.html';
});

/*
const hover = document.querySelectorAll('.card-index-d');

hover.forEach(card) => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.1)';
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
    });
};
*/