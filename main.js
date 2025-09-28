

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
/*const logo = document.querySelector('.logo');
logo.addEventListener('click', () => {
    window.location.href = 'index.html';
});

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