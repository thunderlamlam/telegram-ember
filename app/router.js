var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.resource('create', { path: '/'}, function () {
  //additional child routes
    this.route('recover_pw');
    this.route('reset_pw');
    this.resource('login', {path: '/:user_id' }, function(){
      this.route('post');
      });
		
    });
});

export default Router;
