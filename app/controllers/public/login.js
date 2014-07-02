export default Ember.ObjectController.extend({
  loginFailed: false,

  actions: {
    login: function() {
      var controller = this;
      //get the username and password from the template
      var username = this.get('newUsername');
      var password = this.get('newPassword');
      //console.log(username);
      //console.log(password);
      //userobject is returned by my query
      var promise = this.store.find('user', username);
      promise.then(function(userobject){
        //console.log(userobject);
        //check the password since the username is already checked
        if(password === userobject.get('password')){

          controller.setProperties({
          loginFailed:false
        });
          controller.get('session').set('user', userobject);
      //trying to send it to /login page
        controller.transitionToRoute('dashboard');
      }
      else{
      //failure
        controller.setProperties({
        loginFailed:true
        });
      }        
        });
      
      
    }
  }
  
});