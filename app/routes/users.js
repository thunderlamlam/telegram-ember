export default Ember.Route.extend({
  //user_id: emily,

  model: function() {
    return this.store.find('user');
  },
  renderTemplate: function(controller) {
    this.render('users', {controller: controller});
  }
});