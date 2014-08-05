export default Ember.Route.extend({
  beforeModel: function() {
    var route = this;
    var promise = this.store.find('user', {isAuthenticated: true});
    return promise.then(function(users) {
      if (users && users.get('length') > 0) {
        var user = users.get('firstObject');
        route.set('session.user', user);
      }
      return users;
    });
  }
});