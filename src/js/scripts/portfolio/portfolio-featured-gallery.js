import CarouselGallery from '../../lib/CarouselGallery';

export default function portfolioFeaturedGallery() {

    window.addEventListener('load', () => {
        const featuredCarousel = new CarouselGallery({
            outerWrapperSelector: '.portfolio-featured-list-outer',
            innerWrapperSelector: '.portfolio-featured-list',
            itemSelector: '.portfolio-featured-item',
            bulletSelector: '.gallery-bullet',
            selectedBulletClass: 'selected-bullet',
            animationDuration: 0.5 // seconds; defaults to 0.5
        });
    });
    
}