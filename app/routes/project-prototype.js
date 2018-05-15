import Route from '@ember/routing/route';
import { next } from '@ember/runloop';

export default Route.extend({
  model(params) {
    return this.get('store').findRecord(
      'project-prototype', params['project_prototype_id'])
  },
  actions: {
    didTransition() {
      next(this, function() {
        $('#demo-settings').puidialog({
          responsive: true,
          width: 800,
          modal: true
        });
        $('#demo-btn').puibutton({
          icon: 'fa-external-link-square',
          click: function(){
            $('#demo-settings').puidialog('show');
          }
        });
      });
    },
    initDemoSettingsDialog() {

    }
  }
});
