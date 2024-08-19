let bannerItems = document.querySelectorAll('.banner-item');
let currentBanner = 0;

function rotateBanner() {
    bannerItems[currentBanner].classList.remove ('active');
    currentBanner = (currentBanner + 1) % bannerItems.length;
    bannerItems[currentBanner].classList.add('active');
}

setInterval(rotateBanner, 5000);