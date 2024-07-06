function rotateOrder(direction) {
    const container = document.getElementById('testimonial-container');
    const slides = container.getElementsByClassName('testimonial-slide');
    const totalSlides = slides.length;

    for (let slide of slides) {
        let currentOrder = parseInt(window.getComputedStyle(slide).order);
        if (direction === 'next') {
            slide.style.order = (currentOrder % totalSlides) + 1;
        } else if (direction === 'prev') {
            slide.style.order = (currentOrder - 2 + totalSlides) % totalSlides + 1;
        }
    }

}

