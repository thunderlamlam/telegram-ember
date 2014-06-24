export default Ember.Route.extend({
  //model: function() { 
    //return this.store.find('user');
    //
    //return this.modelFor('user').get('followers')
  //}
  model: function () {
    return this.modelFor('user').get('followers');
  },
  renderTemplate: function(controller) {
    this.render('user/followers', {controller: controller});
  }

});