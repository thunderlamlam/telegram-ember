export default Ember.ObjectController.extend({
  actions: {
  	follow: function() {
      var duser = this.session.user;
      var dFollow =  this.store.push('user', {
      id: duser,
      following: DS.hasMany('User') //what to do here?
      });

      dFollow.save();

  	  },
  	unfollow: function(){
      console.log("hello");

  	},
  	logout: function(){
  	  var controller = this;
  	  $.get( "/api/logout", function(){
        controller.transitionToRoute('public.login');
      });
  	}
  },

  followed: function() {

  }

  
});