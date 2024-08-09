let slideIndex1 = 1;
    let slideIndex2 = 1;
    let slideIndex3 = 1;
    let slideIndex4 = 1;

    showSlides(slideIndex1, '1');
    showSlides(slideIndex2, '2');
    showSlides(slideIndex3, '3');
    showSlides(slideIndex4, '4');

    function plusSlides(n, slideshowIndex) {
        if (slideshowIndex === '1') {
            showSlides(slideIndex1 += n, '1');
        } else if (slideshowIndex === '2') {
            showSlides(slideIndex2 += n, '2');
        } else if (slideshowIndex === '3') {
            showSlides(slideIndex3 += n, '3');
        } else if (slideshowIndex === '4') {
            showSlides(slideIndex4 += n, '4');
        }
    }

    function showSlides(n, slideshowIndex) {
        const slides = document.querySelectorAll(`.fade${slideshowIndex}`);
        if (n > slides.length) {
            if (slideshowIndex === '1') {
                slideIndex1 = 1;
            } else if (slideshowIndex === '2') {
                slideIndex2 = 1;
            } else if (slideshowIndex === '3') {
                slideIndex3 = 1;
            } else if (slideshowIndex === '4') {
                slideIndex4 = 1;
            }
        }
        if (n < 1) {
            if (slideshowIndex === '1') {
                slideIndex1 = slides.length;
            } else if (slideshowIndex === '2') {
                slideIndex2 = slides.length;
            } else if (slideshowIndex === '3') {
                slideIndex3 = slides.length;
            } else if (slideshowIndex === '4') {
                slideIndex4 = slides.length;
            }
        }
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        slides[slideshowIndex === '1' ? slideIndex1 - 1 : slideshowIndex === '2' ? slideIndex2 - 1 : slideshowIndex === '3' ? slideIndex3 - 1 : slideIndex4 - 1].classList.add('active');
}

