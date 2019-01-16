window.addEventListener('load', () => {
    const testimonialSlideshow = new SlideshowFade({
        wrapperSelector: '.landing-testimonials-list',
        slideSelector: '.landing-testimonials-item',
        interval: 7500,
        animationDuration: 0.3,
    });
});
