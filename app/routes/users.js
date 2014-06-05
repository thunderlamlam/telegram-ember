export default Ember.Route.extend({

  model: function() {
    return this.store.find('user');
  },
  renderTemplate: function(controller) {
    this.render('users', {controller: controller});
  }
});