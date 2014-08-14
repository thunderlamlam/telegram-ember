export default Ember.ArrayController.extend({

  actions: {
  	follow: function(user) {
      var controller = this;
      $.ajax({
        url: '/api/follow/',
        type: 'POST',
        dataType: 'json',
        data: {followingUsername: user},
        success: function(data) {
          controller.transitionToRoute('user.following');
          console.log("success" + data);
        },
        error: function(err) {
        	alert('Sorry, please try clicking Follow again!');
        	console.log("error" + user);
        }
      });
    },
    unfollow: function(user){
      var controller = this;
      $.ajax({
        url: '/api/unfollow/',
        type: 'POST',
        dataType: 'json',
        data: {followingUsername: user},
        success: function() {
          controller.transitionToRoute('user.following');
        },
        error: function(err) {
        	alert('Sorry, please try clicking Unfollow again!');
        	

        }
      });
    }
  },

  followed: function() {

  }

});