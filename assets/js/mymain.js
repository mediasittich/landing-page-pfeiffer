(function(window) {

    const allSlides = document.querySelectorAll('.stack__slide');
    const sliderCtrlBtns = document.querySelectorAll('.slide-ctrl-btn');
    const modal = document.getElementById('modal')

    let slideIndex = [0, 0, 0]

    // Slider Controls
    sliderCtrlBtns.forEach(btn => btn.addEventListener('click', ctrlClickHandler))

    function ctrlClickHandler(e) {
        // console.log(e.target.dataset)

        let stackNumber = parseInt(e.target.dataset.stack)
        let n = 1 // step size
        

        // console.log(slides[slideIndex].children[0])
        if (e.target.dataset.direction === 'previous') {
            previousSlide(slideIndex, stackNumber, n)
        } else {
            nextSlide(slideIndex, stackNumber, n)
        }
    }

    function nextSlide(slideIndex, stackNumber, n){
        showSlide(slideIndex[stackNumber - 1] += n, stackNumber)
    }

    function previousSlide(slideIndex, stackNumber, n){
        showSlide(slideIndex[stackNumber - 1] -= n, stackNumber)
    }

    function showSlide(index, stackNumber){
        const slides = document.querySelectorAll(`[data-stack="${stackNumber}"][data-slide]`);
        
        
        if (index > slides.length - 1) {
            slideIndex[stackNumber - 1] = 0
        }
        if (index < 0) {
            slideIndex[stackNumber - 1] = slides.length - 1
        }

        // Display Slide
        console.log(slides[slideIndex[stackNumber - 1]])
        
    }


    // Lightbox

    const lbCloseBtn = document.getElementById('close-btn')
    const lbImgContainer = document.getElementById('lb-img-container')

    allSlides.forEach(slide => slide.addEventListener('click', slideClickHandler))

    function slideClickHandler(e) {
        
        let stackNumber = e.target.dataset.stack
        let slideNumber = e.target.dataset.slide

        console.log('Stack: ', stackNumber, 'Slide: ', slideNumber, 'Target: ', e.target.src)
        // currentSlide(slideNumber - 1, stackNumber)
        openLightbox(slideIndex, stackNumber, e.target.src)
    }

    function currentSlide(slideIndex, stackNumber){
        // showSlide(slideIndex, stackNumber)
    }

    function openLightbox(slideIndex, stackNumber, clickedImg) {
        // console.log(slides[slideIndex[stackNumber - 1]])
        let lbImg = document.createElement('img')
        lbImg.src = clickedImg
        lbImgContainer.appendChild(lbImg)
        modal.style.display = 'block'
    }

    lbCloseBtn.addEventListener('click', closeLightbox)

    function closeLightbox() {
        modal.style.display = 'none'
        while (lbImgContainer.hasChildNodes()) {
            lbImgContainer.removeChild(lbImgContainer.firstChild)
        }
    }

})(window);