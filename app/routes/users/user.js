export default Ember.Route.extend({
	
  //model: function(){
  //},
  model: function() {
    return this.store.find('user');
  }
});