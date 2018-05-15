import Controller from '@ember/controller';
import EmberObject from '@ember/object';

export default Controller.extend({
  demoSettings: EmberObject.create({
    serverEndpoint: '',
    serverKey: '',
    serverOS: '',
    serverUser: '',
    projectId: '',
    taskId: ''
  }),
  actions: {
    startDemo() {
      var demoAction = this.get('store').createRecord('demoable', {
        serverEndpoint: this.get('demoSettings').get('serverEndpoint'),
        serverKey: this.get('demoSettings').get('serverKey'),
        serverOS: this.get('demoSettings').get('serverOS'),
        serverUser: this.get('demoSettings').get('serverUser'),
        projectId: this.get('demoSettings').get('projectId'),
        taskId: this.get('demoSettings').get('taskId')
      });
      demoAction.save();
    }
  }
});
