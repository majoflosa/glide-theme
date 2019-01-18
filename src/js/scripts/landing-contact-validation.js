class ContactValidation {
    constructor( options ) {
        this.$form = document.querySelector( options.formSelector );
        this.fields = options.fields;
        this.errorSelector = options.errorSelector;

        this.$form.noValidate = true;
        this.formIsValid = true;
        this.validationTests = this.tests();

        this.bindEvents = this.bindEvents.bind( this );
        this.validate = this.validate.bind( this );
        this.checkRules = this.checkRules.bind( this );
        this.tests = this.tests.bind( this );
        this.resetForm = this.resetForm.bind( this );

        this.bindEvents();
    }
    
    bindEvents() {
        this.$form.addEventListener( 'submit', this.validate );
        this.$form.addEventListener( 'reset', this.resetForm );
    }

    validate( event ) {
        this.fields.forEach( field => {
            const $field = document.querySelector( field.selector );
            const $fieldError = $field.parentElement.querySelector( this.errorSelector );
            
            $fieldError.innerText = '';
            field.errors = [];
            this.checkRules( $field.value, field.rules, field.errors );

            if ( field.errors.length ) {
                this.formIsValid = false;
                $fieldError.innerText = field.errors.join(' | ');
            } else {
                this.formIsValid = true;
            }
        });

        if ( !this.formIsValid ) event.preventDefault();
    }

    checkRules( value, rules, errors ) {
        rules.forEach( rule => {
            if ( rule.includes('min:') || rule.includes('max:') ) {
                const split = rule.split(':');
                const _rule = split.shift();
                const params = [...split];

                this.validationTests[_rule](value, errors, params);
            } else {
                this.validationTests[rule](value, errors);
            }
        });
    }

    tests() {
        return {
            'required': function( value, errors ) {
                if ( !value.length ) errors.push( 'This field is required. ' );
            },
            'min': function( value, errors, params ) {
                if ( value.length < +params[0] ) 
                    errors.push( `This field must be at least ${params[0]} characters long. `)
            },
            'max': function( value, errors, params ) {
                if ( value.length > +params[0] )
                    errors.push( `This field cannot exceed ${params[0]} characters. `)
            },
            'email': function( value, errors ) {
                let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                if ( !re.test(value.toLowerCase()) )
                    errors.push( 'This field must be a valid email address.' );
            }
        }
    }

    resetForm() {
        this.fields.forEach( field => {
            const $field = document.querySelector( field.selector );
            const $fieldError = $field.parentElement.querySelector( this.errorSelector );
            
            $fieldError.innerText = '';
            field.errors = [];
        });
    }
}

window.addEventListener('load', () => {
    const contactValidation = new ContactValidation({
        formSelector: '.landing-contact-form',
        fields: [
            { selector: '#name', rules: ['required', 'min:2'] },
            { selector: '#email', rules: ['required', 'email'] },
            { selector: '#message', rules: ['required', 'min:2'] }
        ],
        errorSelector: '.landing-contact-form-error'
    });
});
