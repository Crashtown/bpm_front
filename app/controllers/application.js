import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    search: function(){
      this.transitionToRoute('search', this.get('query'));
    }
  }
});