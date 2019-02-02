import LoadingScreen from '../../lib/LoadingScreen';

export default function generalLoadingScreen() {
    window.addEventListener('load', () => {
        const loadingScreen = new LoadingScreen( '#loading-screen' );
    });
}
