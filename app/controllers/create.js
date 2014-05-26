export default Ember.ObjectController.extend({
  actions: {
    login: function() {
      //get the username and password from the template
      var username = this.get('newUsername');
      var password = this.get('newPassword');
      
      console.log(username);
      console.log(password);
      console.log(this.store.find('User', 1));
      if(username == 'model.username' && password == 'model.password'){
        console.log('yay');

      }
      else{
        console.log("yikes");}
      }
    }
  
});