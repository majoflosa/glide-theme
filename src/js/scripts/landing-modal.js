window.addEventListener('load', () => {
    const landingModal = new ModalBox({
        wrapperSelector: '.landing-modal',
        togglerSelectors: ['.modal-close', '.splash-cta', '.cancel-modal-action'],
        // closeSelector: '.modal-close',
        // triggerSelector: '.splash-cta',
        hiddenClass: 'hidden',
        visibleClass: 'visible',
        animationDuration: 0.5
    });
});
