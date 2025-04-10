new Splide('.splide', {
    type: 'loop',
    autoplay: true,
    gap: '48px',
    interval: 2000,
    arrows: false,
    pagination: false,
    rewind: true,
    speed: 2000,
    autoWidth: true,
    autoHeight: true,
}).mount();

const videoBtn = document.querySelector('#video-btn');
const videoImg = document.querySelector('#video-img');
const videoPlayer = document.querySelector('#video-player');
const videoFile = document.querySelector('#video-file');

videoPlayer.addEventListener('click', function () {
    if (videoFile.paused) {
        videoImg.classList.add('none');
        videoPlayer.classList.remove('video-player--overlay');
        videoBtn.classList.add('none');
        videoFile.play();
    } else {
        videoPlayer.classList.add('video-player--overlay');
        videoBtn.classList.remove('none');
        videoFile.pause();
    }
})

document.querySelector('#scroll-btn').addEventListener('click', function () {
    document.querySelector('#case-studies').scrollIntoView({ behavior: 'smooth' });
});

const burger = document.querySelector('#burger');
const closeBtn = document.querySelector('#close-btn');
const menuMobi = document.querySelector('#header-menu-mobi');
const body = document.querySelector('#body');

function updateHeaderPadding(scrollContainer1, scrollContainer2) {
    const documentScrollWidth = window.innerWidth - document.documentElement.clientWidth;
    const menuMobiScrollWidth = menuMobi.offsetWidth - menuMobi.clientWidth;
    if (documentScrollWidth > menuMobiScrollWidth) {
        menuMobi.style.setProperty('--scroll-width', documentScrollWidth * -1 + 'px');
    } else if (documentScrollWidth < menuMobiScrollWidth) {
        menuMobi.style.setProperty('--scroll-width', menuMobiScrollWidth + 'px');
    } else {
        menuMobi.style.setProperty('--scroll-width', '0px');
    }
}

burger.addEventListener('click', function () {
    menuMobi.classList.add('menu-mobi--is-visible');
    updateHeaderPadding();
    body.classList.add('no-scroll');
})

closeBtn.addEventListener('click', function () {
    hideMenuMobi();
})

function hideMenuMobi() {
    menuMobi.classList.remove('menu-mobi--is-visible');
    body.classList.remove('no-scroll');
}

window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
        hideMenuMobi();
    }
})

