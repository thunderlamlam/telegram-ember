export default Ember.Route.extend({
	
  //model: function(){
  //},
  renderTemplate: function(controller) {
    this.render('users/user/following', {controller: controller});
  }
});