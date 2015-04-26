import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType,
  rootUrl: '/collection'
});

Router.map(function() {
  this.resource('tracks', function(){
    this.resource('track', { path: '/:id' }, function(){
      this.route('edit', { path: 'edit' });
    });
  });
  this.resource('albums', function(){
    this.resource('album', { path: '/:id' }, function(){
      this.route('edit', { path: 'edit' });
    });
  });
  this.resource('artists', function(){
    this.resource('artist', { path: '/:id' }, function(){
      this.resource('edit', { path: 'edit'});
    });
  });
  this.route('collection');
});

export default Router;
