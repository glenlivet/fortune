import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('project-prototypes');
  this.route('project-prototype',
  {path: '/project-prototype/:project_prototype_id'});
});

export default Router;
