export default Ember.ObjectController.extend({
  loginFailed: false,

  actions: {
    login: function() {
      var controller = this;
      //get the username and password from the template
      var username = this.get('newUsername');
      var password = this.get('newPassword');
      console.log(username);
      console.log(password);
      var promise = this.store.find('user', username);
      promise.then(function(userobject){
        console.log(userobject);
        //check the password since the username is already checked
        if(password == userobject.get('password')){
      
          console.log('success');
          controller.setProperties({
          loginFailed:false
        });
      //trying to send it to /login page
        controller.transitionToRoute('create.login');
      }
      else{
      //failure
        controller.setProperties({
        loginFailed:true
        });
      }        
        })
      
      
    }
  }
  
});