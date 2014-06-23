export default Ember.Route.extend({
  //model: function(params, transition) {
  //  return { user: params.user_id };
  //},
  //serialize: function(model) {
  //  return { user: model.get('user_id') };
  //} ,
  model: function () {
    return Ember.Object.create(
    {name: 'emily'});
  }, 
  setupController: function(controller, model) {
    console.log('The session object is accessible from any route:', this.get('session.isAuthenticated'));
    console.log('We can set the currently authenticated user on the session object, so that we can access it from all the other routes and controllers.');
    this.get('session').set('user', model);
    controller.set('model', model);
  },
  renderTemplate: function(controller) {
    this.render('dashboard');
    this.render('topbar', {into: 'dashboard', outlet: 'topbar'});
    this.render('dashboardcontent', {into: 'dashboard', outlet: 'dashboardcontent'});
  }
});
