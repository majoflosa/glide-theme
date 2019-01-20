class LayeredPlxBanner {
    constructor( elements ) {
        this.elements = elements;

        this.$banner = document.querySelector( elements.banner );
        if ( !this.$banner ) {
            console.warn( `The provided query selector ${elements.banner} did not match any elements on the document.` );
            return false;
        }

        this.bannerHt = this.$banner.offsetHeight;

        this.onInit = elements.onInit ? elements.onInit.bind( this ) : () => null;


        this.init = this.init.bind( this );
        this.bindEvents = this.bindEvents.bind( this );
        this.parallax = this.parallax.bind( this );

        this.init();
    }

    init() {
        this.onInit( this.elements, this.$banner );

        this.parallax();
        this.bindEvents();
    }

    bindEvents() {
        window.addEventListener( 'scroll', this.parallax );
    }

    parallax() {
        let isElementVisible = this.$banner.offsetTop - window.innerHeight <= window.scrollY
                && window.scrollY <= this.$banner.offsetTop + (this.bannerHt);

        if ( isElementVisible ) {
            this.elements.layers.forEach( layer => {
                let initialParallaxPoint = window.scrollY - this.$banner.offsetTop - window.innerHeight;
                layer.element.style.top = layer.initialTop - (initialParallaxPoint * layer.scrollRatio ) + 'px';
            });
        }
    }
}
