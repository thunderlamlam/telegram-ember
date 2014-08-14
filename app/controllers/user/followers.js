export default Ember.ArrayController.extend({
  actions: {
  	follow: function() {
      var controller = this;
      $.ajax({
        url: '/api/follow/',
        type: 'POST',
        dataType: 'json',
        data: '',
        success: function() {
          controller.transitionToRoute('user.followers');
          console.log("success");
        },
        error: function(err) {
          alert('Sorry, please try clicking Follow again!');
          console.log("error" + err);
        }
      });
    },
    unfollow: function(){
      var controller = this;
      $.ajax({
        url: '/api/unfollow/',
        type: 'POST',
        dataType: 'json',
        data: '',
        success: function() {
          controller.transitionToRoute('user.followers');
        },
        error: function(err) {
          alert('Sorry, please try clicking Unfollow again!');
          console.log("error" + err);

        }
      });
    }
  },

  followed: function() {

  }
});