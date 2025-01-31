$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        dots: false,
        margin: 48,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000
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
