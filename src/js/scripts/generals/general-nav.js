import StickyNav from '../../lib/StickyNav';

export default function generalNav() {
    window.addEventListener('load', function() {
        const stickyNav = new StickyNav({
            navSelector: '.main-nav',
            mainWrapSelector: '.page-wrap',
            stickyClass: 'sticky',
            menuButtonSelector: '.mobile-menu-button',
            menuSelector: '.main-nav-links',
            openMenuClass: 'open',
            closeMenuClass: 'close'
        });
    });
}
