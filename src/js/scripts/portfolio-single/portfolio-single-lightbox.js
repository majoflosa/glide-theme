import LightboxGallery from '../../lib/LightboxGallery';

export default function portfolioSingleLightbox() {

    window.addEventListener('load', () => {
        const lightbox = new LightboxGallery({
            lightboxSelector: '.lightbox',
            thumbnailSelector: '.lightbox-thumbnail',
            imageContainerSelector: '.lightbox-image'
        });
    });

}
