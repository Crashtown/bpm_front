import DS from 'ember-data';

export default DS.Model.extend({
  trackNumberTag: DS.attr('number', {async: true}),
  titleTag: DS.attr('string', {async: true}),
  albumTag: DS.attr('string', {async: true}),
  yearTag: DS.attr('number', {async: true}),
  album: DS.belongsTo('album', {async: true}),
  artist: DS.belongsTo('artist', {async: true})
});
