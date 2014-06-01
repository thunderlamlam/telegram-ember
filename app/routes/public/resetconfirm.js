export default Ember.Route.extend({
	
  //model: function(){
  //},
  renderTemplate: function(controller) {
    this.render('public/resetconfirm', {controller: controller});
  }
});