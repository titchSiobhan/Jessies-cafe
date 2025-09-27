//hover effect
const hover = document.querySelectorAll('.card-index');

hover.forEach((card) => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.1)';
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
    });
});
// click links
const logo = document.querySelector('.logo');
const drinks = document.querySelector('.item2');
const food = document.querySelector('.item4');
const menu = document.querySelector('.item5');

logo.addEventListener('click', () => {
    window.location.href = 'index.html';
});

drinks.addEventListener('click', () => {
    window.location.href = 'drinks.html';
});

food.addEventListener('click', () => {
    window.location.href = 'menu.html';
});

menu.addEventListener('click', () => {
    window.location.href = 'menu.html';
});
