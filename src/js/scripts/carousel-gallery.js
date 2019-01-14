class CarouselGallery {
    constructor( options ) {
        this.$outerWrapper = document.querySelector( options.outerWrapperSelector );
        this.$innerWrapper = this.$outerWrapper.querySelector( options.innerWrapperSelector );
        this.$items = [...this.$outerWrapper.querySelectorAll( options.itemSelector)];
        this.$bullets = [...this.$outerWrapper.querySelectorAll( options.bulletSelector)];

        this.selectedBulletClass = options.selectedBulletClass;
        this.bulletClass = options.bulletSelector;

        this.itemWidthMargin = this.$items[0].offsetWidth + (this.$items[0].offsetLeft*2);
        this.shiftSpace = (this.$items.length * this.itemWidthMargin) - this.$outerWrapper.offsetWidth;
        this.bulletsNeeded = Math.ceil(this.shiftSpace / this.itemWidthMargin);
        console.log('this.bulletsNeeded: ', this.bulletsNeeded);
        
        this.init = this.init.bind( this );
        this.bindEvents = this.bindEvents.bind( this );
        this.shiftCarousel = this.shiftCarousel.bind( this );

        this.init();
    }

    init() {
        this.addBullets();
        this.bindEvents();
    }

    bindEvents() {
        this.$bullets.forEach( $bullet => $bullet.addEventListener( 'click', this.shiftCarousel ) );
    }

    shiftCarousel( event ) {
        const bulletIndex = this.$bullets.indexOf( event.target );

        this.$bullets.forEach( $bullet => $bullet.classList.remove( this.selectedBulletClass) );
        event.target.classList.add( this.selectedBulletClass );
        
        TweenMax.to( 
            this.$innerWrapper, 
            1, 
            {x: `-${(this.$items[0].offsetWidth + (this.$items[0].offsetLeft*2)) * bulletIndex}`}
        );
    }

    addBullets() {
        for ( let i = 0; i < this.bulletsNeeded; i++ ) {
            const $bullet = document.createElement( 'span' );
            $bullet.classList.add( this.bulletClass.substr(1, this.bulletClass.length) );

            this.$bullets[0].parentElement.appendChild( $bullet );
            this.$bullets.push( $bullet );
        }
    }
}

window.addEventListener('load', () => {
    const articlesCarousel = new CarouselGallery({
        outerWrapperSelector: '.landing-articles-list-outer',
        innerWrapperSelector: '.landing-articles-list',
        itemSelector: '.landing-articles-item',
        bulletSelector: '.carousel-bullet',
        selectedBulletClass: 'selected-bullet'
    });
});
