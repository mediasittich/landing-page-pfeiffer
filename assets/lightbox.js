(function (window) {
    
    var allSlides = document.querySelectorAll('.stack__slide');
    var modal = document.getElementById('modal');
    var closeBtn = document.getElementById('close-btn');
    var imgContainer = document.getElementById('lb-img-container');

    allSlides.forEach(slide => slide.addEventListener('click', handleImgClick));

    function handleImgClick(e) {
        openLightbox(e.target)
    }

    // Open Lightbox
    function openLightbox(img) {
        console.log(img)
        imgContainer.appendChild(img)
        modal.style.display = 'block';
    }

    // Close Lightbox
    closeBtn.addEventListener('click', closeLightbox);

    function closeLightbox() {
        // Close Modal Element
        modal.style.display = 'none';

        // Remove Image from imgContainer
        // while(imgContainer.hasChildNodes()) {
        //     imgContainer.removeChild(imgContainer.firstChild);
        // }
    }

})(window);