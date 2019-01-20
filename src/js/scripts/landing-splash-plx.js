window.addEventListener('load', () => {
    const layerElements = [...document.querySelectorAll('.plx-layer')];
    if ( !document.querySelectorAll('.plx-layer')[0] ) {
        console.warn( `The provided query selector .plx-layer did not match any elements on the document.` );
        return false;
    }

    const layers = layerElements.map( layer => {
        return {
            element: layer,
            initialTop: 300,
            scrollRatio: 0.75
        };
    });

    layers[1].scrollRatio = 0.25;
    layers[2].scrollRatio = 0.35;

    function repositionLayers( elements, $banner ) {
        const layer1 = elements.layers[0];
        layer1.initialTop = ($banner.offsetHeight * 0.2);
        layer1.element.style.top = layer1.initialTop + 'px';
        
        const layer2 = elements.layers[1];
        layer2.initialTop = ($banner.offsetHeight * 0.1);
        layer2.element.style.top = layer2.initialTop + 'px';
        
        const layer3 = elements.layers[2];
        layer3.initialTop = 0;
        layer3.element.style.top = layer3.initialTop + 'px';
    }

    const splashPlx = new LayeredPlxBanner({ banner: '.splash', layers: layers, onInit: repositionLayers });
});
