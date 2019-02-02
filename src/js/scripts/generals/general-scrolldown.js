import ScrolldownButton from '../../lib/ScrolldownButton';

export default function generalScrolldownButton() {
    window.addEventListener('load', () => {
        const scrollDownButton = new ScrolldownButton({
            buttonSelector: '.scroll-down-button',
            currentSectionSelector: '.splash',
            animationDuration: 1.25 // seconds
        });
    });
}
