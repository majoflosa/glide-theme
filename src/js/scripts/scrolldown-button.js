class ScrollDownButton {
    constructor( options ) {
        this.$button = document.querySelector( options.buttonSelector );
        this.$currentSection = document.querySelector( options.currentSectionSelector );

        this.init = this.init.bind( this );
        this.bindEvents = this.bindEvents.bind( this );
        this.scrollDown = this.scrollDown.bind( this );

        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        this.$button.addEventListener('click', this.scrollDown );
    }

    scrollDown() {
        TweenLite.to( window, 1, { scrollTo: this.$currentSection.offsetHeight - 30});
    }
}

window.addEventListener('load', () => {
    const scrollDownButton = new ScrollDownButton({
        buttonSelector: '.scroll-down-button',
        currentSectionSelector: '.splash'
    });
});
