export default Ember.Route.extend({
  //model: function() { 
    //return this.store.find('user');
    //
    //return this.modelFor('user').get('following')
  //}
  renderTemplate: function(controller) {
    this.render('user/following', {controller: controller});
  }
});