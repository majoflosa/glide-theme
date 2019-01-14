window.addEventListener('load', () => {

    const servicesList = new FadeInOnscroll({
        contentSelector: '.landing-services-list', // parent wrapper of sections with fade in effect
        fadeInSectionsSelector: '.landing-services-item', // sections with fade in effect
        animationDuration: 1, // seconds; defaults to 1
        positionShift: 50, // number of pixels the content should slide; defaults to 50
        staggerDelay: 0.3 // delay in seconds between successive elements; defaults to 0.3
    });

});
