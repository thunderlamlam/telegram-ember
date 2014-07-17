export default Ember.ArrayController.extend({
  sortProperties: ['date'],
  sortAscending: false,

  actions: {remove: function(rpost) {
      rpost.deleteRecord();
      rpost.save();
      }
  }

});