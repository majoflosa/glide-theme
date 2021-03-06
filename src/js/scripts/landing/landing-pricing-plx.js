import LayeredPlxBanner from '../../lib/LayeredParallax';

export default function landingPricingParallax() {
    
    window.addEventListener('load', () => {
        const layerElements = [...document.querySelectorAll('.bg-layer')];
        if ( !document.querySelectorAll('.bg-layer')[0] ) {
            console.warn( `The provided query selector .bg-layer did not match any elements on the document.` );
            return false;
        }
        
        const layers = layerElements.map( layer => {
            return {
                element: layer,
                initialTop: 300,
                scrollRatio: 0.15
            };
        });
    
        layers[1].scrollRatio = 0.3;
    
        function repositionLayers( elements, $banner ) {
            const layer1 = elements.layers[0];
            layer1.initialTop = 0;
            layer1.element.style.top = layer1.initialTop + 'px';
            
            const layer2 = elements.layers[1];
            layer2.initialTop = ($banner.offsetHeight * 0.5);
            layer2.element.style.top = layer2.initialTop + 'px';
        }
    
        const pricingPlx = new LayeredPlxBanner({ banner: '.landing-pricing', layers: layers, onInit: repositionLayers });
    });
    
}
