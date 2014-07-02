export default Ember.ObjectController.extend({
  isEditing: false,
  //uppercaseName: function() {
    //console.log('The session object is accessible from any controller:', this.get('session.user.name'), this.get('session.isAuthenticated'));
  //  return this.get('model').get('name').toUpperCase();
  //}.property('model.name'),

  actions: {
  	publish: function() {
  	  this.set('isEditing', true);
  	  },
  	doneEditing: function() {
      this.set('isEditing', false);
  	  }
  },

  postBody: null,

  txtCount: function() {
  	var maxLength = 140;
    return maxLength - this.get('postBody.length');
  }.property('postBody'),

  characters: function() {
    return this.get('txtCount') === 1 ? 'character' : 'characters';
  }.property('txtCount')
  //var promise = this.store.find('user');
  //promise.then(function(userobject){
        //console.log(userobject);
        //check the password since the username is already checked
        
//        })
  
});