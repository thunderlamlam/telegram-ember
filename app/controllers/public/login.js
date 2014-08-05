export default Ember.ObjectController.extend({
  loginFailed: false,
  newUsername: '',
  newPassword: '',

  actions: {
    login: function() {
      var controller = this;
      //get the username and password from the template
      var username = this.get('newUsername');
      var password = this.get('newPassword');
      //console.log(username);
      //console.log(password);
      //userobject is returned by my query
      var promise = this.store.find('user', {id: username, password: password, operation: 'login'});      
      promise.then(function(response){
        var loginUser = response.get('firstObject');
        controller.get('session').set('user', loginUser);
        controller.transitionToRoute('dashboard');
        //console.log(userobject);
        //check the password since the username is already checked
        //if(password === userobject.get('password')){

        //  controller.setProperties({
        //  loginFailed:false
        //});
          
      //trying to send it to /login page
        
      //}
      //else{
      //failure
      //  controller.setProperties({
      //  loginFailed:true
      //  });
      //}        
        });
      
      
    }
  }
  
});