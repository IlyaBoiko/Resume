function toggleMenu() {
    const menuToggle = document.querySelector('.toggle');
    const sidebar = document.querySelector('.sidebar');
    menuToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
}

let linkGarage = document.querySelector('.garage');

linkGarage.addEventListener('click', function(e) {
    e.preventDefault();
    window.location.replace('https://kholiavkoi.github.io/GarageService/');
})

let linkRelvise = document.querySelector('.relvise');

linkRelvise.addEventListener('click', function(e) {
    e.preventDefault();
    window.location.replace('https://ilyaboiko.github.io/Relvise/');
})

let linkBike = document.querySelector('.bike');

linkBike.addEventListener('click', function(e) {
    e.preventDefault();
    window.location.replace('https://ilyaboiko.github.io/Bike/');
})