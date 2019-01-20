class FadeInOnscroll {
    constructor( options ) {
        // the element that wraps content with fade in effect
        this.$element = document.querySelector( options.contentSelector );
        if ( !this.$element ) {
            console.warn( `The provided query selector ${options.contentSelector} did not match any elements on the document.` );

            return false;
        }
        
        // wrapper's child elements, which will have the successive fadeIn animation
        this.fadeInSections = [...this.$element.querySelectorAll( options.fadeInSectionsSelector )];

        // duration of animation in seconds; defaults to 1
        this.duration = options.animationDuration === undefined ? 1 : options.animationDuration;
        // amount of pixels the content should slide
        this.positionShift = options.positionShift === undefined ? 50 : options.positionShift;
        // animation delay in seconds between successive elements 
        this.stagger = options.staggerDelay === undefined ? 0.3 : options.staggerDelay;

        this.extraFromOptions = options.extraFromOptions || {};
        this.extraToOptions = options.extraToOptions || {};

        // height of fade-in content wrapper
        this.elementHt = this.$element.offsetHeight;
        // track whether the content has already performed the animation
        this.contentDisplayed = false;

        // bind context of all methods to current instance
        this.init = this.init.bind( this );
        this.bindEvents = this.bindEvents.bind( this );
        this.fadeIn = this.fadeIn.bind( this );

        // run all initial functionality
        this.init();
    }

    /**
     * Run all initial functionality
     */
    init() {
        // make fade-in content invisible
        this.fadeInSections.forEach( section => section.style.opacity = 0 );

        this.fadeIn();

        // bind relevant events
        this.bindEvents();
    }

    /**
     * Bind relevant events
     */
    bindEvents() {
        window.addEventListener('scroll', this.fadeIn );
    }

    /**
     * Runs the animation if conditions are met
     */
    fadeIn() {
        // do nothing if animation already played
        if ( this.contentDisplayed ) return false;

        // check if enough has been scrolled to bring animated content into view
        if ( this.$element.offsetTop - window.innerHeight + (this.elementHt * 0.25) <= window.scrollY ) {
            // make note that animation has now played
            this.contentDisplayed = true;
            const fromOptions = { ...this.extraFromOptions, y: this.positionShift, opacity: 0 };
            const toOptions = { ...this.extraToOptions, y: 0, opacity: 1, ease: Power1.easeOut };

            // create the animation
            TweenMax.staggerFromTo(
                this.fadeInSections,
                this.duration,
                fromOptions,
                toOptions,
                this.stagger
            );
        }
    }

}
