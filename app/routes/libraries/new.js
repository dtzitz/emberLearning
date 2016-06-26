import Ember from 'ember';

export default Ember.Route.extend({

    model(){
        return this.store.createRecord('library');
    },

    actions:{

        saveLibrary(newLibrary){
            newLibrary.save().then(() => this.transitionTo('libraries'));
        },

        willTransition(){
            //rollBackAttributes will remove the model from the store if it isNew
            this.controller.get('model').rollBackAttributes();
        }
    }

});