export default Ember.Route.extend({
  //model: function() { 
    //return this.store.find('user');
    //
    //return this.modelFor('user').get('followers')
  //}
  model: function () {
    //return this.modelFor('user').get('followers');
    return this.store.find("user", {follows: this.modelFor('user').get("id")});
  }

});