import LightboxGallery from '../../lib/LightboxGallery';

export default function portfolioSingleLightbox() {

    window.addEventListener('load', () => {
        const lightbox = new LightboxGallery({
            lightboxSelector: '.lightbox',
            thumbnailSelector: '.lightbox-thumbnail',
            imageWrapSelector: '.lightbox-image-wrap',
            imageSelector: '.lightbox-image',
            captionSelector: '.lightbox-caption-text',
            nextButtonSelector: '.lightbox-nav-next',
            prevButtonSelector: '.lightbox-nav-prev'
        });
    });

}
