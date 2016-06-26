import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return this.store.findAll('contact');
    },

    actions:{
        deleteMessage(message) {
            let confirmation = confirm('Are you sure?');
            
            if (confirmation) {
                library.destroyRecord();
            }
        }
    }
});