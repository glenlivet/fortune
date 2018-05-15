import DS from 'ember-data';

export default DS.Model.extend({
  serverEndpoint: DS.attr(),
  serverKey: DS.attr(),
  serverOS: DS.attr(),
  serverUser: DS.attr(),
  projectId: DS.attr(),
  taskId: DS.attr()
});
