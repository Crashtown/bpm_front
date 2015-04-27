import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string', {async: true}),
  year: DS.attr('number', {async: true}),
  coverUrl: DS.attr('string', {async: true}),
  tracks: DS.hasMany('track', {async: true}),
  artist: DS.belongsTo('artist', {async: true})
});
