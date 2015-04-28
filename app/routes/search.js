import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    Ember.$.getJSON('http://localhost:3000/api/v1/search', {q:params.query}).then(function(search){
      console.log(search);
      return search;1
    });
  },
  setupController: function(controller, model){
    controller.set('tracks', model.tracks);
  }
});