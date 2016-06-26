import Ember from 'ember';

export default Ember.Controller.extend({
    contactEmail: '',
    isValid: Ember.computed.match('contactEmail', /^.+@.+\..+$/),
    isLongEnough: Ember.computed.gte('contactMessage.length',5), //gte = 'greater than or equal'
    isValidAndLong: Ember.computed.and('isValid','isLongEnough'),
    isDisabled: Ember.computed.not('isValidAndLong'),

    actions: {
        sendMessage() {
            
            const email = this.get('contactEmail');
            const message = this.get('contactMessage');
            const newContact = this.store.createRecord('contact',{
                email:email,
                message:message,
            });

            newContact.save().then(() => {
                this.set('responseMessage','Thanks for reaching out, we\'ll be in contact shortly' );
                this.set('contactEmail', '');
                this.set('contactMessage', '');
            });

            
        }
  },

});
