export default Ember.Route.extend({
  model: function() {
    return this.store.find('Post',1);
  }

  

});