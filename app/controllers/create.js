export default Ember.ObjectController.extend({
  loginFailed: false,
  actions: {
    login: function() {
      //get the username and password from the template
      var username = this.get('newUsername');
      var password = this.get('newPassword');
      console.log(username);
      console.log(password);
      if(username == 'emily' && password == '1234'){
        //success
        console.log('success');
        this.setProperties({
          loginFailed:false
        });
      }
      else{
        //failure
        this.setProperties({
          loginFailed:true
        });
      }
      
    }
  }
  
});