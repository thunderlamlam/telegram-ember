export default Ember.ObjectController.extend({
  UserExisted: false,
	actions: {
    create: function() {
      var controller = this;
      var dname = this.get('newName');
      var username = this.get('newUsername');
      var dpassword = this.get('newPassword');

      //if(this.store.find('user', username)){
      //  controller.setProperties({
      //    UserExisted:true
      //  });
      //}
      //else{
      //  controller.setProperties({
      //    UserExisted:false
      //  });
        
        //debugger;

        var person = this.store.createRecord('user', {
          //id: username,
          name: dname,
          password: dpassword
        });

        person.save().then(function(userobject){
          controller.get('session').set('user', userobject);
          controller.transitionToRoute('dashboard');
        });
      //}        
    }
  }
});