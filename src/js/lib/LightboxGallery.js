import TweenLite from 'gsap/TweenLite';

export default class LightboxGallery {
    constructor( options ) {
        this.$lightbox = document.querySelector( options.lightboxSelector );
        if ( !this.$lightbox ) {
            if ( process.env.NODE_ENV === 'development' ) {
                console.warn( `The provided query selector ${options.lightboxSelector} did not match any elements. Aborting lightbox function.` );
                return false;
            }
        }

        this.$imageContainer = this.$lightbox.querySelector( options.imageContainerSelector );

        this.$thumbnails = [...document.querySelectorAll( '.lightbox-thumbnail' )];
        if ( !this.$thumbnails.length ) {
            if ( process.env.NODE_ENV === 'development' ) {
                console.warn( `The provided query selector ${options.thumbnailSelector} did not match any elements. Aborting lightbox function.` );
                return false;
            }
        }

        this.$close = this.$lightbox.querySelector( '.lightbox-close' );

        this.displaying = false;
        this.currentIndex = 0;

        this.bindEvents = this.bindEvents.bind( this );
        this.changeSlide = this.changeSlide.bind( this );
        this.handleThumbnailClick = this.handleThumbnailClick.bind( this );
        this.toggleLightbox = this.toggleLightbox.bind( this );

        this.bindEvents();
    }

    bindEvents() {
        this.$thumbnails.forEach( $thumbnail => $thumbnail.addEventListener('click', this.handleThumbnailClick) );
        this.$close.addEventListener( 'click', this.toggleLightbox );
    }

    handleThumbnailClick( event ) {
        const $thumbnailLink = event.target.parentElement;
        this.currentImageSrc = $thumbnailLink.dataset.image;
        this.currentIndex = this.$thumbnails.indexOf( $thumbnailLink.parentElement );

        this.changeSlide( this.currentImageSrc );
        this.toggleLightbox( event );
    }

    changeSlide( src ) {
        const $newImage = document.createElement('img');
        $newImage.src = src;
        // console.log( $newImage.height )

        $newImage.addEventListener('load', () => {
            this.$imageContainer.src = src;

            // if ( $newImage.height < $newImage.width ) {
            //     this.$imageContainer.style.height = 'auto';
            //     this.$imageContainer.style.width = '90%';
            // } else {
            //     this.$imageContainer.style.height = '80vh';
            //     this.$imageContainer.style.width = 'auto';
            // }

            this.$imageContainer.parentElement.classList.remove('loading');
            TweenLite.to(this.$imageContainer, 1, {opacity: 1})
        });
    }

    toggleLightbox( event ) {
        if ( !this.$close ) return false;

        if ( this.displaying ) {
            this.$lightbox.classList.remove('showing');
            this.$lightbox.classList.add('hidden');
            this.displaying = false;
        } else {
            this.$lightbox.classList.remove('hidden');
            this.$lightbox.classList.add('showing');
            this.displaying = true;
        }

        event.preventDefault();
    }
}
