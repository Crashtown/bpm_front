import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    // here we tell the route to use its parent model
    return this.modelFor('track');
  },
  actions: {
    goBack: function(){
      this.transitionToRoute('collection');
    }
  }
});