export default Ember.Route.extend({
  model: function() {

    return this.store.find("post", {ownedBy: this.get('session').get("user").get("id"), skip: 40, limit: 20});

  }

  

});