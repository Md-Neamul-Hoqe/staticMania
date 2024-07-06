function updateActiveClass() {
    const slides = document.querySelectorAll('.room-slide');
    slides.forEach(slide => {
        if (getComputedStyle(slide).order == 2) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

// updateActiveClass();
setInterval(updateActiveClass, 0.1);