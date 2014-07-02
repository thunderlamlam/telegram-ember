export default Ember.ObjectController.extend({
	actions: {
    create: function() {
      var controller = this;
      //get the username and password from the template
      var name = this.get('newName');
      var username = this.get('newUsername');
      var password = this.get('newPassword');
      controller.transitionToRoute('dashboard');
    }
    }
});