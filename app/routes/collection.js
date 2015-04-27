import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
   return this.store.find('album'); 
  },
  actions: {
    edit: function(trackId){
      this.transitionTo('album.edit', trackId);      
    }
  }
});