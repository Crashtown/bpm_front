import DS from 'ember-data';
import Ember from 'ember';

var inflector = Ember.Inflector.inflector;
inflector.irregular('search', 'search');

export default DS.Model.extend({
  resultCount: DS.attr('number', {async: true}),
  artists: DS.hasMany('artist', {async: true}),
  tracks: DS.hasMany('track', {async: true}),
  albums: DS.hasMany('album', {async: true})
});