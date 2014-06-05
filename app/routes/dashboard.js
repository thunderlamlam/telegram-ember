export default Ember.Route.extend({
  model: function(params, transition) {
    return { user: params.user};
  },
  renderTemplate: function(controller) {
    this.render('dashboard');
    this.render('topbar', {into: 'dashboard', outlet: 'topbar'});
    this.render('dashboardcontent', {into: 'dashboard', outlet: 'dashboardcontent'});
  }
});
