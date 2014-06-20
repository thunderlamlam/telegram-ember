export default Ember.ObjectController.extend({
  uppercaseName: function() {
    console.log('The session object is accessible from any controller:', this.get('session.user.name'), this.get('session.isAuthenticated'));
    return this.get('model').get('name').toUpperCase();
  }.property('model.name')
  //var promise = this.store.find('user');
  //promise.then(function(userobject){
        //console.log(userobject);
        //check the password since the username is already checked
        
//        })
  
});