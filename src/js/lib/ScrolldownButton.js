import { TweenLite, ScrollToPlugin } from 'gsap/all';

const scrollTo = ScrollToPlugin;

export default class ScrollDownButton {
    constructor( options ) {
        this.$button = document.querySelector( options.buttonSelector );
        this.$currentSection = document.querySelector( options.currentSectionSelector );
        if ( !this.$button ) {
            if ( process.env.NODE_ENV === 'development' ) {
                console.warn( `The provided query selector ${options.buttonSelector} did not match any elements on the document.` );
            }
            return false;
        }

        this.animationDuration = options.animationDuration || 2;

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
        TweenLite.to( window, this.animationDuration, { scrollTo: this.$currentSection.offsetHeight - 60});
    }
}
