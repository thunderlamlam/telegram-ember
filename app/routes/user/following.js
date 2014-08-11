export default Ember.Route.extend({
  //model: function() { 
    //return this.store.find('user');
    //
    //return this.modelFor('user').get('following')
  //}
  model: function () {
    //return this.modelFor('user').get('following');
    this.store.find("user", {followedBy: this.get('session').get("user").get("id")});

  }
});