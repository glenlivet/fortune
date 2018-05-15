import DS from 'ember-data';
import { camelize } from '@ember/string';

export default DS.JSONAPISerializer.extend({
  keyForAttribute: function(attr, method) {
    return camelize(attr);
  },
 keyForRelationship: function(key, relationship, method) {
   return camelize(key);
 }
});
