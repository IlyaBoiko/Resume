function toggleMenu() {
    const menuToggle = document.querySelector('.toggle');
    const sidebar = document.querySelector('.sidebar');
    menuToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
}

let linkGarage = document.querySelector('.garage');

linkGarage.addEventListener('click', function(e) {
    e.preventDefault();
    window.open('https://kholiavkoi.github.io/GarageService/');
})

let linkRelvise = document.querySelector('.relvise');

linkRelvise.addEventListener('click', function(e) {
    e.preventDefault();
    window.open('https://ilyaboiko.github.io/Relvise/');
})

let linkBike = document.querySelector('.bike');

linkBike.addEventListener('click', function(e) {
    e.preventDefault();
    window.open('https://ilyaboiko.github.io/Bike/');
})

let linkOcean = document.querySelector('.ocean');

linkOcean.addEventListener('click', function(e) {
    e.preventDefault();
    window.open('https://ilyaboiko.github.io/Ocean/');
})

let linkHeroes = document.querySelector('.heroes');

linkHeroes.addEventListener('click', function(e) {
    e.preventDefault();
    window.open('https://ilyaboiko.github.io/Heroes/');
})

let linkShop = document.querySelector('.shop');

linkShop.addEventListener('click', function(e) {
    e.preventDefault();
    window.open('https://ilyaboiko.github.io/Shop/');
})

let linkSpace = document.querySelector('.space');

linkSpace.addEventListener('click', function(e) {
    e.preventDefault();
    window.open('https://ilyaboiko.github.io/Space/');
})

let linkCollection = document.querySelector('.collection');

linkSpace.addEventListener('click', function(e) {
    e.preventDefault();
    window.open('https://ilyaboiko.github.io/Collection/');
})
