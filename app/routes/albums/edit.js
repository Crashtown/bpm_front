import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.modelFor('album');
  },
  actions: {
    goBack: function(){
      this.transitionToRoute('collection');
    }
  }
});