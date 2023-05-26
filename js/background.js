
function changeBackground() {
    const images = [
        "url('./images/slideshow/new-slideshow-1.png')",
        "url('./images/slideshow/new-slideshow-2.png')",
        "url('./images/slideshow/new-slideshow-3.png')",
        "url('./images/slideshow/new-slideshow-4.png')",
        "url('./images/slideshow/new-slideshow-5.png')",
        "url('./images/slideshow/new-slideshow-6.png')"
    ];

    const hero = document.querySelector('.hero');
    const background = images[Math.floor(Math.random() * images.length)];
    hero.style.transition = 'background-image 0.5s ease-in-out';
    hero.style.backgroundImage = background;
}

setInterval(changeBackground, 3000);

// SOURCE: https://stackoverflow.com/questions/34690104/make-javascript-change-background-image-every-5-seconds