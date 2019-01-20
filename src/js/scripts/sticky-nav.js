class StickyNav {
    constructor( options ) {
        // nav element
        this.$nav = document.querySelector( options.navSelector );
        // wrapper element for all content under nav
        this.$mainWrap = document.querySelector( options.mainWrapSelector );
        if ( !this.$mainWrap ) {
            console.warn( `The provided query selector ${options.mainWrapSelector} did not match any elements on the document.` );
            return false;
        }
        this.$splash = this.$mainWrap.querySelector( '.splash' );

        // Y coordinate of point where nav should become sticky
        this.stickPoint = 0 //this.$splash.offsetHeight - this.$nav.offsetHeight;
        // css class to add to make the nav bar stick
        this.stickyClass = options.stickyClass;

        // track whether or not the nav has is in the sticky state
        this.isSticky = false;

        this.$menuButton = document.querySelector( options.menuButtonSelector );
        this.$menu = document.querySelector( options.menuSelector );
        this.openMenuClass = options.openMenuClass;
        this.closeMenuClass = options.closeMenuClass;

        // bind context of all methods to current instance
        this.init = this.init.bind( this );
        this.bindEvents = this.bindEvents.bind( this );
        this.stick = this.stick.bind( this );
        this.toggleMenu = this.toggleMenu.bind( this );
        this.disableStick = this.disableStick.bind( this );

        // run all initial functionality
        this.init();
    }

    init() {
        this.bindEvents();
    }
    
    bindEvents() {
        // set up listener for scroll event
        window.addEventListener( 'scroll', this.stick );
        window.addEventListener( 'resize', this.disableStick );
        this.$menuButton.addEventListener( 'click', this.toggleMenu );
    }
    
    stick() {
        // if ( window.innerWidth < 960 ) return false;

        if ( window.scrollY > this.stickPoint && this.isSticky ) {
            // do nothing if nav is already in sticky state, and user is scrolling past sticking point
            return;
        } else if ( window.scrollY > this.stickPoint && !this.isSticky ) {
            // user is scrolling past sticking point while nav is in initial state
            this.$nav.classList.add( this.stickyClass );

            this.isSticky = true;
        } else {
            // set nav back to initial state if scrolling back to sticking point
            this.$nav.classList.remove( this.stickyClass );

            this.isSticky = false;
        }
    }

    disableStick() {
        if ( window.innerWidth < 960 ) {
            this.$nav.classList.remove( this.stickyClass );
    
            this.isSticky = false;
        } 
    }

    toggleMenu() {
        if ( this.$menu.classList.contains(this.openMenuClass) ) {
            this.$menu.classList.remove( this.openMenuClass );
            this.$menu.classList.add( this.closeMenuClass );
        }
        else {
            this.$menu.classList.remove( this.closeMenuClass );
            this.$menu.classList.add( this.openMenuClass );
        } 
    }
}

// instantiate the component
window.addEventListener('load', function() {
    const stickyNav = new StickyNav({
        navSelector: '.main-nav',
        mainWrapSelector: '.page-wrap',
        stickyClass: 'sticky',
        menuButtonSelector: '.mobile-menu-button',
        menuSelector: '.main-nav-links',
        openMenuClass: 'open',
        closeMenuClass: 'close'
    });
});