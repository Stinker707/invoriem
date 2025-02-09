$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        dots: false,
        loop: true,
        autoWidth: true,
        autoplay: true,
        autoplayTimeout: 3000,
    });
});

const videoBtn = document.querySelector('#video-btn');
const videoImg = document.querySelector('.video__img');
const videoWrapper = document.querySelector('.video-overlay');
const videoFile = document.querySelector('#video-stock');

videoWrapper.addEventListener('click', function () {
    if (videoFile.paused) {
        videoImg.classList.add('none');
        videoWrapper.classList.remove('video-overlay');
        videoBtn.classList.add('none');
        videoFile.play();
    } else {
        videoFile.pause();
        videoWrapper.classList.add('video-overlay');
        videoBtn.classList.remove('none');
        videoFile.pause();
    }
})

document.querySelector('#scroll-btn').addEventListener('click', function () {
    document.querySelector('#case-studies').scrollIntoView({ behavior: 'smooth' });
});

const btn = document.querySelector('#close-btn');
const menuMobi = document.querySelector('#header-menu-mobi');
const body = document.body;

btn.addEventListener('click', function(){
    btn.classList.toggle('header-mobi-close-btn--is-active');
    menuMobi.classList.toggle('menu-mobi--is-visible');
    body.classList.toggle('no-scroll');
})