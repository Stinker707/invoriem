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
        videoWrapper.classList.add('video-overlay');
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
    // console.log(scrollContainer1.innerWidth, scrollContainer1.clientWidth);
    // console.dir(scrollContainer2.offsetWidth - scrollContainer2.clientWidth);
    console.dir(window.innerWidth - document.documentElement.clientWidth);
}

burger.addEventListener('click', function(){
    // btn.classList.toggle('header-mobi-close-btn--is-active');
    menuMobi.classList.add('menu-mobi--is-visible');
    updateHeaderPadding(body, menuMobi);
    body.classList.add('no-scroll');
})

closeBtn.addEventListener('click', function(){
    // btn.classList.toggle('header-mobi-close-btn--is-active');
    menuMobi.classList.remove('menu-mobi--is-visible');
    // updateHeaderPadding(body, menuMobi);
    body.classList.remove('no-scroll');
})