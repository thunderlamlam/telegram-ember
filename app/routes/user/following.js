export default Ember.Route.extend({
  //model: function() { 
    //return this.store.find('user');
    //
    //return this.modelFor('user').get('following')
  //}
  model: function () {
    return this.get('session').get('user');
  },
  renderTemplate: function(controller) {
    this.render('user/following', {controller: controller});
  }
});