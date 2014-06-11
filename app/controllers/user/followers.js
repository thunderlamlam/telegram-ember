export default Ember.ObjectController.extend({
  isFollowers: true,
  actions: {
    followers: function() {
      var controller = this;
      var promise = this.store.find('user', username);
      promise.then(function(userobject){
        
        if(userobject.get('follower')){
      
          console.log('hihi');
          this.set('isFollowers', true);
      
      }
      else{
      //failure
        console.log('no');
        this.set('isFollowers', false);
      }        
        })
      
      
    }
  }
  
});