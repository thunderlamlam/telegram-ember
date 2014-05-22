var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
	this.resource('create', { path: '/'}, function () {
		//additional child routes
		this.route('login');
		
	});
});

export default Router;
