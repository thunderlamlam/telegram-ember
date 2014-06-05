export default Ember.Route.extend({
  //user_id: emily,
  renderTemplate: function(controller) {
    this.render('dashboard');
    this.render('topbar', {into: 'dashboard', outlet: 'topbar'});
    this.render('dashboardcontent', {into: 'dashboard', outlet: 'dashboardcontent'});
  }
});
