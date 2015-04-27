import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string', { async: true }),
  albums: DS.hasMany('album', { async: true }),
  tracks: DS.hasMany('track', { async: true })
});