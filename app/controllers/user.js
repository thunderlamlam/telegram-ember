export default Ember.ObjectController.extend({

  actions: {
  	follow: function(user) {
      var controller = this;
      $.ajax({
        url: '/api/follow/',
        type: 'POST',
        dataType: 'json',
        data: {followingUsername: user},
        success: function(data) {
          controller.transitionToRoute('user.index');
          console.log("success" + data);
        },
        error: function(err) {
          alert('Sorry, please try clicking Follow again!');
          console.log("error" + err + user);
        }
      });
    },
  	unfollow: function(user){
      var controller = this;
      $.ajax({
        url: '/api/unfollow/',
        type: 'POST',
        dataType: 'json',
        data: {unfollowingUsername: user},
        success: function() {
          controller.transitionToRoute('user.index');
        },
        error: function(err) {
          alert('Sorry, please try clicking Unfollow again!');
          console.log("error" + err + user);

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

  isFollowed: function() {
    return false;
    }

    
});