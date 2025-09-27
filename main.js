

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
logo.addEventListener('click', () => {
    window.location.href = 'index.html';
});

