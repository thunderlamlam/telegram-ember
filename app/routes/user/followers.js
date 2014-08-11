export default Ember.Route.extend({
  //model: function() { 
    //return this.store.find('user');
    //
    //return this.modelFor('user').get('followers')
  //}
  model: function () {
    //return this.modelFor('user').get('followers');
    this.store.find("user", {follows: this.get('session').get("user").get("id")});
  }

});