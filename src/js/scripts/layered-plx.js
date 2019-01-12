class LayeredPlxBanner {
    constructor( elements ) {
        this.elements = elements;

        this.$banner = document.querySelector( elements.banner );

        this.bannerHt = this.$banner.offsetHeight;

        this.init = this.init.bind( this );
        this.bindEvents = this.bindEvents.bind( this );
        this.parallax = this.parallax.bind( this );

        this.init();
    }

    init() {
        const layer1 = this.elements.layers[0];
        layer1.initialTop = (this.$banner.offsetHeight);
        layer1.element.style.top = layer1.initialTop + 'px';
        
        const layer2 = this.elements.layers[1];
        layer2.initialTop = (this.$banner.offsetHeight * 0.7);
        layer2.element.style.top = layer2.initialTop + 'px';
        
        const layer3 = this.elements.layers[2];
        layer3.initialTop = (this.$banner.offsetHeight * 0.3);
        layer3.element.style.top = layer3.initialTop + 'px';

        this.parallax();

        this.bindEvents();
    }

    bindEvents() {
        window.addEventListener( 'scroll', this.parallax );
    }

    parallax() {
        this.elements.layers.forEach( layer => {
            layer.element.style.top = layer.initialTop - (window.scrollY * layer.scrollRatio ) + 'px';
        });
    }
}

window.addEventListener('load', () => {
    const layerElements = [...document.querySelectorAll('.plx-layer')];
    const layers = layerElements.map( layer => {
        return {
            element: layer,
            initialTop: 300,
            scrollRatio: 0.75
        };
    });

    layers[1].scrollRatio = 0.25;
    layers[2].scrollRatio = 0.35;

    const splashPlx = new LayeredPlxBanner({ banner: '.splash', layers: layers });
});
