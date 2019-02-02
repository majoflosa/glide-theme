import CarouselGallery from '../../lib/CarouselGallery';

export default function landingArticlesGallery() {

    window.addEventListener('load', () => {
        const articlesCarousel = new CarouselGallery({
            outerWrapperSelector: '.landing-articles-list-outer',
            innerWrapperSelector: '.landing-articles-list',
            itemSelector: '.landing-articles-item',
            bulletSelector: '.carousel-bullet',
            selectedBulletClass: 'selected-bullet',
            animationDuration: 0.5 // seconds; defaults to 0.5
        });
    });
    
}
