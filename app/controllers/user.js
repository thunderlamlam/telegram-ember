export default Ember.ObjectController.extend({
  actions: {
  	follow: function() {
      var controller = this;
      $.ajax({
        url: '/api/follow/',
        type: 'POST',
        dataType: 'json',
        data: {},
        success: function() {
          controller.transitionToRoute('user.index');
        },
        error: function(err) {
          alert('Sorry, please try clicking Follow again!');
          console.log(err);

        }
      });
    },
  	unfollow: function(){
      var controller = this;
      $.ajax({
        url: '/api/unfollow/',
        type: 'POST',
        dataType: 'json',
        data: {},
        success: function() {
          controller.transitionToRoute('user.index');
        },
        error: function(err) {
          alert('Sorry, please try clicking Unfollow again!');
          console.log(err);

        }
      });
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