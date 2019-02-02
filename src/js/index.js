import '../sass/style.sass';

// general scripts
import generalLoadingScreen from './scripts/generals/general-loading-screen';
import generalNav from './scripts/generals/general-nav';
import generalScrolldown from './scripts/generals/general-scrolldown';

generalLoadingScreen();
generalNav();
generalScrolldown();

// landing scripts
import landingArticlesGallery from './scripts/landing/landing-articles-gallery';
import landingClientsCarousel from './scripts/landing/landing-clients-carousel';
import landingContactValidation from './scripts/landing/landing-contact-validation';
import landingModal from './scripts/landing/landing-modal';
import landingPortfolioFadeIn from './scripts/landing/landing-portfolio-fadeIn';
import landingPricingPlx from './scripts/landing/landing-pricing-plx';
import landingServicesFadeIn from './scripts/landing/landing-services-fadeIn';
import landingSplashPlx from './scripts/landing/landing-splash-plx';
import landingTestimonialSlideshow from './scripts/landing/landing-testimonial-slideshow';

landingArticlesGallery();
landingClientsCarousel();
landingContactValidation();
landingModal();
landingPortfolioFadeIn();
landingPricingPlx();
landingServicesFadeIn();
landingTestimonialSlideshow();
landingSplashPlx();