window.addEventListener('load', () => {

    const portfolio = new FadeInOnscroll({
        contentSelector: '.landing-portfolio-list',
        fadeInSectionsSelector: '.landing-portfolio-item',
        animationDuration: 1.25,
        positionShift: 0,
        staggerDelay: 0.2,
        extraFromOptions: { scale: 0.9 },
        extraToOptions: { scale: 1 }
    });

});