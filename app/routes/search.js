import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return Ember.$.getJSON('http://localhost:3000/api/v1/search', {q:params.query})
  },
  setupController: function(controller, model){
    this.store.pushPayload('track', { tracks: model.tracks });
    controller.set('query', model.search.query )
    controller.set('tracks', model.tracks )
  }
});