import FadeInOnscroll from '../../lib/FadeInOnscrollMultiple';

export default function portfolioGalleryFadeIn() {

    window.addEventListener('load', () => {
    
        const portfolio = new FadeInOnscroll({
            contentSelector: '.image-gallery',
            fadeInSectionsSelector: '.image-gallery-item',
            animationDuration: 1.25,
            positionShift: 0,
            staggerDelay: 0.2,
            extraFromOptions: { scale: 0.9 },
            extraToOptions: { scale: 1 }
        });
    
    });

}
