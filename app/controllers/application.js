import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    search: function(){
      this.transitionTo('search', this.get('query'))
    }
  }
});