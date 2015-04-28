import DS from 'ember-data';
import Ember from 'ember';

var inflector = Ember.Inflector.inflector;
inflector.uncountable('search');

export default DS.Model.extend({
  count: DS.attr('number', {async: true}),
  tracks: DS.hasMany('track', {async: true})
});