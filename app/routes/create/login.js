export default Ember.Route.extend({
  model: function(){
  },
  renderTemplate: function(controller) {
    this.render('create/login', {controller: controller});
   }
});