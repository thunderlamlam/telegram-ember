export default Ember.ObjectController.extend({
  actions: {
  	follow: function() {
  	  },
  	unfollow: function(){

  	},
  	logout: function(){
  	  var controller = this;
  	  $.get( "logout" );
  	  controller.transitionToRoute('public.login');
  	}
  },

  followed: function() {

  }

  
});