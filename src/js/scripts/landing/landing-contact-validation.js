import FormValidation from '../../lib/FormValidation';

export default function landingContactValidation() {

    window.addEventListener('load', () => {
        const contactValidation = new FormValidation({
            formSelector: '.landing-contact-form',
            fields: [
                { selector: '#name', rules: ['required', 'min:2'] },
                { selector: '#email', rules: ['required', 'email'] },
                { selector: '#message', rules: ['required', 'min:2'] }
            ],
            errorSelector: '.landing-contact-form-error'
        });
    });
    
}
