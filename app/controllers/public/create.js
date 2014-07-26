export default Ember.ObjectController.extend({
  content: null,
  my: null,
  userExisted: false,
  newCusername: '',
  newCpassword: '',
  newCname: '',
	actions: {
    create: function() {
      var controller = this;
      var dname = this.get('newCname');
      var username = this.get('newCusername');
      var dpassword = this.get('newCpassword');

      //if(this.store.find('user', username)){
      //  controller.setProperties({
      //    userExisted:true
      //  });
      //}
      //else{
      //  controller.setProperties({
      //    userExisted:false
      //  });
        
        //debugger;

        var person = this.store.createRecord('user', {
          id: username,
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