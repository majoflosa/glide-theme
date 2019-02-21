export default class LightboxGallery {
    constructor( options ) {
        this.$lightbox = document.querySelector( options.lightboxSelector );
        if ( !this.$lightbox ) {
            if ( process.env.NODE_ENV === 'development' ) {
                console.warn( `The provided query selector ${options.lightboxSelector} did not match any elements. Aborting lightbox function.` );
                return false;
            }
        }

        this.$thumbnails = [...document.querySelectorAll( '.lightbox-thumbnail' )];
        if ( !this.$thumbnails.length ) {
            if ( process.env.NODE_ENV === 'development' ) {
                console.warn( `The provided query selector ${options.thumbnailSelector} did not match any elements. Aborting lightbox function.` );
                return false;
            }
        }

        this.$close = this.$lightbox.querySelector( '.lightbox-close' );

        this.displaying = false;

        this.bindEvents = this.bindEvents.bind( this );
        this.changeSlide = this.changeSlide.bind( this );
        this.toggleLightbox = this.toggleLightbox.bind( this );

        this.bindEvents();
    }

    bindEvents() {
        this.$thumbnails.forEach( $thumbnail => $thumbnail.addEventListener('click', this.toggleLightbox) );
        this.$close.addEventListener( 'click', this.toggleLightbox );
    }

    changeSlide( index ) {

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
