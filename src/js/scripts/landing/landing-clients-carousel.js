import InfiniteCarousel from '../../lib/InfiniteCarousel';

export default function landingClientsCarousel() {

    window.addEventListener('load', () => {
        const clientsCarousel = new InfiniteCarousel({
            wrapSelector: '.landing-clients-list',
            innerWrapSelector: '.landing-clients-inner-list',
            itemsSelector: '.landing-clients-item',
            timeInterval: 5000, // milliseconds
            transitionDuration: 0.4 // seconds
        })
    });
    
}
