var slideId = [1, 1, 1, 1];
var slideNames = ['slider-1', 'slider-2', 'slider-3', 'slider-refs'];

showSlide(1, 0);
showSlide(1, 1);
showSlide(1, 2);
showSlide(1, 3);

function nextSlide(n, num) {
    showSlide(slideId[num] += n, num);
}

function showSlide(n, num) {
    var i;
    var slides = document.getElementsByClassName(slideNames[num]);
    // console.log(slideNames[num])
    // console.log(n)

    if (n > slides.length) {
        slideId[num] = 1;
    }
    if (n < 1) {
        slideId[num] = slides.length;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideId[num] - 1].style.display = 'block';
    // console.log(slides.length)
    // console.log(slideId)
}

// Lightbox
var lb = document.getElementById('lb-modal');
var close = document.querySelector('.close')

function openLightbox() {
    lb.style.display = 'block'
}

close.addEventListener('click', function() {
    lb.style.display = 'none'
})

function currentSlide(slideNumber) {
    console.log(slideNumber)
}

// Clean up later...

// var sliderContainers = document.querySelectorAll('.slider-container');
// sliderContainers.forEach(function(container) {
//     container.addEventListener('click', function (e) {
//         // console.log(e.target)
//         if (e.target.hasAttribute('data-slider-id')) {
//             // console.log(e.target.src)
//             // console.log(e.target.dataset.sliderId)
//             // console.log(e.target.dataset.slideNumber)
//             getNext(e.target.dataset.sliderId, e.target.dataset.slideNumber)
//         }
        
//     })
// })

// function getNext(sliderId, slideNumber) {
//     console.log(sliderId, slideNumber)
// }