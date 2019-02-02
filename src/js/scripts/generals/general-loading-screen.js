import LoadingScreen from '../../lib/LoadingScreen';

export default function generalLoadingScreen() {
    if ( process.env.NODE_ENV === 'development' ) {
        document.querySelector('body').removeChild( document.querySelector('#loading-screen') );
        return false;
    }
    window.addEventListener('load', () => {
        const loadingScreen = new LoadingScreen( '#loading-screen' );
    });
}
