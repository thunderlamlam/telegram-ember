var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  //this.resource('create', { path: '/'}, function () {
  //additional child routes
  //  this.route('recover_pw');
  //  this.route('reset_pw');
  //  this.resource('login', {path: '/:user_id' }, function(){
  //    this.route('post');
  //    this.route('followers');
  //    });
		
  //  });
  this.resource('public', { 'path' : '/'}, function() {
    this.route('create', { 'path' : '/' });
    this.route('login', { 'path' : '/login' });
    this.route('resetpw', { 'path' : '/resetpw' });
    this.route('resetconfirm', { 'path' : '/resetpw/confirm' });
  });



  this.resource('user', {'path' : '/users/:user_id'}, function() {
      // this.route(‘index’, {path: ‘/’});
      this.route('following');
      this.route('followers');
    });
  
  this.route('dashboard');  // URL: /dashboard
});


export default Router;


  
