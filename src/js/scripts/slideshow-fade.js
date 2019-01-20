class SlideshowFade {
    constructor( options ) {
        this.$wrapper = document.querySelector( options.wrapperSelector );
        if ( !this.$wrapper ) {
            console.warn( `The provided query selector ${options.wrapperSelector} did not match any elements on the document.` );
            return false;
        }
        this.$slides = [...this.$wrapper.querySelectorAll( options.slideSelector )];


        this.interval = options.interval || 7500;
        this.animationDuration = options.animationDuration || 0.3;
        
        this.currentIndex = 0;

        this.setWrapperHeight = this.setWrapperHeight.bind( this );
        this.play = this.play.bind( this );
        this.fadeInSlide = this.fadeInSlide.bind( this );
        this.fadeOutSlide = this.fadeOutSlide.bind( this );

        this.play();
        window.addEventListener(
            'resize', 
            () => this.$wrapper.style.height = this.$slides[0].offsetHeight + 'px'
        );
    }

    setWrapperHeight() {
        this.$slides.forEach( ($slide, index) => $slide.style.opacity = index ? 0 : 1 );

        this.$wrapper.style.height = this.$slides[0].offsetHeight + 'px';
        this.$wrapper.style.overflow = 'hidden';
    }

    play() {
        if ( this.$slides.length > 1 ) {
            this.setWrapperHeight();
            setInterval( () => this.fadeOutSlide(this.fadeInSlide), this.interval );
        } 
    }

    fadeOutSlide( next ) {
        let $currentSlide = this.$slides[this.currentIndex];

        TweenMax.fromTo(
            $currentSlide,
            this.animationDuration,
            { opacity: 1, x: 0, y: -$currentSlide.offsetTop },
            { opacity: 0, x: 40, y: -$currentSlide.offsetTop }
        );

        this.currentIndex = this.currentIndex === this.$slides.length - 1
            ? 0
            : this.currentIndex + 1;

        setTimeout( next, this.animationDuration + 100 );
    }

    fadeInSlide() {
        let $currentSlide = this.$slides[this.currentIndex];

        TweenMax.fromTo(
            $currentSlide,
            this.animationDuration,
            { opacity: 0, x: -40, y: -$currentSlide.offsetTop },
            { opacity: 1, x: 0, y: -$currentSlide.offsetTop }
        );
    }
}
