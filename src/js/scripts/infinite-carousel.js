class InfiniteCarousel {
    constructor( options ) {
        this.$wrap = document.querySelector( options.wrapSelector );
        if ( !this.$wrap ) {
            console.warn( `The provided query selector ${options.wrapSelector} did not match any elements on the document.` );
            return false;
        }
        this.$innerWrap = this.$wrap.querySelector( options.innerWrapSelector );
        this.$itemsCollection = this.$wrap.querySelectorAll( options.itemsSelector );
        this.$items = [...this.$itemsCollection];


        this.timeInterval = options.timeInterval || 5000;
        this.transitionDuration = options.transitionDuration || 0.4;
        this.playInterval = null;
        this.currentIndex = 0;

        this.init = this.init.bind( this );
        this.bindEvents = this.bindEvents.bind( this );
        this.playCarousel = this.playCarousel.bind( this );
        this.nextItem = this.nextItem.bind( this );
        this.previousItem = this.previousItem.bind( this );

        this.init();
    }

    init() {
        this.$items.forEach( item => this.$innerWrap.appendChild(item.cloneNode(true)) );
        this.bindEvents();
    }

    bindEvents() {
        this.playCarousel();
    }

    playCarousel() {
        this.playInterval = setInterval( this.nextItem, this.timeInterval );
    }

    nextItem() {
        if ( this.currentIndex > this.$items.length ) this.currentIndex = 0;
        if ( this.currentIndex === 0 ) {
            TweenMax.to( this.$innerWrap, 0, {x: 0} );
            TweenMax.to( this.$innerWrap, this.transitionDuration, {x: `-=${(this.$items[0].offsetWidth)}`} );
        } else {
            TweenMax.to( this.$innerWrap, this.transitionDuration, {x: `-=${(this.$items[0].offsetWidth)}`} );
        }

        this.currentIndex++;
    }

    previousItem() {

    }
}
