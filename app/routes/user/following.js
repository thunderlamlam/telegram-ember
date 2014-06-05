export default Ember.Route.extend({
	
  //model: function(){
  //},
  renderTemplate: function(controller) {
    this.render('user/following', {controller: controller});
  }
});