function updateActiveClass() {
    const slides = document.querySelectorAll('.room-slide');

    slides.forEach(slide => {
        if (getComputedStyle(slide).order != 2) {
            slide.classList.remove('active');
        } else {
            slide.classList.add('active');
        }
    });
}

// updateActiveClass();
setInterval(updateActiveClass, 3000);